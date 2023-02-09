import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { Searchbar } from 'react-native-paper'

const SearchScreen = () => {

  const [search, setSearch] = useState('')

  // const onChangeSearch = query => setSearchQuery(query)
  const onChangeSearch = () => {

  }

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
            ค้นหา
        </Text>
      </View>
      
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})