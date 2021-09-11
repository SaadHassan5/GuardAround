import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageStore, ScrollView, Share, FlatList } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { BottomSheet, } from 'react-native-elements';
import { IMAGES, SVGS } from '../../assets';
import { Header } from '../../assets/Imgs/components/header';
import { addStyles as Styles } from './addIncident-style';
import { HP, WP } from '../../config/screen-ratio';
import { palette } from '../../config/colors';
import CONSTANTS from '../../config/constants';
import { LogBox } from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';
import { CustomMarker } from '../../assets/Imgs/components/CustomMarker';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
LogBox.ignoreAllLogs();
export const AddIncident = ({ navigation, route }) => {
    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });
    const [marCord, setMarCord] = useState({
        latitude: 10,
        longitude: 10,
    })
    // const [preview, setPreview] = useState([]);
    const preview = [];
    const [selectedValue, setSelectedValue] = useState("Select Post Type");
    useEffect(() => {
        console.log('Location');
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            setPosition({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421,
            });
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    // React.useEffect(() => {
    //     if (route.params?.path) {
    //         // Post updated, do something with `route.params.post`
    //         // For example, send the post to the server
    //         console.log('mila');
    //         for (let i = 0; i < route.params.path.length; i++) {
    //             console.log(route.params.path[i]);
    //             preview.push(route.params.path[i])
    //         }
    //     }
    // }, [route.params?.path, preview]);
    // const check=()=>{
    //     for(let i=0;i<route.params.path.length;i++)
    //     {
    //         console.log(route.params.path[i]);
    //     }
    // }
    return (
        <View style={[Styles.container, { paddingBottom: HP(0) }]}>

            <ScrollView scrollEnabled={true} style={{}}>
                <View style={{ flex: 1, paddingBottom: HP(10) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: WP((15 / 375) * 100), }}>
                        <Text style={{ marginTop: HP((10 / 375) * 100), color: palette.black, fontFamily: "Poppins-Bold", fontSize: 27, backgroundColor: palette.white }}>Add Incident</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('Camera') }} style={{ position: 'absolute', right: WP(9), paddingTop: HP(2), paddingLeft: WP(6), backgroundColor: 'transparent', paddingBottom: WP(2) }}>
                            <SVGS.camera />

                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: WP(1), height: HP(38), borderWidth: .3 }}>
                        <FlatList
                            data={CONSTANTS.IncidentImgs}
                            numColumns={2}
                            // keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>
                                <View  >
                                    <Image source={item.img} style={Styles.img} />
                                    <TouchableOpacity style={{ position: 'absolute', right: WP(2.5), marginTop: HP(1) }}>
                                        <SVGS.cross />
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    </View>
                    <TextInput placeholder={"Add Title"} style={Styles.title_inp} />
                    <TextInput multiline={true} placeholder={"Add Description"} style={[Styles.title_inp, { marginTop: HP((18 / 812) * 100), paddingBottom: HP((184 / 812) * 100) }]} />
                    {/* <View style={{}}>
                        <TextInput editable={false} placeholder={"Select Post Type"} style={[Styles.title_inp, { marginTop: HP((18 / 812) * 100) }]} />
                        <TouchableOpacity style={{ position: 'absolute', right: WP(15), marginTop: HP(4), padding: WP(2) }}>
                            <SVGS.downArrow />
                        </TouchableOpacity>
                    </View> */}
                    {/* <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: WP(90),borderWidth:1,borderColor:'red',marginLeft:WP(5),marginTop: HP((18 / 812) * 100), }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Select Post Type" value="" />
                        <Picker.Item label="Crime" value="Crime" />
                        <Picker.Item label="Neighbourly Movement" value="nei" />
                        <Picker.Item label="Missing Person" value="miss" />
                        <Picker.Item label="Suspicious Activity" value="susp" />
                    </Picker> */}
                    {/* <ModalDropdown options={['Crime', 'Neighbourly Movement','Missing Person','Suspicious Activity']}
                    style={{marginLeft:WP(12),borderWidth:1,paddingLeft:WP(2),borderRadius:WP(2),position:'absolute',bottom:HP(3),paddingHorizontal:WP(5)}}
                    dropdownStyle={{marginLeft:WP(15),marginTop:HP(5),width:WP(50),backgroundColor:palette.white,height:HP(25),borderWidth:2,borderColor:palette.secondary}}
                    textStyle={{fontFamily:'Poppins-Bold',fontSize:20}}
                    dropdownTextStyle={{fontFamily:'Poppins-Medium',fontSize:15}}
                    defaultValue={'Select Post Type'}
                    // onSelect={(e)=>console.log(e)}
                    
                    /> */}
                    <MapView style={{ marginTop:HP(5),borderWidth: 1, borderColor: 'red', width: '100%', height: HP(40), bottom: HP(0) }}
                        showsUserLocation={true}
                        followsUserLocation={true}
                        // initialRegion={position}
                        region={position}
                    onPress={(e) => { console.log(e.nativeEvent.coordinate); setMarCord(e.nativeEvent.coordinate); }} 
                    >
                        {/* <Marker
                    coordinate={marCord}
                    image={IMAGES.dp}
                    style={{width:WP(20)}}
                /> */}
                        {/* <CustomMarker navigation={()=>navigation.navigate('Incident')} pinColor={'red'} value={'saad'} coordinate={marCord} /> */}
                        {/* <MapView.Cicle center={{ latitude: 43.604461, longitude: 1.444031 }}
                    radius={1500}
                    strokeWidth={2}
                    strokeColor="#3399ff"
                    fillColor="#80bfff" /> */}
                    </MapView>
                </View>
                <TouchableOpacity style={{backgroundColor:'#2fd3ca',position: 'absolute',borderRadius:WP(2),bottom:HP(12),alignSelf:'center',paddingHorizontal:WP(25),paddingVertical:HP(1)}}>
                    <Text style={{fontFamily:'Poppins-Bold',color:palette.white,fontSize:18,lineHeight:30}}>Post</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}