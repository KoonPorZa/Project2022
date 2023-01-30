import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View 
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      {/* header */}
      <View 
        style={{
          width: '100%',
          height: 60,
          borderBottomWidth: 0.3,
          borderColor: '#5C51A4',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{
          color: '#000',
          fontSize: 20,
          fontWeight: 'bold',
          }}>
            หนัาหลัก
        </Text>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})