import React from "react";
import { StyleSheet } from "react-native";
import { palette } from "../../config/colors";
import { HP, WP } from "../../config/screen-ratio";
// import { HP, WP } from "../../config/screen-ratio";
// import { palette } from '../../config/colors'
export const editStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: WP(5)
    },
    dpView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:HP(3)
    },
    dp: {
        width: WP((86 / 375) * 100),
        height: WP((86 / 375) * 100),
        borderRadius: WP(11.6),
    },
    pen:{
        position: 'absolute',
        top:HP(8),right:WP(27),
        // backgroundColor:'red',
        padding:WP(2)
    },
    user_txt:{
        borderWidth:1,
        borderColor:palette.lighterGrey,
        marginTop:HP((40/812)*100),
        paddingHorizontal:WP((22/375)*100),
        paddingLeft:WP((20/375)*100),
        width:WP((331/375)*100),
        height:HP((50/812)*100),
        borderRadius:WP(2)
    },
    emailView:{
        flexDirection:'row',
        marginTop:HP((18/812)*100),
        // paddingHorizontal:WP((22/375)*100),
    },
    email_txt:{
        borderWidth:1,
        paddingLeft:WP((20/375)*100),
        height:HP((50/812)*100),
        width:WP((331/375)*100),
        borderColor:palette.lighterGrey,
        borderRadius:WP(2),
        paddingHorizontal:WP((22/375)*100),

    },
    emailIcon:{
        position: 'absolute',
        right:WP(6),
        top:HP(2)
    },
    touch_update:{
        position: 'absolute',
        bottom:HP(4),
        alignSelf:'center',
        height:HP((50/812)*100),
        width:WP((300/375)*100),
        backgroundColor:'#2FD3CA',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:WP(5)
    },
    update_txt:{
        fontFamily:"Poppins-SemiBold",
        color:palette.white,
        fontSize:18
    }
})