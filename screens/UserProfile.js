import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Color, FontFamily, FontSize } from '../theme'
import CustomButton from '../components/CustomButton'
import { useSelector } from 'react-redux'


const UserProfile = () => {
    const userData = useSelector(state => state.auth.userData)
    console.log(userData);
    const { width, height } = Dimensions.get('window');


    return (
        <View style={{ flex: 1, justifyContent: 'center',  }}>
            <ImageBackground source={require('../assets/img/Design.png')} resizeMode='cover' style={{ flex: 1,  }}>
                <SafeAreaView style={{alignItems:'center', justifyContent:'center', marginTop:'15%'}}>
                    <View style={{ alignItems: 'center', position:'relative'  }}>
                        <View style={{position:'relative'  }}>
                            <Image source={require('../assets/app_icon/my-account/pp-background.png')} style={{ width: 140, height: 140 }} />
                        </View>
                        <View style={{position:'absolute', top:30, right:30,}}>
                            <Image source={require('../assets/pexels-andrea-piacquadio-733872.jpg')} style={{ width: 95, height: 95, borderRadius: 100 }} />
                        </View>
                    </View>
                </SafeAreaView>


               <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 20, fontFamily: FontFamily.soraRegular,marginTop:14.5 }}>@Arlene_McCoy</Text>



                <View style={{   flexDirection: 'row', alignItems: 'center', justifyContent: 'center', columnGap: 55, marginTop:42  }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 28, color: Color.colorWhite, fontFamily: FontFamily.soraSemiBold }}>1752</Text>
                        <Text style={{ fontSize: 16, color: Color.colorGray_100, fontFamily: FontFamily.soraRegular }}>Following</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 28, color: Color.colorWhite, fontFamily: FontFamily.soraSemiBold }}>1675</Text>
                        <Text style={{ fontSize: 16, color: Color.colorGray_100, fontFamily: FontFamily.soraRegular }}>subscribers</Text>
                    </View>
                </View>

                <View style={{ marginTop:32, paddingHorizontal: 25,  height: '20%' }}>
                <View style={{ flexDirection: 'row', columnGap: 27, alignItems: 'center', backgroundColor: Color.colorGray_300, borderRadius: 12, paddingHorizontal: 25, paddingVertical: '5%' }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Image source={require('../assets/img/Monster.png')} style={{ width: 88, height: 81 }} />
                            <Text style={{ fontFamily: FontFamily.soraSemiBold, fontSize: 16, color: Color.colorWhite }}>10 RANK</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: FontFamily.soraBold, fontSize: 20, color: Color.colorWhite }}>About</Text>
                            <View style={{ maxHeight: 100 }}>
                                <Text style={{ fontFamily: FontFamily.soraRegular, fontSize: 14, color: Color.colorGray_100 }}> {userData.bio}

                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{   marginTop:53, paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ width: '40%' }}>
                        <CustomButton title='Follow' />

                    </View>
                    <View style={{ width: '40%' }} >
                        <CustomButton title='Message' />

                    </View>
                </View>  



            </ImageBackground>

        </View>

    )
}

export default UserProfile
