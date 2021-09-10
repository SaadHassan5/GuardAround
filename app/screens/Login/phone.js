import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import { IMAGES, SVGS } from '../../assets';
import { HP, WP } from '../../config/screen-ratio';
import CONSTANTS from '../../config/constants';
import { palette } from "../../config/colors";
// import { IMAGES } from '../../assets';
// import { HP, WP } from '../../config/screen-ratio';
import { phoneStyles } from './phone-style';
import Modal from "react-native-modal";
import IconArrow from 'react-native-vector-icons/MaterialCommunityIcons';
import CountryPicker from 'react-native-country-codes-picker/components/CountryPicker';

export const phone = ({ navigation }) => {
    const [checked, setChecked] = useState(false)
    const [phnNo, setPhnNo] = useState('')
    const [code, setCode] = useState('+92')
    const [show, setShow] = useState(false);

    return (
        <View style={phoneStyles.container}>
            {/* <CountryPicker show={setCodeMod} /> */}
            {show&&
            <View>
                <TouchableOpacity style={{borderWidth:1,padding:5,borderRadius:WP(5),position: 'absolute',marginTop:HP(45),right:WP(5)}} onPress={()=>setShow(false)}>
                <Text style={{fontFamily:'Poppins-Bold'}}>Cancel</Text>
                </TouchableOpacity>
            </View>
            }
            <Image source={IMAGES.logo} style={phoneStyles.img} />
            <Text style={phoneStyles.wel_txt}>Welcome to Guardaround</Text>
            <Text style={phoneStyles.num_txt}>Please Enter Your Number</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: HP((72 / 812) * 100), }}>
                <Text style={{ position: 'absolute', left: WP(18), fontFamily: 'Poppins-Regular', paddingTop: HP(.4) }}>{code}</Text>
                <TextInput onChangeText={(e) => setPhnNo(e)} maxLength={11} keyboardType={'numeric'} placeholder={'Enter Phone No'} style={phoneStyles.phn_inp} />
                <TouchableOpacity onPress={() => setShow(true)} style={phoneStyles.touchArrow}>
                    {/* <IconArrow name={'arrow-down-drop-circle'} size={30} color={'#2FD3CA'} style={phoneStyles.arrow} /> */}
                    <SVGS.downArrow />
                </TouchableOpacity>
            </View>
            <View style={phoneStyles.checkView}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }} />
                {/* <SVGS.heart /> */}
                <Text style={phoneStyles.con_txt}>By continuing you will receive a verification code to your phone number by SMS. Message and data rates may apply. </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('verification')} style={phoneStyles.touchLog}>
                <Text style={phoneStyles.log_txt}>Login</Text>
            </TouchableOpacity>
            
            <CountryPicker  show={show} pickerButtonOnPress={(item) => {setCode(item.dial_code);  setShow(false); }}     />
        </View>
    )
}