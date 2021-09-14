import React from 'react';
import { useState, useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { SVGS } from '../../assets';
import { HP } from '../../config/screen-ratio';
import { LogBox } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";
// LogBox.ignoreAllLogs();
import { connect } from 'react-redux';
import { CameraImgs, ChangeBackgroundColor } from '../../../root/action';
const Camera = (props) => {

    const [isRecording, setisRecording] = useState(false)
    const [captured, setCaptured] = useState([])
    const cameraRef = useRef();
    const takePicture = async () => {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        console.log(data.uri);
        // console.warn('Image Saved');
        // alert("Image Saved")
        // console.log((await CameraRoll.save(data.uri, { type: 'photo', album: 'GuardAround' })).toString());
        // const url =await CameraRoll.save(data.uri, { type: 'photo', album: 'GuardAround' })).toString();
        captured.push(await (await CameraRoll.save(data.uri, { type: 'photo', album: 'GuardAround' })).toString());
        // CameraRoll.save(data.uri, { type: 'photo', album: 'GuardAround' });
        props.camereImages(captured);
    };
    const takeVideo = async () => {
        // const data;
        if (!isRecording) {
            setisRecording(true);
            const options = { ratio: 16.9, maxDuration: 60 };
            const data = await cameraRef.current.recordAsync(options);
            console.log(data.uri);
            // console.log();
            CameraRoll.save(data.uri, { type: 'photo', album: 'GuardAround' });
        }
        else {
            setisRecording(false);
            await cameraRef.current.stopRecording();
            console.log('Khtam');
            alert("Video Saved")

        }
    };
    const check = () => {
        for (let i = 0; i < captured.length; i++)
            console.log(captured[i]);
        props.navigation.navigate({
            name: 'AddIncident',
            params: { path: captured },
            merge: true
        })
    }
    return (
        <View style={{ flex: 1, paddingBottom: HP(0) }}>
            <RNCamera
                ref={cameraRef}
                style={{ flex: 1 }}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                captureAudio={true}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: HP(10), alignSelf: 'center', }}>
                <TouchableOpacity onPress={() => { console.log('Open Camera for Picture'); takePicture() }} style={{ margin: HP(2) }}>
                    <SVGS.capture />

                </TouchableOpacity>

                <TouchableOpacity onPress={() => { console.log('Open Camera for video'); takeVideo() }} style={{ margin: HP(2) }}>
                    {isRecording ?
                        <SVGS.pauseButton />
                        :
                        <SVGS.videoButton />
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { console.log('Check'); check() }} style={{ margin: HP(2) }}>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: 'white',fontSize:22 }}>Go Back</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}
const mapStateToProps=(state)=>{
    const {backgroundColor} = state;
    const {Imgs} = state;
    // alert(backgroundColor);
    // alert(Imgs);
    console.warn(Imgs);
    return state;
};
const mapDispatchToProps=(dispatch)=>{
    return{
        changeBackgroundColor :() => dispatch(ChangeBackgroundColor()),
        camereImages :(Imgs) => dispatch(CameraImgs(Imgs))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Camera);
