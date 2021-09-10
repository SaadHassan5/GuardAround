import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import { IMAGES, SVGS } from '../../assets';
import { HP, WP } from '../../config/screen-ratio';
// import { verifiedStyles as Styles } from './verified-style';
import { Header } from '../../assets/Imgs/components/header';
import { NotiStyles as Styles } from './notification-style';
import CONSTANTS from '../../config/constants';

export const Notification = ({ navigation }) => {
    const [checked, setChecked] = useState(false)
    return (
        <View style={Styles.container}>
            <Header title={'Notification'} />
            <View>
                <FlatList
                    // padding={30}
                    numColumns={1}
                    data={CONSTANTS.notif}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={Styles.flatView}>
                            <Image source={item.userImg} style={Styles.dp} />
                            <View style={Styles.descView}>
                                <Text style={Styles.desc_txt}>{item.desc}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity>
                                        <Text style={Styles.incident_txt}>{item.name}</Text>
                                    </TouchableOpacity>
                                    <Text style={Styles.distance_txt}>{item.distance}</Text>
                                </View>
                            </View>
                            <View style={{paddingBottom:HP(1.1)}}>
                            <SVGS.dot />
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        </View>
    )
}