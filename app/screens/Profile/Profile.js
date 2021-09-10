import React from 'react';
import { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Modal, TextInput, Share, ScrollView } from 'react-native';
import { BottomSheet } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';
import { IMAGES, SVGS } from '../../assets';
import CONSTANTS from '../../config/constants';
import { HP, WP } from '../../config/screen-ratio';
// import { profileStyles as Styles } from './profile-style';
import { Header } from '../../assets/Imgs/components/header';
// import Modal from "react-native-modal";
import { palette } from '../../config/colors';
import { profileStyles as Styles } from './profile-style';

export const Profile = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            {/* <View style={{ height:HP(98) }}> */}
            <ScrollView scrollEnabled={true} style={{ flex: 1 }}>
                <View style={{flex:1,paddingBottom:HP(170)}}>
                    <View style={Styles.profileView}>
                        <Header title={"Profile"} />
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={IMAGES.dp} style={Styles.dp} />
                            <View style={Styles.nameView}>
                                <Text style={Styles.name}>Saad Hassan</Text>
                                <Text numberOfLines={2} style={Styles.about_txt}>
                                    About Content will be here
                                </Text>
                            </View>
                            <View style={Styles.postView}>
                                <Text style={Styles.post_txt}>735</Text>
                                <Text style={Styles.inc_txt}>Incident Posted</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: WP(2.5), marginTop: HP((16 / 812) * 100) }}>
                            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={Styles.touch_edit}>
                                <Text style={Styles.edit_txt}>Edit Profile</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[Styles.touch_edit, { marginLeft: WP((6 / 375) * 100) }]}>
                                <Text style={Styles.edit_txt}>Log out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[Styles.name, { paddingLeft: WP((22 / 375) * 100), marginTop: HP((25 / 812) * 100) }]}>Posts</Text>
                    <TouchableOpacity style={[Styles.touch_edit, { marginTop: HP((22 / 812) * 100), width: WP((300 / 375) * 100), paddingVertical: WP(2), alignSelf: 'center' }]}>
                        <Text style={[Styles.edit_txt, { fontSize: 16 }]}>Add Incidents</Text>
                    </TouchableOpacity>
                    <View style={{ backgroundColor: palette.white, marginTop: HP((30 / 812) * 100), height: HP(43) }}>
                        {CONSTANTS.feedData.map((item, i) => (
                            <View key={i} style={{ paddingTop: HP(2), paddingHorizontal: WP((8 / 375) * 100) }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={item.userImg} style={{ width: WP(15), height: WP(15), borderRadius: WP(15 / 2) }} />
                                    <View>
                                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 21, color: '#333333', }}>{item.Name}</Text>
                                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11, color: '#333333', }}>{item.Distance}</Text>
                                    </View>
                                    <View style={{ marginTop: HP(1), right: WP(2), position: 'absolute', }}>
                                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, marginLeft: WP(15), color: '#333333', backgroundColor: 'red', color: 'white', paddingLeft: WP(1), paddingRight: WP(1), borderRadius: WP(5) }}>{item.Activity}</Text>
                                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11, marginLeft: WP(20), color: '#333333', marginTop: HP(1) }}>{item.Time}</Text>
                                    </View>
                                </View>
                                <Image source={item.img} style={{ marginLeft: WP(3), marginTop: HP(1), width: WP((347 / 375) * 100), height: HP((311 / 812) * 100), borderRadius: WP(6) }} />
                                {/* <Image source={item.img} style={{ marginLeft: WP(3), marginTop: HP(1), width: WP((347 / 375) * 100), height: HP((240 / 812) * 100), borderRadius: WP(6) }} /> */}
                                <View style={{ flexDirection: 'row', marginLeft: WP((14 / 375) * 100) }}>

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

                                        <SVGS.comment />

                                        <Text style={{ marginLeft: ((18 / 375) * 100), paddingLeft: WP(2), paddingRight: WP(2), paddingTop: WP(0), backgroundColor: 'skyblue', color: 'white', height: HP((20 / 812) * 100), borderRadius: WP(5) }}>{item.comments}</Text>
                                    </TouchableOpacity>
                                </View>
                                {/* <Text>{item.Name}</Text> */}
                            </View>
                        ))
                        }
                    </View>
                </View>
            </ScrollView>
            {/* </View> */}
        </View>
    )
}





// import React from 'react';
// import { useState } from 'react';
// import { View, Text, Image, FlatList, TouchableOpacity, Modal, TextInput, Share, ScrollView } from 'react-native';
// import { BottomSheet } from 'react-native-elements';
// import { Checkbox } from 'react-native-paper';
// import { IMAGES, SVGS } from '../../assets';
// import CONSTANTS from '../../config/constants';
// import { HP, WP } from '../../config/screen-ratio';
// // import { profileStyles as Styles } from './profile-style';
// import { Header } from '../../assets/Imgs/components/header';
// // import Modal from "react-native-modal";
// import { palette } from '../../config/colors';
// import { profileStyles as Styles } from './profile-style';

// export const Profile = ({ navigation }) => {
//     return (
//         <View style={Styles.container}>
//                 {/* <View style={{ height:HP(98) }}> */}
//                 <ScrollView style={{flex:1}}>
//                 <Header title={"Profile"} />

//                 <View style={Styles.profileView}>
//                     <View style={{ flexDirection: 'row' }}>
//                         <Image source={IMAGES.dp} style={Styles.dp} />
//                         <View style={Styles.nameView}>
//                             <Text style={Styles.name}>Saad Hassan</Text>
//                             <Text numberOfLines={3} style={Styles.about_txt}>
//                                 About Content will be here
//                             </Text>
//                         </View>
//                         <View style={Styles.postView}>
//                             <Text style={Styles.post_txt}>735</Text>
//                             <Text style={Styles.inc_txt}>Incident Posted</Text>
//                         </View>
//                     </View>
//                     <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: WP(2.5), paddingTop: HP((16 / 812) * 100) }}>
//                         <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={Styles.touch_edit}>
//                             <Text style={Styles.edit_txt}>Edit Profile</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity style={[Styles.touch_edit, { marginLeft: WP((6 / 375) * 100) }]}>
//                             <Text style={Styles.edit_txt}>Log out</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 <Text style={[Styles.name, { paddingLeft: WP((22 / 375) * 100), paddingTop: HP((25 / 812) * 100) }]}>Posts</Text>
//                 <TouchableOpacity style={[Styles.touch_edit, { paddingTop: HP((22 / 812) * 100), width: WP((300 / 375) * 100),paddingVertical:WP(2), alignSelf: 'center' }]}>
//                     <Text style={[Styles.edit_txt, { fontSize: 16 }]}>Add Incidents</Text>
//                 </TouchableOpacity>
//                 <View style={{ backgroundColor: palette.white, marginTop: HP((30 / 812) * 100), height: HP(43) }}>
//                     {CONSTANTS.feedData.map((item, i) => (
//                         <View key={i} style={{ paddingTop: HP(2), paddingHorizontal: WP((8 / 375) * 100) }}>
//                             <View style={{ flexDirection: 'row' }}>
//                                 <Image source={item.userImg} style={{ width: WP(15), height: WP(15), borderRadius: WP(15 / 2) }} />
//                                 <View>
//                                     <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 21, color: '#333333', }}>{item.Name}</Text>
//                                     <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11, color: '#333333', }}>{item.Distance}</Text>
//                                 </View>
//                                 <View style={{ marginTop: HP(1), right: WP(2), position: 'absolute', }}>
//                                     <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, marginLeft: WP(15), color: '#333333', backgroundColor: 'red', color: 'white', paddingLeft: WP(1), paddingRight: WP(1), borderRadius: WP(5) }}>{item.Activity}</Text>
//                                     <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11, marginLeft: WP(20), color: '#333333', paddingTop: HP(1) }}>{item.Time}</Text>

//                                 </View>
//                             </View>
//                             <Image source={item.img} style={{ marginLeft: WP(3), marginTop: HP(1), width: WP((347 / 375) * 100), height: HP((311 / 812) * 100), borderRadius: WP(6) }} />
//                             <Image source={item.img} style={{ marginLeft: WP(3), marginTop: HP(1), width: WP((347 / 375) * 100), height: HP((240 / 812) * 100), borderRadius: WP(6) }} />
//                             <View style={{ flexDirection: 'row', marginLeft: WP((14 / 375) * 100) }}>

//                                 <TouchableOpacity style={{ marginTop: HP(.7) }}>
//                                     <SVGS.red />
//                                     <View style={{ position: 'absolute', alignSelf: 'center', marginVertical: HP(1.3) }}>
//                                         <SVGS.heart />
//                                     </View>
//                                 </TouchableOpacity>
//                                 <Text style={{ marginTop: HP(1.1), marginLeft: WP(1), paddingLeft: WP(2), paddingRight: WP(2), paddingTop: WP(0), backgroundColor: 'skyblue', color: 'white', height: HP((20 / 812) * 100), borderRadius: WP(5) }}>{item.likes}</Text>
//                                 <TouchableOpacity onPress={() => onShare()} style={{ marginTop: HP(1.1), marginLeft: WP((155 / 375) * 100), paddingHorizontal: WP(1) }}>
//                                     <SVGS.share />
//                                 </TouchableOpacity>
//                                 <TouchableOpacity onPress={() => setModComment(true)} style={{ flexDirection: 'row', marginLeft: WP((21 / 375) * 100), marginTop: HP(1.1) }}>

//                                     <SVGS.comment />

//                                     <Text style={{ marginLeft: ((18 / 375) * 100), paddingLeft: WP(2), paddingRight: WP(2), paddingTop: WP(0), backgroundColor: 'skyblue', color: 'white', height: HP((20 / 812) * 100), borderRadius: WP(5) }}>{item.comments}</Text>
//                                 </TouchableOpacity>
//                             </View>
//                             {/* <Text>{item.Name}</Text> */}
//                         </View>
//                     ))
//                     }
//                 </View>
//                 </ScrollView>
//                 {/* </View> */}
//         </View>
//     )
// }