import { View, Text, TextInput, Button, ImageBackground, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase-config';
import ButtonPersonalized from '../../components/Button';
import InputPersonalized from '../../components/Input'
import eye from '../../assets/eyePassword.png'
import eye2 from '../../assets/eyePasswordShow.png'

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [eyeIcon, setEyeIcon] = useState(true)
    const [passwordShow, setPasswordShow] = useState(true)
    const [eyeIcon2, setEyeIcon2] = useState(true)
    const [passwordShow2, setPasswordShow2] = useState(true)

    const image = { uri: "https://img.freepik.com/fotos-premium/coctel-colores-sobre-fondo-negro_130291-3704.jpg?w=360" };

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log('usuario creado')
          goToLogin()
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert(errorMessage)
        });
      }
      
      const goToLogin = () => {
        navigation.goBack()
      }
      
      const setEyeShow = () => {
        setEyeIcon(false)
        setPasswordShow(false)
      }
  
      const setEyeUnshow = () => {
        setEyeIcon(true)
        setPasswordShow(true)
      }

      const setEyeShow2 = () => {
        setEyeIcon2(false)
        setPasswordShow2(false)
      }
  
      const setEyeUnshow2 = () => {
        setEyeIcon2(true)
        setPasswordShow2(true)
      }

  return (
    <View style={{height:"100%"}}>
    <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
        <View style={{flex: 1, alignItems:'center', marginTop: '10%'}}>
            <Text style={{color: 'white', fontSize: 30}}>
                PARTYMATCH
            </Text>
            <View style={{marginLeft:'0%', minWidth:'90%'}}>
            <View style={{borderWidth: 1, borderColor: '#9D9393', borderRadius: 10, paddingLeft: 10, height: 50, justifyContent:'center', marginTop: '7%'}}>
                            <TextInput placeholder='Usuario / Mail' placeholderTextColor='white' color='white' onChangeText={(text) => {setEmail(text)}}></TextInput>
                        </View>
            <View style={{marginTop:'5%'}}>  
            <View style={{borderWidth: 1, borderColor: '#9D9393', borderRadius: 10, paddingLeft: 10, height: 50, alignItems:'center', flexDirection:'row', justifyContent:'space-between', paddingRight: '5%'}}>
                <TextInput secureTextEntry={passwordShow} placeholder='Contraseña' placeholderTextColor='white' color='white' onChangeText={(text) => {setPassword(text)}} style={{width:'85%'}}></TextInput>
                {
                  eyeIcon ? 
                <TouchableOpacity onPress={() => setEyeShow()}>
                <Image source={eye2} style={{width: 30, height: 35, tintColor: 'white'}}/>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => setEyeUnshow()}>
                  <Image source={eye} style={{width: 30, height: 35, tintColor: 'white'}}/>
                </TouchableOpacity>
                }
            </View>
                    </View>
                    <View style={{borderWidth: 1, borderColor: '#9D9393', borderRadius: 10, paddingLeft: 10, height: 50, alignItems:'center', flexDirection:'row', justifyContent:'space-between', paddingRight: '5%', marginTop: '5%'}}>
                <TextInput secureTextEntry={passwordShow2} placeholder='Repite la contraseña' placeholderTextColor='white' color='white' onChangeText={(text) => {setPassword(text)}} style={{width:'85%'}}></TextInput>
                    {
                  eyeIcon2 ? 
                <TouchableOpacity onPress={() => setEyeShow2()}>
                <Image source={eye2} style={{width: 30, height: 35, tintColor: 'white'}}/>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => setEyeUnshow2()}>
                  <Image source={eye} style={{width: 30, height: 35, tintColor: 'white'}}/>
                </TouchableOpacity>
                }
                </View>
                {/* <View style={{marginTop:'5%'}}>  
                    <InputPersonalized label='Mail'/>
                </View> */}
            </View>
            <View style={{flexDirection:'row', marginTop:'5%'}}>
                <Text style={{color: 'white'}}>Acepto los terminos y condiciones</Text>
            </View>
            <View style={{width:'100%', justifyContent:'center', alignItems:'center', marginTop: "5%"}}>
              <TouchableOpacity onPress={() => handleCreateAccount()}>
                <ButtonPersonalized label="Registrarse"></ButtonPersonalized>
              </TouchableOpacity>
            </View>
        </View>
        <View style={{width: '25%', marginBottom: '5%', marginLeft: '5%'}}>
          <TouchableOpacity onPress={() => goToLogin()}>
        <ButtonPersonalized label="Volver"></ButtonPersonalized>
          </TouchableOpacity>
        </View>
    </ImageBackground>
</View>
  )
}

export default RegisterScreen