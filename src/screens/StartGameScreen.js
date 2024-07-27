import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import PrimaryButton from '../componenets/PrimaryButton';

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={true}
      />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 80,
    backgroundColor: '#4e0329',
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8,
    shadowColor: 'black', // allow to pick color
    shadowOffset: {width: 0, height: 2}, /// then want an object, where you control , how much the shadow should be offset to the orignal brack from it belong
    shadowRadius: 6, // how much the shadow expan
    shadowOpacity: 0.25, /// how transparent the shadow is
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 9,
    textAlign: 'center',
    // alignSelf: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer:{
    flex:1
  }
});
export default StartGameScreen;