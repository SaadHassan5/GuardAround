import React from "react";
import { StyleSheet } from "react-native";
import { HP, WP } from "../../config/screen-ratio";
// import { HP, WP } from "../../config/screen-ratio";
// import { palette } from '../../config/colors'
export const feedStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    ver_txt: {
        // marginLeft: WP((68 / 375) * 100), 
        marginTop: HP((38 / 812) * 100),
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: '#333333',
        alignSelf: 'center'
    },
})