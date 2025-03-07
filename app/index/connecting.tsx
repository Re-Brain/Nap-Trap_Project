import { StyleSheet, Text, View, BackHandler } from 'react-native'
import React, { useEffect } from 'react';
import { useRouter } from "expo-router";
import { useNavigation } from '@react-navigation/native';

import Wifi from '../components/wifi';
import ImageViewer from "../components/imageViewer";

const robot = require("../../assets/images/detection2.png")
const logo = require("../../assets/images/logo.png")
const background = require("../../assets/images/background.png")

type Props = {}

const connecting = (props: Props) => {
  const router = useRouter();
  const navigation = useNavigation();

   // Set a timeout to navigate after 5 seconds
  useEffect(() => {
   
    const timer = setTimeout(() => {
      router.push('../detecting');
    }, 1000); // 5000ms = 5 seconds

    return () => clearTimeout(timer);
  }, [router]);

  // Prevent the back button action when this page is loaded
  useEffect(() => {
    navigation.setOptions({
      gestureEnabled: false, 
      headerLeft: () => null, 
    });

    const backAction = () => {
      return true; 
    };

    BackHandler.addEventListener('hardwareBackPress', backAction);
    
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault(); 
    });

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
      unsubscribe();
    };
  }, [navigation]);

  return (
    <View
    style={styles.container}
    >

    <View style={styles.logo}>
      <ImageViewer imgSource={logo} size={200}/>
    </View>

    <View style={styles.robot}>
      <ImageViewer imgSource={robot} size={350} zIndex={2}/>
      <ImageViewer imgSource={background} size={350} zIndex={1}/>
    </View>

    <Wifi/>
  </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent : 'flex-start',
    alignItems: "center",
    backgroundColor : '#2C003E',
  },
  logo : {
    marginTop : 50,
    marginBottom : 230,
    alignItems : "center"
  },
  robot : {
    width : 350,
    height : 350,
    marginBottom : 50
  },
})

export default connecting
