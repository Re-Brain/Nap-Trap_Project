import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react';

type Props = {}

const Wifi = (props: Props) => {

  const [dots, setDots] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length < 3) {
          return prevDots + '.';
        }
        return ''; // Reset to empty string after 3 dots
      });
    }, 500); // Update every 500ms
    
    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
       <Text style={styles.text}>Connecting{dots}</Text>
    </View>
  )
}

export default Wifi

const styles = StyleSheet.create({
  text : {
    color : '#fff',
    fontSize : 42,
    fontWeight : 'bold',
  }
})