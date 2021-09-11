import React from "react";
import { Marker } from "react-native-maps";
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
// import { View, Text } from "react-native";
import { IMAGES } from "../..";
import { HP, WP } from "../../../config/screen-ratio";
// import Pin from "../SVG/pin.svg";
import Pin from "../SVG/marker.svg";
import IconMap from 'react-native-vector-icons/Fontisto';
export const CustomMarker = ({ navigation,coordinate, pinColor, value }) => {
  return (
    <Marker
     onPress={navigation} 
    coordinate={coordinate} pinColor={pinColor}>
      <View
        style={{
          alignItems: "center",
          // backgroundColor:'blue'
        }}
      >
        <Pin width={45} height={40}></Pin>
        {/* <IconMap size={40} color={'green'} style={{position: 'absolute',}}/> */}
        
       {/* <Image source={IMAGES.pin1} resizeMode={'stretch'} 
       style={{width:40,height:40}}
       /> */}
       <Image source={IMAGES.dp} resizeMode={'cover'} style={{position: 'absolute',width:WP(6),height:WP(6),borderRadius:WP(20),marginVertical:HP(.5)}}/> 
      </View>
    </Marker>
  );
};