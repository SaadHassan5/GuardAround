import React from 'react';
import { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Modal, TextInput, Share, ScrollView, } from 'react-native';
import { BottomSheet } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';
import { IMAGES, SVGS } from '../../assets';
import CONSTANTS from '../../config/constants';
import { HP, WP } from '../../config/screen-ratio';
import { feedStyles as Styles } from './feed-style';
import { Header } from '../../assets/Imgs/components/header';
// import Modal from "react-native-modal";
import { palette } from '../../config/colors';

export const Feed = ({ navigation }) => {
    const [checked, setChecked] = useState(false)
    const [modComment, setModComment] = useState(false)
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React ',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <View style={Styles.container}>
            {/* <Text>Saad</Text> */}
            <Header title={'Feed'} />
            {/* <Text style={Styles.ver_txt}>Feed</Text> */}
            {/* <View style={{marginBottom:HP(0)}}> */}
            <FlatList
                // padding={30}
                numColumns={1}
                data={CONSTANTS.feedData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View style={{marginTop: HP(3),paddingHorizontal: WP((8 / 375) * 100)}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={item.userImg} style={{ width: WP(15), height: WP(15), borderRadius: WP(15 / 2) }} />
                            <View style={{paddingLeft:WP(2)}}>
                                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 19, color: '#333333', }}>{item.Name}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10, color: '#333333', }}>{item.Distance}</Text>
                            </View>
                            <View style={{ marginTop: HP(1), right: WP(8), position: 'absolute', }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, marginLeft: WP(15), color: '#333333', backgroundColor: 'red', color: 'white', paddingLeft: WP(1), paddingRight: WP(1), borderRadius: WP(5) }}>{item.Activity}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10, marginLeft: WP(20), color: '#333333', marginTop: HP(1) }}>{item.Time}</Text>
                            </View>
                            <TouchableOpacity style={{position: 'absolute',right: WP(0),marginTop:HP(1)}}>
                                <SVGS.drop />
                            </TouchableOpacity>
                        </View>
                        <Image source={item.img} style={{ marginLeft: WP(3), marginTop: HP(1), width: WP((347 / 375) * 100), height: HP((311 / 812) * 100), borderRadius: WP(6) }} />
                        <View style={{ flexDirection: 'row', marginLeft: WP((14 / 375) * 100) }}>
                            {/* <IconHeart name='heart-circle'
                                size={23}
                                color={'red'}
                                style={{ marginTop: HP(1.1) }}
                            /> */}

                            <TouchableOpacity style={{ marginTop: HP(.7) }}>
                                <SVGS.red />
                                <View style={{ position: 'absolute', alignSelf: 'center', marginVertical: HP(1.3) }}>
                                    <SVGS.heart />
                                </View>
                            </TouchableOpacity>
                            <Text style={{ marginTop: HP(1.1), marginLeft: WP(1), paddingLeft: WP(2), paddingRight: WP(2), paddingTop: WP(0), backgroundColor: 'skyblue', color: 'white', height: HP((20 / 812) * 100), borderRadius: WP(5) }}>{item.likes}</Text>
                            <TouchableOpacity onPress={() => onShare()} style={{ marginTop: HP(1.1), marginLeft: WP((155 / 375) * 100), paddingHorizontal: WP(1) }}>
                                <SVGS.share />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModComment(true)} style={{ flexDirection: 'row', marginLeft: WP((21 / 375) * 100), marginTop: HP(1.1) }}>
                                {/* <IconComment name='comment'
                                    size={30}
                                    color={'black'}
                                /> */}
                                <SVGS.comment />

                                <Text style={{ marginLeft: ((18 / 375) * 100), paddingLeft: WP(2), paddingRight: WP(2), paddingTop: WP(0), backgroundColor: 'skyblue', color: 'white', height: HP((20 / 812) * 100), borderRadius: WP(5) }}>{item.comments}</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ marginLeft: WP((14 / 375) * 100), fontFamily: 'Poppins-Bold',fontSize:18 }} numberOfLines={3}>
                        Detail of the Incident
                        </Text>
                        <Text style={{ marginLeft: WP((14 / 375) * 100), fontFamily: 'Poppins-Regular',fontSize:13 }} numberOfLines={3}>
                        {item.detail}
                        </Text>
                    </View>
                }
            />
            {/* </View> */}
            <BottomSheet
                isVisible={modComment}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}

            >
                <View style={{
                    width: WP(100),
                    borderColor: palette.baseLine,
                    borderWidth: 3,
                    backgroundColor: palette.white,
                    height: HP(80),
                    borderTopLeftRadius: WP(10),
                    borderTopRightRadius: WP(10),
                    // paddingTop:WP(55), 
                    marginTop: HP(0),
                    paddingLeft: WP(3),
                    paddingBottom: HP(10)
                }}>
                    <ScrollView>

                        <View style={{ flexDirection: 'row', paddingTop: HP(2) }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, paddingLeft: WP(3) }}>Comments</Text>
                            <TouchableOpacity onPress={() => setModComment(false)} style={{ marginLeft: WP(45), paddingRight: WP(7) }}>
                                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>Done</Text>
                            </TouchableOpacity>
                        </View>
                        {CONSTANTS.comment.map((item, i) => (

                            <View key={i} style={{ flexDirection: 'row', paddingTop: HP(3), paddingLeft: WP(1) }}>
                                <Image source={item.userImg} style={{ width: WP(15), height: WP(15), borderRadius: WP(15 / 2) }} />
                                <View style={{ paddingLeft: WP(3) }}>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>{item.name}</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, width: WP(70) }}>{item.comment}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: HP(0), backgroundColor: 'white', paddingTop: HP(1), paddingBottom: HP(2) }}>
                        <TextInput multiline={true} placeholder={"Add Comment"} style={{ borderWidth: 1, borderRadius: WP(3), width: WP(75), marginLeft: WP(7) }} />
                        {/* <SVGS.send /> */}
                        <TouchableOpacity style={{ paddingLeft: WP(5), }}>
                            <SVGS.send />
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>

        </View>
    )
}