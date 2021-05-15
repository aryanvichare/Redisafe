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

   
    if(fontLoaded){
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.png')} style={{height:'100%', width:'100%'}} imageStyle={{resizeMode:'cover', alignSelf:'flex-end'}}>
            <View style={{marginHorizontal:'5%', marginTop:'10%'}}>
                <View style={{marginTop:'50%'}}></View>
                <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                    <View style={styles.btn}>
                    <Text style={styles.title}>Get Started</Text>
                    </View>
                </TouchableOpacity>

                </View>
                </ImageBackground>
            
        </View>
    );

}
else{
    return(<View></View>)
}
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#F04D4E',
    },
    logo: {
        width:'20%',
        height:'20%',
        resizeMode:'contain',
        alignSelf:'flex-start',
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
        backgroundColor:`linear-gradient(90deg, rgba(239,246,251,1) 0%, rgba(244,172,172,1) 50%);`,
        paddingVertical:'2.5%',
        width:'90%',
        alignSelf:'center',
        borderRadius:20,
        marginTop:'10%'

    }

});