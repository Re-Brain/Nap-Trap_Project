import { Text, View, StyleSheet } from "react-native";

import ImageViewer from "../components/imageViewer";
import Button from "../components/Button";
import { useRouter } from "expo-router";

const robot = require("../../assets/images/detection1.png")
const logo = require("../../assets/images/logo.png")
const background = require("../../assets/images/background.png")

export default function Index() {

  const router = useRouter()

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

      <Button label={'Start'} width={350} height={90} href={"../connecting"}/>
      
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
