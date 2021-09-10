import React from "react";
import { StyleSheet } from "react-native";
import { palette } from "../../config/colors";
import { HP, WP } from "../../config/screen-ratio";
// import { HP, WP } from "../../config/screen-ratio";
// import { palette } from '../../config/colors'
export const profileStyles = StyleSheet.create({
    container: {
        flex: 1,
        // height:HP(80),
        backgroundColor: '#F1F1F1',
    },
    profileView:{
        backgroundColor:palette.white,
        paddingLeft:WP((15/375)*100),
        paddingBottom:HP((20/812)*100),
        borderWidth:1,
        borderColor:'#2FD3CA',
        borderBottomLeftRadius:WP(10),
        borderBottomRightRadius:WP(10),
        
    },
    dp:{
        width: WP((86/375)*100),
         height: WP((86/375)*100), 
        borderRadius: WP(11.6) 
    },
    nameView:{
        marginLeft:WP((13/375)*100)
    }
   , 
    name:{
        // backgroundColor:'red',
        width:WP(47),
        marginHorizontal:WP(0),
        fontFamily:'Poppins-SemiBold',
        fontSize:22,
        // backgroundColor:'red'
    },
    about_txt:{
        marginTop:HP(0),
        // position: 'absolute',
        fontFamily:'Poppins-Regular',
        fontSize:10,
        // backgroundColor:'red',
        width:WP(50),
        // top:HP(5)
    },
    postView:{
        position: 'absolute',
        right:WP(3),top:HP(.7),
        alignItems: 'center',
        justifyContent: 'center',    
    },
    post_txt:{
        fontFamily:'Poppins-SemiBold',
        fontSize:20,
        // marginLeft:WP((30/375)*100),
        // width:WP((34/375)*100)
    },
    inc_txt:{
        fontFamily:'Poppins-Regular',
        fontSize:10
    },
    touch_edit:{
        width:WP((160/375)*100),
        // height: HP((38/812)*100),
        paddingVertical:WP(2),
        borderRadius:WP(2),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#2FD3CA'
    },
    edit_txt:{
        fontFamily:'Poppins-Bold',
        fontSize:13,
        color:palette.white
    }
})
