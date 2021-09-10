import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { palette } from "../../../config/colors";
import { HP, WP } from "../../../config/screen-ratio";
export const Header = ({ title}) => {
    return (
      <View
        style={{
        }}>
        <Text style={{marginTop:HP((10/375)*100),paddingLeft:WP((15/375)*100),color: palette.black,fontFamily:"Poppins-Bold",fontSize:27,backgroundColor:palette.white}}>{title}</Text>
      </View>
    );
  };
  
  