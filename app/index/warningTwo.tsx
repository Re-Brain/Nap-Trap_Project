import { StyleSheet, Text, View } from 'react-native'
import { useRouter } from "expo-router";
import React from 'react'

import ImageViewer from "../components/imageViewer";
import Button from "../components/Button";
import WarningText from '../components/WarningText';

const robot = require("../../assets/images/detection5.png")
const logo = require("../../assets/images/logo.png")
const background = require("../../assets/images/background.png")

type Props = {}

const detecting = (props: Props) => {
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

        <WarningText label={'Please take a break from driving'}/>

      <Button label={'Proceed'} width={350} height={90} href={"/detecting"}/>
    
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
      marginBottom : 20
    },
  })

export default detecting