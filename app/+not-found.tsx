import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const pageIsNotFound = () => {
  return (
    <View style={styles.container}>
      <Text>Page is not found</Text>
    </View>
  )
}

export default pageIsNotFound

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }
})