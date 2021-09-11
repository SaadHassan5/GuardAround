import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { palette } from "../../../config/colors";
import { HP, WP } from "../../../config/screen-ratio";
import Svg, { G, Path } from "react-native-svg";
export const LocationIcon=({fill})=> {
    return(
        <Svg xmlns="http://www.w3.org/2000/svg" width="21.008" height="21.868" viewBox="0 0 16.008 22.868">
        <G id="Group_9639" data-name="Group 9639" transform="translate(-13.721 -10.672)">
          <Path id="Icon_material-location-on" data-name="Icon material-location-on" d="M15.5,3a8,8,0,0,0-8,8c0,6,8,14.864,8,14.864s8-8.862,8-14.864A8,8,0,0,0,15.5,3Zm0,10.862A2.859,2.859,0,1,1,18.362,11,2.86,2.86,0,0,1,15.5,13.862Z" transform="translate(6.221 7.672)" fill={fill}/>
        </G>
      </Svg>      
    )
}