import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const TabNavigation = (props) => {
    const navigation = useNavigation(); 

    const homeChooseScreen = () => {
        if(props.screen === 'Home'){
            return 'red'
        }  else {
            return 'black'
        }
    }
    
    const ChatChooseScreen = () => {
        if(props.screen === 'Chat'){
            return 'red'
        }  else {
            return 'black'
        }
    }
    const eventosChooseScreen = () => {
        if(props.screen === 'definir'){
            return 'red'
        }  else {
            return 'black'
        }
    }
    const perfilChooseScreen = () => {
        if(props.screen === 'Perfil'){
            return 'red'
        }  else {
            return 'black'
        }
    }

    const goToProfile = () => {
        navigation.navigate('Perfil')
    }

    const goToHome = () => {
        navigation.navigate('Home')
    }

  return (
    <View style={{flexDirection:'row', width:'100%', borderTopWidth: 1, height: '100%'}}>
        <TouchableOpacity style={{width:'25%', backgroundColor: homeChooseScreen()}} onPress={() => goToHome()}>
        <View style={{width: '100%', justifyContent:'center', alignItems:'center', height: '100%', borderLeftWidth:0.5, borderRightWidth: 0.5}}>
      <Text style={{color:"white"}}>Home</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'25%', borderLeftWidth:0.5, borderRightWidth: 0.5, backgroundColor: ChatChooseScreen()}} onPress={() => {}}>
         <View style={{width: '100%', justifyContent:'center', alignItems:'center', height: '100%'}}>
      <Text style={{color:"white"}}>Chat</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'25%', borderLeftWidth:0.5, borderRightWidth: 0.5, backgroundColor: eventosChooseScreen()}} onPress={() => {}}>
         <View style={{width: '100%', justifyContent:'center', alignItems:'center', height: '100%'}}>
      <Text style={{color:"white"}}>Eventos</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'25%', borderLeftWidth:0.5, borderRightWidth: 0.5, backgroundColor: perfilChooseScreen()}} onPress={() => goToProfile()}>
         <View style={{width: '100%', justifyContent:'center', alignItems:'center', height: '100%'}}>
      <Text style={{color:"white"}}>Perfil</Text>
        </View>
        </TouchableOpacity>
      </View>
  )
}

export default TabNavigation