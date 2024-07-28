import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

export default function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}


const styles=StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:colors.accent500,
        textAlign:'center',
        borderWidth:2,
        borderColor:"#ddbf25",
        padding:12
    }
})