import React from "react";
import { StyleSheet } from "react-native";
import { palette } from "../../config/colors";
import { HP, WP } from "../../config/screen-ratio";
// import { HP, WP } from "../../config/screen-ratio";
// import { palette } from '../../config/colors'
export const addStyles = StyleSheet.create({
    container: {
        flex: 1,
        // height:HP(80),
        backgroundColor: 'white',
    },
    img:{
        marginLeft: WP(3), 
        marginTop: HP(1), 
        width: WP((159 / 375) * 100), height: HP((143 / 812) * 100), 
        borderRadius: WP(6),
        // backgroundColor:'red' 
    },
    title_inp:{
        borderWidth:1,
        marginTop:HP((32/812)*100),
        marginHorizontal:WP((22/375)*100),
        borderRadius:WP(2),
        borderColor:palette.lightGrey,
        fontFamily:'Poppins-Regular',
        fontSize:15,
        paddingLeft:WP((16/375)*100)
    }
})