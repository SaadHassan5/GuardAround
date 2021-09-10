import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { palette } from "../../../config/colors";
import { HP, WP } from "../../../config/screen-ratio";
import Svg, { G, Path } from "react-native-svg";
export const FeedIcon=({fill})=> {
    return(
    <Svg xmlns="http://www.w3.org/2000/svg" width="21.34" height="21.34" viewBox="0 0 23.34 23.34">
        <G id="Icon_material-rss-feed" data-name="Icon material-rss-feed" transform="translate(-6 -6.66)">
            <Path id="Path_2488" data-name="Path 2488" d="M12.54,26.73a3.27,3.27,0,1,1-3.27-3.27,3.27,3.27,0,0,1,3.27,3.27Z" fill={fill} />
            <Path id="Path_2489" data-name="Path 2489" d="M6,6.66V10.9A19.1,19.1,0,0,1,25.095,30H29.34A23.347,23.347,0,0,0,6,6.66Zm0,8.49V19.4A10.614,10.614,0,0,1,16.6,30H20.85A14.845,14.845,0,0,0,6,15.15Z" fill={fill} />
        </G>
    </Svg>
    )
}