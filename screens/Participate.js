import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View, ScrollView, useWindowDimensions } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Color, FontFamily, FontSize } from '../theme'
import SubmitButton from '../components/SubmitButton'
import Header from '../components/Header'

import SearchIcon from '../assets/img/Search.png'
import SpeakerIcon from '../assets/img/Speaker.png'
import { } from 'react-native'
import CustomButton from '../components/CustomButton'


const Participate = () => {
    const { width } = useWindowDimensions()
    return (

        <ImageBackground source={require('../assets/img/Design.png')} resizeMode='cover' style={{ flex: 1, overflow: 'hidden' }}>
            <SafeAreaView>
                {/* Header */}
                <View style={{ paddingHorizontal: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30, marginBottom: 30 }}>
                    
                </View>

            </SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} bounces={false} >

                <View style={{ alignItems: 'center' }}>
                    <View style={[styles.concertDetailWrappper, { width: width * .90 }]}>
                        <View style={{ flexDirection: 'column', rowGap: 24 }}>
                            <Text style={{ fontSize: 16, fontFamily: FontFamily.soraRegular, color: Color.colorGray_100 }}>Concert Name</Text>
                            <Text style={{ fontSize: 20, fontFamily: FontFamily.soraSemiBold, color: Color.colorWhite }}>Faucibus tellus risus</Text>
                            <Text style={{ fontSize: 16, fontFamily: FontFamily.soraRegular, color: Color.colorGray_100 }}>Date</Text>
                            <Text style={{ fontSize: 20, fontFamily: FontFamily.soraSemiBold, color: Color.colorWhite }}>8 march, 2024</Text>
                            <Text style={{ fontSize: 16, fontFamily: FontFamily.soraRegular, color: Color.colorGray_100 }}>Time</Text>
                            <Text style={{ fontSize: 20, fontFamily: FontFamily.soraSemiBold, color: Color.colorWhite }}>05:49 pm</Text>
                            <Text style={{ fontSize: 16, fontFamily: FontFamily.soraRegular, color: Color.colorGray_100 }}>location</Text>
                            <Text style={{ fontSize: 20, fontFamily: FontFamily.soraSemiBold, color: Color.colorWhite }}>Stavanger</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 24, paddingHorizontal: 25, }}>
                    <Text style={{ fontSize: 16, fontFamily: FontFamily.soraSemiBold, color: Color.colorGray_100 }}>
                        Thank you for your interest in participating in our upcoming concert! To secure your spot, please submit a screenshot of your performance or rehearsal.
                    </Text>
                </View>

                <View style={{ paddingHorizontal: 33, paddingTop: 24 }}>
                    <Text style={{ fontSize: 20, fontFamily: FontFamily.soraSemiBold, color: Color.colorWhite }}>Instructions</Text>
                    <View style={{ flexDirection: 'column', rowGap: 6 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <View style={{ width: 5, height: 5, backgroundColor: Color.colorGray_100, marginBottom: 15 }} />
                            <Text style={{ textAlign: 'left', fontSize: 16, fontFamily: FontFamily.soraRegular, color: Color.colorGray_100 }}>
                                Review your submission before clicking the "Send" button.
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <View style={{ width: 5, height: 5, backgroundColor: Color.colorGray_100, marginBottom: 15 }} />
                            <Text style={{ textAlign: 'left', fontSize: 16, fontFamily: FontFamily.soraRegular, color: Color.colorGray_100 }}>
                                Review your submission before clicking the "Send" button.
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 25 }}>
                    <View style={{ borderStyle: 'dashed', borderWidth: 5, borderColor: Color.colorDarkslateblue, borderRadius: 12, paddingVertical: 37, paddingHorizontal: 60, marginTop: 30 }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Image source={require('../assets/vectors/Upload.png')} style={{ width: 36, height: 38, marginBottom: 12 }} />
                            <Text style={{ fontSize: 20, fontFamily: FontFamily.soraSemiBold, color: Color.colorWhite, marginBottom: 3 }}>Click here to browse file</Text>
                            <Text style={{ textAlign: 'left', fontSize: 14, fontFamily: FontFamily.soraRegular, color: Color.colorGray_100 }}>
                                (Upload upto 1 MB JPEG or PNG file)
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 60, marginBottom: 47, paddingHorizontal: 40 }}>
                    <CustomButton title='Send' />
                </View>



            </ScrollView>
        </ImageBackground>

    )
}

export default Participate

const styles = StyleSheet.create({

    concertDetailWrappper: {
        flexDirection: 'column',
        backgroundColor: Color.colorGray_300,
        paddingVertical: 29,
        paddingHorizontal: 38,


        borderRadius: 12,
    }
})