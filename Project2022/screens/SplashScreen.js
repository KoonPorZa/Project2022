import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Main')
        }, 3000)
    })

    return (
        <View 
            style={styles.view} >
            <Image 
                source={require('../src/images/rmuttpng.png')} 
                style={styles.img} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    img: {
        width: 300,
        height: 100,
    }
})