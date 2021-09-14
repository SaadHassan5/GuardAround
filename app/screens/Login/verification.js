import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity,Share } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { IMAGES } from '../../assets';
import { HP, WP } from '../../config/screen-ratio';
import { verificationStyles as Styles } from './verification-style';
import {  Otp_input } from '../../assets/Imgs/components/otp-input';
export const verification = ({ navigation }) => {
    const [code, setCode] = useState('')
    
    return (
        <View style={Styles.container}>
            <Image source={IMAGES.logo} style={Styles.img} />
            <Text style={Styles.ver_txt}>Verification Code</Text>
            <Text style={{ alignSelf: 'center' }}>We have sent you a code on your phone Number</Text>
            <Text style={{ alignSelf: 'center', marginTop: HP(2) }}>Enter Code Below</Text>
            <Otp_input />
            <TouchableOpacity onPress={() => 
                 navigation.navigate('verified')
            }
                  style={Styles.touchVerify}>
                <Text style={Styles.verify_txt}>Verify</Text>
            </TouchableOpacity>
        </View>
    )
}