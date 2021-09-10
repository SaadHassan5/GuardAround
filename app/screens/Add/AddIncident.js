import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageStore, ScrollView, Share, FlatList } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { BottomSheet } from 'react-native-elements';
import { IMAGES, SVGS } from '../../assets';
import { Header } from '../../assets/Imgs/components/header';
import { addStyles as Styles } from './addIncident-style';
import { HP, WP } from '../../config/screen-ratio';
import { palette } from '../../config/colors';
import CONSTANTS from '../../config/constants';
import { LogBox } from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';
LogBox.ignoreAllLogs();
export const AddIncident = ({ navigation }) => {
    const cameraRef = useRef();
    const takePicture = async () => {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        console.log(data.uri);
    };
    const takeVideo = async () => {
        const options = { ratio: 16.9, maxDuration:5 };
        const data = await cameraRef.current.recordAsync(options);
        console.log(data.uri);
    };
    return (
        <View style={[Styles.container, { paddingBottom: HP(0) }]}>

            <ScrollView scrollEnabled={true} style={{}}>
                <View style={{ flex: 1, paddingBottom: HP(10) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: WP((15 / 375) * 100), }}>
                        <Text style={{ marginTop: HP((10 / 375) * 100), color: palette.black, fontFamily: "Poppins-Bold", fontSize: 27, backgroundColor: palette.white }}>Add Incident</Text>
                        <TouchableOpacity onPress={() => {navigation.navigate('Camera') }} style={{ position: 'absolute', right: WP(9), paddingTop: HP(2), paddingLeft: WP(6), backgroundColor: 'transparent', paddingBottom: WP(2) }}>
                            <SVGS.camera />

                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: WP(1), height: HP(38) }}>
                        <FlatList
                            data={CONSTANTS.IncidentImgs}
                            numColumns={2}
                            // keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>
                                <View >
                                    <Image source={item.img} style={Styles.img} />
                                </View>
                            }
                        />
                    </View>
                    <TextInput placeholder={"Add Title"} style={Styles.title_inp} />
                    <TextInput multiline={true} placeholder={"Add Description"} style={[Styles.title_inp, { marginTop: HP((18 / 812) * 100), paddingBottom: HP((184 / 812) * 100) }]} />
                    <TextInput editable={false} placeholder={"Select Post Type"} style={[Styles.title_inp, { marginTop: HP((18 / 812) * 100) }]} />
                </View>
            </ScrollView>
        </View>
    )
}