import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyCourseScreen = () => {
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
            หลักสูตร
        </Text>
      </View>
      
    </View>
  )
}

export default MyCourseScreen

const styles = StyleSheet.create({})