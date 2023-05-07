import { View, Text, Button } from 'react-native'
import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../../../firebase-config';

const ProfileScreen = ({navigation}) => {
  
  const logOut = () => {
    signOut(auth).then(() => {
      goToLogIn()
    }).catch((error) => {
      Alert.alert(error)
    });
  }

  const goToLogIn = () => {
    navigation.navigate('Login')
  }

  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title='Cerrar sesion' onPress={() => logOut()}></Button>
    </View>
  )
}

export default ProfileScreen