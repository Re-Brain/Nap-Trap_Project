import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const User = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})