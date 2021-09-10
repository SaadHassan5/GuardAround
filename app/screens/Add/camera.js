import React from 'react';
import { useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SVGS } from '../../assets';
import { HP } from '../../config/screen-ratio';
import { LogBox } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";
LogBox.ignoreAllLogs();
export const Camera = ({ navigation }) => {
    const [isRecording, setisRecording] = useState(false)
    const cameraRef = useRef();
    const takePicture = async () => {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        // console.log(data.uri);
        console.log((await CameraRoll.save(data.uri, { type: 'photo', album: 'GuardAround' })).toString());
        // CameraRoll.save(data.uri, { type: 'photo', album: 'GuardAround' });
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
        }
    };
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
            </View>
        </View>
    )
}