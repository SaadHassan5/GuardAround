import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageStore, ScrollView,Share } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { BottomSheet } from 'react-native-elements';
import { IMAGES, SVGS } from '../../assets';
import { Header } from '../../assets/Imgs/components/header';
import { IncidentStyles as Styles } from './incident-style';
import { HP, WP } from '../../config/screen-ratio';
import { palette } from '../../config/colors';
import CONSTANTS from '../../config/constants';
export const Incident = ({ navigation }) => {
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
            <ScrollView>
            <Header title={"Blast"} />
            <View style={{
                marginTop: HP(3),
                paddingHorizontal: WP((8 / 375) * 100)
            }}>
                <View style={{ flexDirection: 'row' }}>
                            <Image source={IMAGES.feed1} style={{ width: WP(15), height: WP(15), borderRadius: WP(15 / 2) }} />
                            <View style={{paddingLeft:WP(2)}}>
                                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 19, color: '#333333', }}>Saad Hassan</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10, color: '#333333', }}>3 miles away</Text>
                            </View>
                            <View style={{ marginTop: HP(1), right: WP(8), position: 'absolute', }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, marginLeft: WP(15), color: '#333333', backgroundColor: 'red', color: 'white', paddingLeft: WP(1), paddingRight: WP(1), borderRadius: WP(5) }}>Suspicious</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10, marginLeft: WP(20), color: '#333333', marginTop: HP(1) }}>1 month ago</Text>
                            </View>
                            <TouchableOpacity style={{position: 'absolute',right: WP(3),marginTop:HP(1)}}>
                                <SVGS.drop />
                            </TouchableOpacity>
                        </View>
                <Image source={IMAGES.feed1} style={{ marginLeft: WP(3), marginTop: HP(1), width: WP((347 / 375) * 100), height: HP((311 / 812) * 100), borderRadius: WP(6) }} />
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
                    <Text style={{ marginTop: HP(1.1), marginLeft: WP(1), paddingLeft: WP(2), paddingRight: WP(2), paddingTop: WP(0), backgroundColor: 'skyblue', color: 'white', height: HP((20 / 812) * 100), borderRadius: WP(5) }}>3456</Text>
                    <TouchableOpacity onPress={() => onShare()} style={{ marginTop: HP(1.1), marginLeft: WP((155 / 375) * 100), paddingHorizontal: WP(1) }}>
                        <SVGS.share />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModComment(true)} style={{ flexDirection: 'row', marginLeft: WP((21 / 375) * 100), marginTop: HP(1.1) }}>
                        {/* <IconComment name='comment'
                                    size={30}
                                    color={'black'}
                                /> */}
                        <SVGS.comment />

                        <Text style={{ marginLeft: ((18 / 375) * 100), paddingLeft: WP(2), paddingRight: WP(2), paddingTop: WP(0), backgroundColor: 'skyblue', color: 'white', height: HP((20 / 812) * 100), borderRadius: WP(5) }}>456</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontFamily:'Poppins-SemiBold',fontSize:20,paddingLeft:WP(10),paddingTop:HP((19/812)*100)}}>Detail of the Incident</Text>
                <Text style={{fontFamily:'Poppins-Regular',fontSize:14,paddingLeft:WP(5),paddingRight:WP(2),paddingTop:HP((7/812)*100)}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lacus suscipit, blandit tellus aliquam, tempus ex. Ut fermentum malesuada lorem, in sollicitudin elit. Curabitur sit amet lectus luctus, congue leo id, pulvinar orci. Integer dapibus sodales dui, id molestie enim mattis quis. Nulla aliquet, libero vel sagittis ultrices, sapien sapien semper ligula, at porttitor elit metus at est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sodales augue nunc, id tincidunt ipsum consectetur vitae. Mauris a hendrerit dui. Vestibulum accumsan, purus sit amet sodales facilisis, sapien nisi finibus justo, ut accumsan massa orci eu velit. Suspendisse sit amet lectus eu nulla pretium vestibulum a quis libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lacus suscipit, blandit tellus aliquam, tempus ex. Ut fermentum malesuada lorem, in sollicitudin elit. Curabitur sit amet lectus luctus, congue leo id, pulvinar orci. Integer dapibus sodales dui, id molestie enim mattis quis. Nulla aliquet, libero vel sagittis ultrices, sapien sapien semper ligula, at porttitor elit metus at est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sodales augue nunc, id tincidunt ipsum consectetur vitae. Mauris a hendrerit dui. Vestibulum accumsan, purus sit amet sodales facilisis, sapien nisi finibus justo, ut accumsan massa orci eu velit. Suspendisse sit amet lectus eu nulla pretium vestibulum a quis libero.
                </Text>
            </View>
            <BottomSheet
                isVisible={modComment}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}

            >
                <View style={{
                    width: WP(100),
                    //  paddingRight:WP(50),
                    // paddingBottom:HP(3),
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
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: HP(0), backgroundColor: palette.white, paddingTop: HP(1), paddingBottom: HP(2) }}>
                        <TextInput multiline={true} placeholder={"Add Comment"} style={{ borderWidth: 1, borderRadius: WP(3), width: WP(75), marginLeft: WP(7) }} />
                        {/* <SVGS.send /> */}
                        <TouchableOpacity style={{ paddingLeft: WP(5), }}>
                            <SVGS.send />
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>
            </ScrollView>
        </View>
    )
}