import { View, Text, TextInput, Button, ImageBackground, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../../firebase-config';
import ButtonPersonalized from '../../components/Button';
import { sendPasswordResetEmail} from "firebase/auth"
import Modal from "react-native-modal";

const ResetPassword = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [isModalVisible, setModalVisible] = useState(false);
    const [errorMessageFirebase, setErrorMessageFirebase] = useState('');
    const [sendLogin, setSendLogin] = useState(false);

    const image = { uri: "https://img.freepik.com/fotos-premium/coctel-colores-sobre-fondo-negro_130291-3704.jpg?w=360" };
      const goToLogin = () => {
        navigation.goBack()
      }

      const toggleModal = () => {
        setModalVisible(!isModalVisible);
        if(sendLogin){
          goToLogin()
        }
      };

      const forgotPassword = (email) => {
        console.log("reset email sent to " + email);
        sendPasswordResetEmail(auth, email, null)
            .then(() => {
              setErrorMessageFirebase('Mail enviado correctamente, no olvides revisar la seccion de Spam')
              setModalVisible(true)
              setSendLogin(true)
            })
            .catch(function (e) {
              const errorMessage = e.message;
              console.log(errorMessage)
            if(errorMessage === 'Firebase: Error (auth/invalid-email).'){
              setErrorMessageFirebase('El usuario/mail o contraseña no son correctos')
            } else if (errorMessage === 'Firebase: Error (auth/user-not-found).'){
              setErrorMessageFirebase('No se reconoce el Usuario')
            } else if (errorMessage === 'Firebase: Error (auth/missing-email).'){
              setErrorMessageFirebase('Ingresa un usuario/mail')
            }
            setModalVisible(true)
            });
    };
      
  return (
    <View style={{height:"100%"}}>
    <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
        <View style={{alignItems:'center', marginTop: '10%'}}>
            <Text style={{color: 'white', fontSize: 30}}>
                PARTYMATCH
            </Text>
        </View>
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{color: 'white', fontSize: 24, justifyContent:'center', alignItems:"center"}}>
            Olvide la contraseña
        </Text>
        <View style={{marginLeft:'0%', minWidth:'90%'}}>
          <View style={{borderWidth: 1, borderColor: '#9D9393', borderRadius: 10, paddingLeft: 10, height: 50, justifyContent:'center', marginTop: '7%'}}>
              <TextInput placeholder='Usuario / Mail' placeholderTextColor='white' color='white' onChangeText={(text) => {setEmail(text)}}></TextInput>
          </View>
        </View>
        <View style={{width:'100%', justifyContent:'center', alignItems:'center', marginTop: "5%"}}>
          <TouchableOpacity onPress={() => forgotPassword(email)}>
            <ButtonPersonalized label="Enviar mail"></ButtonPersonalized>
          </TouchableOpacity>
        </View>
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
        <View style={{width: '25%', marginBottom: '5%', marginLeft: '5%'}}>
          <TouchableOpacity onPress={() => goToLogin()}>
            <ButtonPersonalized label="Volver"></ButtonPersonalized>
          </TouchableOpacity>
        </View>
    </ImageBackground>
</View>
  )
}

export default ResetPassword;