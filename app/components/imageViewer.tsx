import { StyleSheet, View } from 'react-native'
import { Image, type ImageSource } from "expo-image"
import React from 'react'

type Props = {
    imgSource : ImageSource;
    size? : number,
    zIndex? : number
};

const ImageViewer = ({ imgSource, size = 300, zIndex = 0 }: Props) => {
  return <Image 
            source={imgSource}  
            style={[styles.image,{width : size, height : size, zIndex : zIndex}]}
            />
}

const styles = StyleSheet.create({
    image : {
        position : 'absolute',
    }
})

export default ImageViewer
