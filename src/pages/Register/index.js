import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Register(){
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <Text>Página de Registro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})