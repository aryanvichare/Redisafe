import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';

export default function Welcome() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/bold.ttf'),
        E: require('../assets/fonts/exbold.ttf'),
        H: require('../assets/fonts/heavy.ttf'),

      });

   
    
    return (
        <View style={styles.container}>
            <View style={styles.box}>
            <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                <View style={styles.btn}>
                <Text style={styles.title}>Get Started</Text>
                </View>
            </TouchableOpacity>
            </View>
            
          
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#005792'
    },
    box:{
        width:'90%',
        height:'50%',
        marginTop:'50%',
        borderRadius:20,
        backgroundColor:'#FFF',
        alignSelf:'center',
    },
    logo: {
        width:'60%',
        height:'75%',
        resizeMode:'contain',
        alignSelf:'center',
    },
    title: {
        fontFamily:'B',
        color:"#FFF",
        fontSize:20,
        textAlign:'center'
    },
    subtitle: {
        fontFamily:'B',
        color:"#FFF",
        fontSize:17,
        textAlign:'center',
        marginTop:'50%',
        width:'40%',
        alignSelf:'center'
    },
    btn: {
        backgroundColor:"#005792",
        paddingVertical:'2.5%',
        width:'90%',
        alignSelf:'center',
        borderRadius:20,
        marginTop:'10%'

    }

});