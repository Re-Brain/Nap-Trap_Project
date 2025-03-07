import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Link, useRouter } from 'expo-router'
import React from 'react'

type Props = {
  label : string,
  width : number,
  height : number,
  href? : string,
  onClick? : () =>void
}

const Button = ({ label, width, height, href = '#', onClick = () => {}}: Props) => {
  const router = useRouter();

  const handleClick = () => {
    if(onClick) {
      onClick();
    }
    router.push(href); 
  }

  return (
    <View style={[styles.buttonContainer, { width : width, height : height }]}>
        <Link href={href} onPress={handleClick}>
          <Text style={styles.buttonText}>{label}</Text>
        </Link>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer : {
        width : 300,
        height : 100,
        backgroundColor : '#5A3B8A',
        borderRadius : 20,
        borderColor: '#7E57C2',
        borderWidth : 5,
        alignItems : 'center',
        justifyContent : 'center',
    },
    button : {
      width : '100%',
      height : '100%',
      
    },
    buttonText : {
      fontSize : 35,
      color : '#FFFFFF',
      fontWeight : 'bold',
    }

})