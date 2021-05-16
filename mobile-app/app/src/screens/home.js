import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Path } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';



export default function Home() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/bold.ttf'),
        E: require('../assets/fonts/exbold.ttf'),
        H: require('../assets/fonts/heavy.ttf'),

      });
    const [calibrated,setCalibrated] = useState(false);
    const [pulse, setPulse] = useState({"pulse":[40,45,36,34,54,60,50,40,35,43]})

    useEffect(()=>{
        setTimeout(() => {
            setCalibrated(true);
        }, 3000);

    },[calibrated])

   
    if(fontLoaded){
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.png')} style={{height:'100%', width:'100%'}} imageStyle={{resizeMode:'cover', alignSelf:'flex-end'}}>
            <View style={{marginHorizontal:'7.5%', marginTop:'10%'}}>
             
                <Image source={require('../assets/logored.png')} style={styles.logo}></Image>
                <Image source={{uri:'https://static.wikia.nocookie.net/parksandrecreation/images/3/33/Ann_Perkins.jpg/revision/latest?cb=20180116070354'}} style={styles.avatar}></Image>

                
                <View style={{marginTop:'10%'}}></View>
                <Text style={{fontFamily:'H', fontSize:45, color:"#F04D4E", lineHeight:45}}>Hey, Anne</Text>

                <View style={{marginTop:'5%'}}></View>
                <View style={{flexDirection:'row', height:'42%'}}>
                <LinearGradient
                    colors={[ '#FFA5A6', "#F04D4E"]}
                    start={[1,-0.3]}
                    end={[1,1]}
                    style={{backgroundColor:"#F04D4E",borderRadius:20, borderColor:"#FFA5A6", borderWidth:1, width:184,shadowColor: "#FF0000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,}}
                >
                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:'5%', paddingTop:'5%'}}>
                    <Text style={styles.title}>Heart Rate</Text>
                    <Icon name="rightcircle" type="ant-design" color="#FEF3F3"></Icon>
                    </View>
                    <Svg width="207" height="100">
                    <Path
                        transform="scale(1, -1) translate(0, -100)"
                        d={`M0 ${pulse.pulse[0]} C 20,${pulse.pulse[1]}, 40,${pulse.pulse[2]}, 60,${pulse.pulse[3]} S80,${pulse.pulse[4]}, 100 ${pulse.pulse[5]}, S120,${pulse.pulse[6]}, 140,${pulse.pulse[7]}, S160,${pulse.pulse[8]}, 180,${pulse.pulse[9]}`}
                        fill="none"
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeWidth={4}
                    />
                    </Svg>
                    <View style={{paddingHorizontal:'10%', paddingBottom:'5%'}}>
                    <Text style={styles.subtitle}>Normal</Text>
                    <Text style={{fontFamily:'H', fontSize:50, color:"#FFF"}}>{pulse.pulse[9]}<Text style={{color:"#FFD6D6", fontSize:20}}> BPM</Text></Text>
                    <Image source={require('../assets/pulse.png')} style={{height:70, width:70, resizeMode:'contain', position:'absolute', right:0, bottom:0}}></Image>
                    </View>
                    
                </LinearGradient>

                <View style={{}}>
                <LinearGradient
                    // View Linear Gradient
                    colors={['#FFFFFF', '#fabbbb']}
                    start={[0,-0.6]}
                    end={[0,1.4]}
                    style={{backgroundColor:"#F4ACAC", paddingVertical:'5%', width:'90%', alignSelf:'flex-end', marginLeft:'2.5%',
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,
                    borderRadius:15, marginTop:'5%', paddingHorizontal:'10%',borderColor:"#fabbbb", borderWidth:1}}>
                        <ImageBackground source={require('../assets/O2.png')} style={{width:'100%', height:'40%'}} imageStyle={{resizeMode:'contain'}}>
                    <Text style={styles.btnlabel}>98.5%</Text>
                    <Text style={styles.subtitle2}>SPO2 Level</Text>
                    </ImageBackground>
                </LinearGradient>
                <LinearGradient
                    // View Linear Gradient
                    colors={['#FFFFFF', '#fabbbb']}
                    start={[0,-0.6]}
                    end={[0,1.4]}
                    style={{backgroundColor:"#F4ACAC", paddingVertical:'5%', width:'90%', alignSelf:'flex-end', marginLeft:'2.5%',
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,
                    borderRadius:15, marginTop:'10%', paddingHorizontal:'10%',borderColor:"#fabbbb", borderWidth:1}}>
                        <ImageBackground source={require('../assets/O2.png')} style={{width:'100%', height:'40%'}} imageStyle={{resizeMode:'contain'}}>
                    <Text style={styles.btnlabel}>37°C</Text>
                    <Text style={styles.subtitle2}>Temperature</Text>
                    </ImageBackground>
                </LinearGradient>
                </View>
                
                </View>
                </View>
                <View style={{flexDirection:'row', marginTop:'-100%', paddingHorizontal:'5%'}}>
                <LinearGradient
                    // View Linear Gradient
                    colors={['#FFFFFF', '#fabbbb']}
                    start={[0,-0.6]}
                    end={[0,1.4]}
                    style={{backgroundColor:"#F4ACAC", paddingVertical:'5%', width:'50%', alignSelf:'flex-end', marginLeft:'2.5%',
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,
                    borderRadius:15, marginTop:'10%', paddingHorizontal:'10%',borderColor:"#fabbbb", borderWidth:1}}>
                        <ImageBackground source={require('../assets/O2.png')} style={{width:'100%', height:'40%'}} imageStyle={{resizeMode:'contain'}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:'5%'}}>
                    <Text style={{fontFamily:'H', fontSize:25, textAlign:'left', color:'#F04D4E'}}>Walking   </Text>
                    </View>
                    <ActivityIndicator size="large" color="#FF0000"  />
                    <Text style={styles.btnlabel}>37°C</Text>
                    <Text style={styles.subtitle2}>Temperature</Text>
                    </ImageBackground>
                </LinearGradient>
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
        backgroundColor: '#FFF',
    },
    logo: {
        width:'15%',
        height:'15%',
        resizeMode:'contain',
    },
    avatar: {
        width: 50,
        height:50,
        borderRadius:20,
        resizeMode:'cover',
        position:'absolute',
        right:0,
    },
    calibrate: {
        width:'40%',
        height:'25%',
        resizeMode:'contain',
        alignSelf:'flex-start',
    },
    title: {
        fontFamily:'H',
        fontSize:25,
        textAlign:'left',
        color:'#FFD6D6'
    },
    subtitle: {
        fontFamily:'E',
        color:"#FFD6D6",
        fontSize:20,
        textAlign:'left',
    },
    subtitle2: {
        fontFamily:'E',
        color:"#FF5C5C",
        fontSize:17,
        textAlign:'left',
    },
    btn: {
        backgroundColor:"#F4ACAC",
        paddingVertical:'5%',
        width:'90%',
        alignSelf:'center',
        borderRadius:15,
        marginTop:'10%',
        paddingHorizontal:'10%',

    },
    btnlabel: {
        fontFamily:'H',
        fontSize:40,
        textAlign:'left',
        color:'#F04D4E'

    },
    btn2: {
        backgroundColor:`rgba(255, 255, 255, 0.1)`,
        paddingVertical:'5%',
        width:'90%',
        alignSelf:'center',
        borderRadius:15,
        marginTop:'5%',
        paddingHorizontal:'10%',
        borderColor:`rgba(252, 219, 220, 0.5)`,
        borderWidth:2

    },
    btnlabel2: {
        fontFamily:'H',
        fontSize:20,
        textAlign:'center',
        color:'#FFF'

    }

});