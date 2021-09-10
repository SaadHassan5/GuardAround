import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TextInput,TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { IMAGES, SVGS } from '../../assets';
import { verifiedStyles as Styles } from './verified-styles';
// import { verifiedStyles as Styles } from './verified-style';

export const verified = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <Image source={IMAGES.logo} style={Styles.img} />
            <Image source={IMAGES.tickpng} style={Styles.tick_img} resizeMode={'stretch'} />
            <Text style={Styles.ver_txt}>Verification Successful</Text>
            {/* <SVGS.tick /> */}
            <TouchableOpacity onPress={() => navigation.navigate('tabs')} style={Styles.touchcont}>
                <Text style={Styles.cont_txt}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}