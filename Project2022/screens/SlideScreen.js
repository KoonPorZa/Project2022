import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SlideScreen = () => {
  return (
    <View style={styles.view}>
      <Text>SlideScreen</Text>
    </View>
  )
}

export default SlideScreen

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'black',
    }
})