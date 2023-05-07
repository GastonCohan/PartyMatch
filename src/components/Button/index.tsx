import React from 'react';
import { Text, TextInput, TouchableOpacity, View} from 'react-native'

const ButtonPersonalized = (props) => {

  return (
        <View style={{borderWidth: 1, borderColor: '#9D9393', borderRadius: 10, backgroundColor:'#2E336A', width:'100%', justifyContent:'center', alignItems:'center', height: 30, minWidth: '80%'}}>
            <Text style={{color:'white', fontSize:16}}>{props.label}</Text>
        </View>
  );
};

export default ButtonPersonalized;