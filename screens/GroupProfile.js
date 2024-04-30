import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Color, FontFamily, FontSize } from '../theme'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import SubmitButton from '../components/SubmitButton'
import CustomButton from '../components/CustomButton'

const GroupProfile = () => {
    const content = 'Lorem ipsum dolor sit amet cons ectetur. Feugi at sed a dictum neq ue duis rhoncus integer eti am ha bitasse. Faucibus tellus risus iacu lis ore m ipsum dolor...  Faucibus tellus risus iacu lis ore m ipsum dolor Lorem ipsum dolor sit amet cons ectetur. Feugi at sed a dictum neq ue duis rhoncus integer eti am ha bitasse. Faucibus tellus risus iacu lis ore m ipsum dolor...  Faucibus tellus risus iacu lis ore m ipsum dolor Lorem ipsum dolor sit amet cons ectetur. Feugi at sed a dictum neq ue duis rhoncus integer eti am ha bitasse. Faucibus tellus risus iacu lis ore m ipsum dolor...  Faucibus tellus risus iacu lis ore m ipsum dolor'
    const [textShown, setTextShown] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/img/Design.png')} resizeMode='cover' style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false} >
                   


                <SafeAreaView style={{alignItems:'center', marginTop:'15%'}}>
                    <View style={{ alignItems: 'center', position:'relative'  }}>
                        <View style={{position:'relative'  }}>
                            <Image source={require('../assets/app_icon/my-account/pp-background.png')} style={{ width: 140, height: 140 }} />
                        </View>
                        <View style={{position:'absolute', top:30, right:30,}}>
                            <Image source={require('../assets/group.jpg')} style={{ width: 95, height: 95, borderRadius: 100 }} />
                        </View>
                    </View>
                </SafeAreaView>
                    
                    <Text style={{ color: '#fff', alignSelf: 'center', marginTop: 32, fontSize: 20, fontFamily: FontFamily.soraRegular }}>Galactic Giggles</Text>

                    <View style={{ width: '100%',   alignItems: 'center', justifyContent:'center',   marginTop: 10, paddingLeft:30}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../assets/pexels-andrea-piacquadio-733872.jpg')} style={{ width: 34, height: 34, borderRadius: 100, borderWidth: 1, borderColor: '#fff', left: 10 }} />
                            <Image source={require('../assets/pexels-andrea-piacquadio-733872.jpg')} style={{ width: 34, height: 34, borderRadius: 100, borderWidth: 1, borderColor: '#fff', }} />
                            <Image source={require('../assets/pexels-andrea-piacquadio-733872.jpg')} style={{ width: 34, height: 34, borderRadius: 100, borderWidth: 1, borderColor: '#fff', right: 10 }} />
                            <Image source={require('../assets/pexels-andrea-piacquadio-733872.jpg')} style={{ width: 34, height: 34, borderRadius: 100, borderWidth: 1, borderColor: '#fff', right: 20 }} />
                            <View style={{ alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 100, backgroundColor: Color.colorDarkslateblue, right: 30 }}>
                                <Text style={{ color: '#fff', fontSize: FontSize.size_smi }}>+ 12</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 42, paddingHorizontal: 25 }}>
                        <Text style={{ alignSelf: 'flex-start', marginBottom: 16, color: Color.colorWhite, fontSize: 20, fontFamily: FontFamily.soraSemiBold }}>Concert Information</Text>
                        <Image source={require('../assets/group.jpg')} resizeMode='cover' style={{ width: 380, height: 244, borderRadius: 12 }} />
                    </View>

                    <View style={styles.concertConatiner}>
                        <View style={styles.concertBox}>
                            <View style={styles.concertDate}>
                                <Text style={styles.title}>Date</Text>
                                <Text style={styles.subTitle}>10 Jan 2023</Text>
                            </View>
                        </View>
                        <View style={styles.concertBox}>
                            <View style={styles}>
                                <Text style={styles.title}>City</Text>
                                <Text style={styles.subTitle}>Inglewood</Text>
                            </View>
                        </View>
                        <View style={styles.concertBox}>
                            <View style={styles.concertDate}>
                                <Text style={styles.title}>Venue</Text>
                                <Text style={styles.subTitle}>Connecticut</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{paddingHorizontal:25}}>
                        <Text style={{ alignSelf: 'flex-start', color: Color.colorWhite, fontSize: 20, fontFamily: FontFamily.soraSemiBold }}>About</Text>

                        <Text style={{color:Color.colorGray_100, fontFamily:FontFamily.soraRegular, fontSize:16}} numberOfLines={textShown ? undefined : 3}>{content}</Text>
                        <TouchableOpacity onPress={() => setTextShown(!textShown)}>
                            <Text style={styles.readMore}>
                                {textShown ? 'See less' : 'See more'}
                            </Text>
                        </TouchableOpacity>

                    </View>
                  <View style={{paddingHorizontal:25, marginVertical:25}}>
                  <CustomButton title='Leave'/>
                  </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default GroupProfile

const styles = StyleSheet.create({

    concertConatiner: {
        paddingHorizontal: 25,
        marginTop: 25,
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: 10
    },
    concertBox: {

        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 7,
        padding: 12


    },
    aboutContainer: {
        marginBottom: 22
    },
    title: {
        color: Color.colorWhite
    },
    subTitle: {
        color: Color.colorDarkslateblue
    },

    aboutTitle: {
        marginBottom: 6,
        fontSize: FontSize.size_xl,
        color: Color.colorWhite
    },

    aboutContent: {
        fontSize: FontSize.size_base,
        color: Color.colorGray_100,
    },
    readMore: {
        color: Color.colorDarkslateblue,
        fontSize: FontSize.size_base
    }

})


