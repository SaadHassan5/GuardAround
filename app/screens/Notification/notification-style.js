import React from "react";
import { StyleSheet } from "react-native";
import { palette } from "../../config/colors";
import { HP, WP } from "../../config/screen-ratio";
// import { HP, WP } from "../../config/screen-ratio";
// import { palette } from '../../config/colors'
export const NotiStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
        // paddingHorizontal:WP((10/375)*100),
        paddingHorizontal:WP(2.5)

    },
    flatView:{
        flexDirection:'row',
        alignItems: 'center',
        marginTop:HP((19/812)*100),
        borderBottomWidth:1,
        borderColor:palette.lighterGrey
    },
    dp:{
        width:WP(15),
        height:WP(15),
        borderRadius:WP(15/2)
    },
    descView:{
        marginLeft:WP(2)
    }
    ,
    desc_txt:{
        fontFamily:'Poppins-Bold',
        fontSize:14,
        // marginBottom:HP(3),
        width:WP((242/375)*100)
    },
    incident_txt:{
       color:palette.capGray ,
       fontSize:15,
       textDecorationLine:'underline'
    },
    distance_txt:{
       color:palette.capGray,
       marginLeft:WP(34.5) 
    }
})