import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native'
import { launchImagePicker } from '../utils/imagePickerHelper'
import userImage from '../assets/pexels-andrea-piacquadio-733872.jpg'

const ProfileImage = props => {
     
    const imageSource = props.uri  ? { uri: props.uri } : userImage;
    console.log(props.uri);
    const [image, setImage] = useState(imageSource)


    const imagePick = async () => {


        try {
            const tempUri = await launchImagePicker()


            if (!tempUri) return
            setImage({ uri: tempUri })

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <TouchableOpacity onPress={imagePick} style={{ alignItems: 'center', position: 'relative' }}>
            <View style={{ position: 'relative' }}>
                <Image source={require('../assets/app_icon/my-account/pp-background.png')} style={{ width: 140, height: 140 }} />
            </View>
            <View style={{ position: 'absolute', top: 30, right: 30, }}>
                <Image source={image} style={{ width: 95, height: 95, borderRadius: 100 }} />
            </View>
            <View style={{ width: 95, height: 95, borderRadius: 100, position: 'absolute', backgroundColor: '#783F8E', opacity: 0.67, top: 30, right: 30 }} >
                <View style={{ alignItems: 'center', justifyContent: 'center', height: ' 100%' }}>
                    <Image source={require('../assets/app_icon/my-account/change-pp.png')} style={{ width: 34, height: 32.03 }} />
                </View>
            </View>
            
        </TouchableOpacity>
    )
}

export default ProfileImage

 