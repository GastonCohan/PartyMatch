import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import kravi from '../../assets/kravi.png'
import { Rating, AirbnbRating} from 'react-native-ratings';

const EventDescription = ({navigation, route}) => {
  const { name } = route.params;
  const { rating } = route.params;
  const { direccion } = route.params;
  console.log(direccion)
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
        <Image source={kravi} style={{height: 250, width:300}}/>
      </View>
      <View style={{marginLeft: '12%', marginTop: '2%'}}>
        <Text style={{color:'black', marginTop: '5%', fontSize: 16}}>Direccion: {direccion ? direccion : 'No info.'}</Text>
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