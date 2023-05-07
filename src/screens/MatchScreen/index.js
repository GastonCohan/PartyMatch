import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import Swiper from 'react-native-deck-swiper'

const MatchScreen = () => {

  return (
    <View style={styles.container}>
    <View style={{alignItems:'center'}}>
        <Text style={{color:'black', marginTop: '10%', fontSize: 30}}>PARTYMATCH</Text>
    </View>
        <View style={{marginTop: '-10%'}}>
    <Swiper
        cards={['GRETTA', 'MARIA', 'JUANA', 'SOFIA', 'CAMILA', 'MORENA', 'JULIETA']}
        renderCard={(card) => {
            return (
                <View style={styles.card}>
                    <Text style={styles.text}>{card}</Text>
                </View>
            )
        }}
        onSwiped={(cardIndex) => {console.log(cardIndex)}}
        onSwipedAll={() => {console.log('onSwipedAll')}}
        cardIndex={0}
        backgroundColor={'#4FD0E9'}
        stackSize= {3}
        disableTopSwipe
        disableBottomSwipe
        >
    </Swiper>
        </View>
    <View style={{marginTop:"115%", marginLeft:"10%"}}>
        <Text style={{color:'black', marginTop: '3%'}}>Gretta Cozzolino, 24</Text>
        <Text style={{color:'black', marginTop: '3%'}}>Buenos Aires</Text>
        <Text style={{color:'black', marginTop: '3%'}}>Influencer</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  card: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "grey",
    height:350
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});

export default MatchScreen