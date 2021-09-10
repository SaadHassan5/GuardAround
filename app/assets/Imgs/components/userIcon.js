import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { palette } from "../../../config/colors";
import { HP, WP } from "../../../config/screen-ratio";
import Svg, { G, Path } from "react-native-svg";
export const UserIcon = ({ fill }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="21.689" height="21.9" viewBox="0 0 28.689 31.9">
  <G id="Icon_feather-user" data-name="Icon feather-user" transform="translate(1.5 1.5)">
    <Path id="Path_2484" data-name="Path 2484" d="M31.689,32.133V28.922A6.422,6.422,0,0,0,25.267,22.5H12.422A6.422,6.422,0,0,0,6,28.922v3.211" transform="translate(-6 -3.233)" fill={fill} stroke="#2fd3ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <Path id="Path_2485" data-name="Path 2485" d="M24.844,10.922A6.422,6.422,0,1,1,18.422,4.5,6.422,6.422,0,0,1,24.844,10.922Z" transform="translate(-5.578 -4.5)" fill={fill} stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
  </G>
</Svg>

    )
}