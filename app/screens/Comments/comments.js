import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity,FlatList } from 'react-native';
import { palette } from "../../config/colors";
// import { IMAGES } from '../../assets';
// import { HP, WP } from '../../config/screen-ratio';
// import { phoneStyles } from './phone-style';
import Modal from "react-native-modal";
import IconArrow from 'react-native-vector-icons/MaterialCommunityIcons';

export const Comments = ({ navigation }) => {
    const [checked, setChecked] = useState(false)
    const [codeMod, setCodeMod] = useState(false)
    const [phnNo, setPhnNo] = useState('')
    const [code, setCode] = useState('+92')
    return (
        <View>
            <Text>Saad</Text>
        </View>
    )}