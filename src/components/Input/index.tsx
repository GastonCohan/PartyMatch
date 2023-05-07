import React from 'react';
import { Text, TextInput, View} from 'react-native'

const InputPersonalized = (props) => {

  return (
    <View style={{borderWidth: 1, borderColor: '#9D9393', borderRadius: 10, paddingLeft: 10, height: 50, justifyContent:'center'}}>
        <TextInput placeholder={props.label} placeholderTextColor='white' color='white'></TextInput>
    </View>
  );
};

export default InputPersonalized;