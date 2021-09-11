import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { IMAGES, SVGS } from '../../assets';
import { locationStyles as Styles } from './location-style';
// import { verifiedStyles as Styles } from './verified-style';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { HP, WP } from '../../config/screen-ratio';
import { Marker, Circle } from "react-native-maps";
import { CustomMarker } from '../../assets/Imgs/components/CustomMarker';
import StreetView from 'react-native-streetview';
export const Location = ({ navigation }) => {
    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });
    const [marCord, setMarCord] = useState({
        latitude: 10,
        longitude: 10,
    })
    const [check,setCheck] = useState(false);
    useEffect(() => {
        console.log('Location');
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            setPosition({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421,
            });
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    return (
        <View style={Styles.container}>
            <View style={Styles.dpView}>
                <Image source={IMAGES.dp} style={Styles.dp} />
                <View style={{ paddingLeft: WP(4) }}>
                    <Text style={Styles.Mg_txt}>Good Morning,<Text style={Styles.name_txt}> Saad</Text></Text>
                    <Text style={Styles.ct_txt}>This is Current Address</Text>
                </View>
            </View>
            {/* <StreetView
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
                // allGesturesEnabled={true}
                coordinate={position}
                pov={{
                    tilt: parseFloat(0),
                    bearing: parseFloat(0),
                    zoom: parseInt(1)
                }} */}
            {/* /> */}
            <MapView style={{ borderWidth: 1, borderColor: 'red', width: '100%', height: HP(100) }}
                showsUserLocation={true}
                followsUserLocation={true}
                initialRegion={position}
                // region={position}
                onPress={(e) => { console.log(e.nativeEvent.coordinate);setCheck(true); setMarCord(e.nativeEvent.coordinate); }}
            >
                {/* <Marker
                    coordinate={marCord}
                    image={IMAGES.dp}
                    style={{width:WP(20)}}
                /> */}
                {check&&
                <CustomMarker navigation={()=>navigation.navigate('Incident')} pinColor={'red'} value={'saad'} coordinate={marCord} />
                }
                {/* <MapView.Cicle center={{ latitude: 43.604461, longitude: 1.444031 }}
                    radius={1500}
                    strokeWidth={2}
                    strokeColor="#3399ff"
                    fillColor="#80bfff" /> */}
            </MapView>
            {/* <CustomMarker /> */}

        </View>
    )
}