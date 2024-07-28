import React, {useState} from 'react';
import StartGameScreen from './src/screens/StartGameScreen';
import {StyleSheet, View, ImageBackground, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './src/screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient style={styles.rootScreen} colors={['#4e0329', '#ddb52f']}>
      <ImageBackground
        source={require('./src/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
