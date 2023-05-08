import { View, Text, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from 'react-native-geolocation-service';
import { Platform, PermissionsAndroid } from 'react-native';
import Modal from "react-native-modal";

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [markers, setMarkers] = useState([])
  const [event, setEvent] = useState('Busca un evento para asistir')
  const [myLat, setMyLat] = useState(0)
  const [myLng, setMyLng] = useState(0)
  const [isModalVisible, setModalVisible] = useState(false);
  const [eventName, setEventName] = useState('');
  const [rating, setRating] = useState('');
  const [direccion, setDireccion] = useState('');
  const [placeId2, setPlaceId] = useState('');

  const goToDescriptionScreen = () => {
    if (event === 'Busca un evento para asistir') {
      setModalVisible(true)
    } else {
      navigation.navigate('Event', { name: eventName, rating: rating, direccion: direccion, place_id: placeId2 })
    }
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onChangeSearch = query => setSearchQuery(query);

  useEffect(() => {
    requestPermissions()
    componentDidMount()
    fetchingData()
  }, [myLat, myLng]);

  const componentDidMount = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setMyLat(position.coords.latitude);
        setMyLng(position.coords.longitude);
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  useEffect(() => {
    setTimeout(function () {
      fetchingData()
    }, 5000)
  }, [myLat, myLng]);

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${myLat},${myLng}&radius=10000&type=night_club&key=AIzaSyCsC9NCObVkBA4TWwRJZkIQXHyoT_3ELB4`

  const fetchingData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((JsonResponse) => {
        setMarkers(JsonResponse.results.filter(item => item.business_status !== 'CLOSED_TEMPORARILY'))
      }).catch((error) => {
        console.log('error', error)
      })
  }

  const requestPermissions = async () => {
    if (Platform.OS === 'ios') {
      const auth = await Geolocation.requestAuthorization("whenInUse");
      // if(auth === "granted") {
      console.log(auth)
      // }
    }

    if (Platform.OS === 'android') {
      const auth = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (auth === 'granted') {
        componentDidMount()
      }
    }
  }

  return (
    <View style={{ backgroundColor: '#2E336A', height: '100%' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '9%' }}>
        <Text style={{ fontSize: 25, color: "#fff", fontFamily: "Cochin" }}>PARTYMATCH</Text>
      </View>
      <View style={{ marginTop: '5%', width: "100%", alignItems: "center" }}>
        <Searchbar
          placeholder="Buscar evento..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ borderTopWidth: 1, width: "100%", alignItems: 'center', borderColor: 'black', backgroundColor: '#fff' }}
        />
      </View>
      <View style={{ marginTop: '-0.5%', justifyContent: 'center', alignItems: "center", height: '74%' }}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={{ height: '100%', width: "100%" }}
          zoomEnabled={true}
          scrollEnabled={true}
          showsScale={true}
          region={{
            latitude: myLat,
            longitude: myLng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          {markers.map((item, i) =>
            <Marker onPress={() => setEvent('Asistir a ' + item.name) & setEventName(item.name) & setRating(item.rating) & setDireccion(item.vicinity) & setPlaceId(item.place_id)} key={i}
              coordinate={{ latitude: item.geometry.location.lat, longitude: item.geometry.location.lng }}
              title={item.name}>
            </Marker>
          )}
          <Marker onPress={() => setEvent('Busca un evento para asistir')}
            coordinate={{ latitude: myLat, longitude: myLng }}
            title='Mi ubicacion'>
            <Image source={require('../../assets/geolocalizacion.png')} style={{ height: 35, width: 45 }} />
          </Marker>
        </MapView>
      </View>
      <View style={{ marginTop: '0%', width: "100%" }}>
        <Button title={event} onPress={() => goToDescriptionScreen()} color="#2E336A" style={{ width: "100%" }} />
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={{ backgroundColor: "white", borderRadius: 5 }}>
          <View style={{ height: 80, justifyContent: "center", alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Debes seleccionar algun evento al que asistir</Text>
          </View>
          <View style={{ width: '100%' }}>
            <Button title="Cerrar" onPress={toggleModal} color="#2E336A" />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default HomeScreen