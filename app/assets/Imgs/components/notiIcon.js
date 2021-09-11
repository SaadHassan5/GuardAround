import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { palette } from "../../../config/colors";
import { HP, WP } from "../../../config/screen-ratio";
import Svg, { G, Path } from "react-native-svg";
export const NotiIcon = ({ fill }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="21.713" height="21.9" viewBox="0 0 23.713 28.9">
            <Path id="Icon_material-notifications-none" data-name="Icon material-notifications-none" d="M17.856,32.65a2.973,2.973,0,0,0,2.964-2.964H14.892A2.973,2.973,0,0,0,17.856,32.65Zm8.892-8.892v-7.41c0-4.55-2.416-8.359-6.669-9.367V5.973a2.223,2.223,0,0,0-4.446,0V6.981c-4.239,1.008-6.669,4.8-6.669,9.367v7.41L6,26.722V28.2H29.713V26.722ZM23.785,25.24H11.928V16.347c0-3.675,2.238-6.669,5.928-6.669s5.928,2.994,5.928,6.669Z" transform="translate(-6 -3.75)" fill={fill} />
        </Svg>

    )
}