import React from 'react';
import StartGameScreen from './src/screens/StartGameScreen';
import {StyleSheet, View, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function App() {
  return (
  <LinearGradient style={styles.rootScreen} colors={['#4e0329','#ddb52f',]}>
<ImageBackground source={require('./src/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>

      <StartGameScreen />
</ImageBackground>

  </LinearGradient>
    
  );
}


const styles = StyleSheet.create({
  rootScreen:{
   
    flex:1
  },
  backgroundImage:{
    opacity: 0.15
  }
})