import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { palette } from "../../../config/colors";
import { HP, WP } from "../../../config/screen-ratio";
import Svg, { G, Path } from "react-native-svg";
export const AddIcon=({fill})=> {
    return(
        <Svg xmlns="http://www.w3.org/2000/svg" width="21.987" height="21.987" viewBox="0 0 27.987 27.987">
  <Path id="Icon_ionic-ios-add" data-name="Icon ionic-ios-add" d="M35.209,21.216H24.7V10.707a1.742,1.742,0,1,0-3.485,0V21.216H10.707a1.742,1.742,0,0,0,0,3.485H21.216V35.209a1.742,1.742,0,1,0,3.485,0V24.7H35.209a1.742,1.742,0,1,0,0-3.485Z" transform="translate(-8.965 -8.965)" fill={fill}/>
</Svg>
      
    )
}