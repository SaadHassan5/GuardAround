import React from "react";
import { StyleSheet } from "react-native";
import { HP, WP } from "../../config/screen-ratio";
// import { HP, WP } from "../../config/screen-ratio";
// import { palette } from '../../config/colors'
export const phoneStyles = StyleSheet.create({
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
    wel_txt: {
        // marginLeft: WP((68 / 375) * 100), 
        marginTop: HP((38 / 812) * 100), 
        fontFamily: 'Poppins-Bold', 
        fontSize: 21, 
        color: '#333333',
        alignSelf:'center'
    },
    num_txt:{
        marginLeft: WP((84 / 375) * 100), 
        marginTop: HP((16 / 812) * 100), 
        fontFamily: 'Poppins-Regular', 
        fontSize: 16, color: '#1D2226'
    },
    phn_inp:{
        // position: 'absolute',
        borderWidth:1,
        // marginHorizontal :WP((38 / 375) * 100),
        // paddingHorizontal:WP((115 / 375) * 100),
        width:WP((300 / 375) * 100),
        borderColor:'lightblue',
        // marginTop:HP((72/812)*100),
        borderRadius:10,
        paddingLeft:WP((110 / 375) * 100),
        
    },
    checkView:{
        flexDirection:'row',
        paddingHorizontal:WP((30/375)*100),
        marginTop:HP((15/812)*100),

    },
    con_txt:{
        fontFamily: 'Poppins-Regular', 
        fontSize: 11, color: '#1D2226'
    },
    touchLog:{
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
    log_txt:{
        fontFamily: 'Poppins-Bold', 
        fontSize: 16, color: '#1D2226',
        color:'white',
    },
    arrow:{
        // position: 'absolute',
    },
    touchArrow:{
        // overflow:'hidden',
        left:WP((106/375)*100),
        position: 'absolute',
        // backgroundColor:'red',
        width:WP(5),
        height:HP(2),
        justifyContent: 'center',
        alignItems: 'center',
    }
})