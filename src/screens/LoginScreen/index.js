import { View, Text, TextInput, Button, Alert, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../../firebase-config';
import { signInWithEmailAndPassword } from "firebase/auth";
import ButtonPersonalized from '../../components/Button';
import eye from '../../assets/eyePassword.png'
import eye2 from '../../assets/eyePasswordShow.png'
import Modal from "react-native-modal";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [eyeIcon, setEyeIcon] = useState(true)
    const [passwordShow, setPasswordShow] = useState(true)
    const [isModalVisible, setModalVisible] = useState(false);
    const [errorMessageFirebase, setErrorMessageFirebase] = useState('');

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const image = { uri: "https://img.freepik.com/fotos-premium/coctel-colores-sobre-fondo-negro_130291-3704.jpg?w=360" };

    const logIn = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    goToHome()
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      if(errorMessage === 'Firebase: Error (auth/invalid-email).'){
        setErrorMessageFirebase('El usuario/mail o contraseña no son correctos')
      } else if (errorMessage === 'Firebase: Error (auth/user-not-found).'){
        setErrorMessageFirebase('No se reconoce el Usuario')
      } else if (errorMessage === 'Firebase: Error (auth/wrong-password).'){
        setErrorMessageFirebase('La contraseña es incorrecta')
      }
      setModalVisible(true)
    });
    }

    const goToHome = () => {
      navigation.navigate('Home')
  }

    const goToRegister = () => {
        navigation.navigate('Register')
    }

    const goToResetPassword = () => {
      navigation.navigate('ResetPassword')
  }

    const setEyeShow = () => {
      setEyeIcon(false)
      setPasswordShow(false)
    }

    const setEyeUnshow = () => {
      setEyeIcon(true)
      setPasswordShow(true)
    }

  return (
    <View style={{height:"100%"}}>
    <View style={{height:'92%'}}>
        <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
            <View style={{flex: 1, alignItems:'center', marginTop: '10%'}}>
                <Text style={{color: 'white', fontSize: 30}}>
                    PARTYMATCH
                </Text>
                <Text style={{color: 'white', marginTop: '7%', fontSize: 24}}>
                    Inicia sesión 
                </Text>
                <View style={{marginLeft:'0%', minWidth:'90%'}}>
                    <View style={{marginTop:'7%'}}>
                        <View style={{borderWidth: 1, borderColor: '#9D9393', borderRadius: 10, paddingLeft: 10, height: 50, justifyContent:'center'}}>
                            <TextInput placeholder='Usuario / Mail' placeholderTextColor='white' color='white' onChangeText={(text) => {setEmail(text)}}></TextInput>
                        </View>
                    </View>
                    <View style={{marginTop:'5%'}}>  
                        <View style={{borderWidth: 1, borderColor: '#9D9393', borderRadius: 10, paddingLeft: 10, height: 50, alignItems:'center', flexDirection:'row', justifyContent:'space-between', paddingRight: '5%'}}>
                            <TextInput secureTextEntry={passwordShow} placeholder='Contraseña' placeholderTextColor='white' color='white' onChangeText={(text) => {setPassword(text)}}></TextInput>
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
                </View>
                <View style={{marginTop:'5%', minWidth:'89%'}}> 
                <TouchableOpacity>
                    <Text style={{color:"white", fontSize: 12}} onPress={() => goToResetPassword()}>
                        Olvide la Contraseña
                    </Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => logIn()}> 
                <View style={{marginTop:'7%',  width:'100%', justifyContent:'center', alignItems:'center'}}>
                    <ButtonPersonalized label="Ingresar"></ButtonPersonalized>
                </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
    <View style={{height:'8%', backgroundColor:'#2E336A', justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={() => goToRegister()}>
            <Text style={{color: 'white', fontSize: 16, fontWeight:'bold', textDecorationLine:'underline'}}>
                No tienes cuenta? Registrate!
            </Text>
        </TouchableOpacity>
    </View>
    <View style={{marginTop:'50%'}}>
    <Modal isVisible={isModalVisible}>
        <View style={{backgroundColor:"white", borderRadius: 5}}>
          <View style={{height:80,justifyContent:"center", alignItems:'center'}}>
          <Text style={{color:'black'}}>{errorMessageFirebase}</Text>
          </View>
          <View style={{width:'100%'}}>
          <Button title="Cerrar" onPress={toggleModal} color="#2E336A"/>
          </View>
        </View>
      </Modal>
    </View>
</View>
  );
}

export default LoginScreen