import React from 'react';
import { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Modal, TextInput, Share, ScrollView, } from 'react-native';
import { BottomSheet } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';
import { IMAGES, SVGS } from '../../assets';
import CONSTANTS from '../../config/constants';
import { HP, WP } from '../../config/screen-ratio';
// import { profileStyles as Styles } from './profile-style';
import { Header } from '../../assets/Imgs/components/header';
// import Modal from "react-native-modal";
import { palette } from '../../config/colors';
import { editStyles as Styles } from './edit-style';
// import { profileStyles as Styles } from './profile-style';

export const EditProfile = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <Header title={'Edit Profile'} />
            <View style={Styles.dpView}>
                <Image source={IMAGES.dp} style={Styles.dp} />
                <TouchableOpacity style={Styles.pen}>
                    <SVGS.editPen />
                </TouchableOpacity>
            </View>
            <TextInput placeholder={'Username'} style={Styles.user_txt}/>
            <TextInput placeholder={'Full Name'} style={[Styles.user_txt,{marginTop:HP((18/812)*100),}]}/>
            <View style={Styles.emailView}>
            <TextInput placeholder={'Email Address'} style={Styles.email_txt}/>
            <TouchableOpacity style={Styles.emailIcon}>
            <SVGS.mail />
            </TouchableOpacity>
            </View>
            <TextInput multiline={true} placeholder={'Add Description'} style={[Styles.user_txt,{marginTop:HP((18/812)*100),height:HP((279/812)*100)}]}/>
            <TouchableOpacity style={Styles.touch_update}>
                <Text style={Styles.update_txt}>Update</Text>
            </TouchableOpacity>
        </View>

    )
}