import { View, Text, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AirbnbRating} from 'react-native-ratings';

const EventDescription = ({navigation, route}) => {
  const { name } = route.params;
  const { rating } = route.params;
  const { direccion } = route.params;
  const {place_id} = route.params
  const [urlImage, setUrlImage] = useState('https://www.elgrupoinformatico.com/static/Noticias/2020/07/google-maps-marcador-1200x675.jpg');

  useEffect(() => {
    PlacePhoto()
  }, []);

  const PlacePhoto = () => {
    const placeId = place_id;
    const API_KEY = "AIzaSyCsC9NCObVkBA4TWwRJZkIQXHyoT_3ELB4";

    const fetchPhoto = async () => {
      const photoResponse = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photos&key=${API_KEY}`);
      const photoData = await photoResponse?.json();
      const photoRef = photoData?.result?.photos[0]?.photo_reference;
      const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${API_KEY}`;
      setUrlImage(photoUrl);

      if (!photoUrl) {
        return null; // o un componente de carga
      }
    }
      fetchPhoto();
  };


  return (
    <View style={{backgroundColor:'white', height:'100%'}}>
      <View style={{marginTop: '10%', alignItems:"center"}}>
        <Text style={{fontSize:30, color:'black'}}>{name}</Text>
        <View style={{marginTop: '3%'}}>
        <AirbnbRating
            style={{ paddingVertical: 10}}
            size={20}
            type='star'
            tintColor='white'
            isDisabled
            showRating={false}
            count={rating}
            />
        </View>
      </View>
      <View style={{marginTop:'8%', alignItems:"center"}}>
        <Image source={{uri: urlImage}} style={{height: 250, width:300}}/>
      </View>
      <View style={{marginLeft: '12%', marginTop: '2%'}}>
        <Text style={{color:'black', marginTop: '5%', fontSize: 16}}>Direccion: {direccion ? direccion : 'Sin informacion'}</Text>
        <Text style={{color:'black', marginTop: '5%', fontSize: 16}}>Capacidad: 2200 Personas</Text>
        <Text style={{color:'black', marginTop: '5%', fontSize: 16}}>Horario: 1am / 7am</Text>
        <Text style={{color:'black', marginTop: '5%', fontSize: 16}}>Fecha: 27/12/22</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around', marginTop: '10%'}}>
        <Button title='Volver' onPress={() => {navigation.goBack()}}/>
        <Button title='Asistir' onPress={() => {navigation.navigate('Match')}}/>
      </View>
    </View>
  )
}

export default EventDescription