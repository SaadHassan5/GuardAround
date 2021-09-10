import React from "react";
import { StyleSheet } from "react-native";
import { HP, WP } from "../../config/screen-ratio";
// import { HP, WP } from "../../config/screen-ratio";
// import { palette } from '../../config/colors'
export const verificationStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    img: {
        marginHorizontal: 
        WP((60 / 375) * 100), 
        marginTop: HP((91 / 812) * 100), 
        width: WP((255 / 375) * 100), 
        height: HP((133 / 812) * 100)
    },
    ver_txt: {
        // marginLeft: WP((68 / 375) * 100), 
        marginTop: HP((38 / 812) * 100), 
        fontFamily: 'Poppins-Bold', 
        fontSize: 21, 
        color: '#333333',
        alignSelf:'center'
    },
    codeView:
    {
        marginTop:HP((34/812)*100),
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth:1,
        // borderColor:'red',
        // flex:1
}
    ,
    code_txt:{
        width:WP((49/375)*100),
        borderWidth:1,
        marginRight:WP((15/375)*100),
        borderColor:'lightgrey',
        color:'#1D2226',
        fontFamily: 'Poppins-Bold', 
        padding:WP(5)
        // borderWidt
    },
    touchVerify:{
        // marginHorizontal:WP((38/375)*100),
        backgroundColor:'#2FD3CA',
        // marginTop:HP((220/812)*100),
        justifyContent: 'center',
        alignItems: 'center',
        height:HP((50/812)*100),
        borderRadius:20,
        position: 'absolute',
        bottom:HP(5),
        paddingHorizontal:WP(35),
        alignSelf:'center'
    },
    verify_txt:{
        fontFamily: 'Poppins-Bold', 
        fontSize: 16, color: '#1D2226',
        color:'white',
    },
})