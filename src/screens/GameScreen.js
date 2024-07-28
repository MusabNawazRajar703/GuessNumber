import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../componenets/title';

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Geuss</Title>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:12,

    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:"#ddbf25",
        textAlign:'center',
        borderWidth:2,
        borderColor:"#ddbf25",
        padding:12
    }
});
