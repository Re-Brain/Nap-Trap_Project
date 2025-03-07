import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    label : string
}

const WarningText = ({ label }: Props) => {
  return (
    <View style={styles.textView}>
      <Text style={styles.text}>{label}</Text>
    </View>
  )
}

export default WarningText

const styles = StyleSheet.create({
    textView : {
        marginBottom : 20,
    },
    text : {
        fontSize : 32,
        color : '#fff',
        textAlign : 'center',
        fontWeight : 'bold',
    }
})