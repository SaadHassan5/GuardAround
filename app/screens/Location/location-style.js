import React from "react";
import { StyleSheet } from "react-native";
import { palette } from "../../config/colors";
import { HP, WP } from "../../config/screen-ratio";
// import { HP, WP } from "../../config/screen-ratio";
// import { palette } from '../../config/colors'
export const locationStyles = StyleSheet.create({
    container: {
        flex: 1,
        // height:HP(80),
        backgroundColor: palette.white,
    },
    dpView:{
        backgroundColor:palette.white,
        flexDirection:'row',
        alignItems: 'center',
        padding:HP(2),
        // position: 'absolute',
    },
    dp:{
        width: WP((45/375)*100),
         height: WP((45/375)*100), 
        borderRadius: WP(11.6) 
    },
    name_txt:{
        fontFamily:'Poppins-Bold',
        color:'#2FD3CA'
    },
    Mg_txt:{
        fontFamily:'Poppins-Bold',
    },
    ct_txt:{
        fontFamily:'Poppins-Medium'
    }
})