import { StyleSheet, Text, View } from 'react-native'
import { useRouter, useNavigation } from "expo-router";
import React, { useEffect, useRef, useState } from 'react';

import ImageViewer from "../components/imageViewer";
import Button from "../components/Button";

const robot = require("../../assets/images/detection3.png")
const logo = require("../../assets/images/logo.png")
const background = require("../../assets/images/background.png")

type Props = {}

const detecting = (props: Props) => {

  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the timeout ID
  const [isNavigating, setIsNavigating] = useState(false); // State to track navigation

  // Start the timer for random navigation
  const startNavigationTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current); // Clear any existing timeout
    }

    timerRef.current = setTimeout(() => {
      const pages = ['/warningOne', '/warningTwo'];
      const randomPage = pages[Math.floor(Math.random() * pages.length)];
      router.push(randomPage);
    }, 5000); // 5 seconds
  };

  // Stop the timer and navigate to the new page
  const handleStop = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current); // Clear the timeout immediately
    }
    router.push("/(tabs)"); // Navigate to the 'tabs' page
  };

  // Start the timer when the component mounts or user interaction starts
  if (!isNavigating) {
    startNavigationTimer();
  }

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

    <Button label={'Stop'} width={350} height={90} onClick={handleStop}/>
  
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

export default detecting