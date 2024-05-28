import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Color, FontFamily, FontSize } from '../theme'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import SubmitButton from '../components/SubmitButton'
import CustomButton from '../components/CustomButton'
import { useSelector } from 'react-redux'

const usersGrop = [
    { profile: "https://randomuser.me/api/portraits/men/1.jpg" },
    { profile: "https://randomuser.me/api/portraits/women/1.jpg" },
    { profile: "https://randomuser.me/api/portraits/men/2.jpg" },
    { profile: "https://randomuser.me/api/portraits/women/2.jpg" },
    { profile: "https://randomuser.me/api/portraits/men/3.jpg" },
    { profile: "https://randomuser.me/api/portraits/women/3.jpg" },
    { profile: "https://randomuser.me/api/portraits/men/4.jpg" },
    { profile: "https://randomuser.me/api/portraits/women/4.jpg" },
    { profile: "https://randomuser.me/api/portraits/men/5.jpg" },
    { profile: "https://randomuser.me/api/portraits/women/5.jpg" },
    { profile: "https://randomuser.me/api/portraits/men/6.jpg" },
    { profile: "https://randomuser.me/api/portraits/men/1.jpg" },
    { profile: "https://randomuser.me/api/portraits/women/1.jpg" },
    { profile: "https://randomuser.me/api/portraits/men/2.jpg" },
    { profile: "https://randomuser.me/api/portraits/women/2.jpg" },
    { profile: "https://randomuser.me/api/portraits/men/3.jpg" },
    { profile: "https://randomuser.me/api/portraits/women/3.jpg" },
    
 
]
const GroupProfile = (props) => {
    const content = 'Lorem ipsum dolor sit amet cons ectetur. Feugi at sed a dictum neq ue duis rhoncus integer eti am ha bitasse. Faucibus tellus risus iacu lis ore m ipsum dolor...  Faucibus tellus risus iacu lis ore m ipsum dolor Lorem ipsum dolor sit amet cons ectetur. Feugi at sed a dictum neq ue duis rhoncus integer eti am ha bitasse. Faucibus tellus risus iacu lis ore m ipsum dolor...  Faucibus tellus risus iacu lis ore m ipsum dolor Lorem ipsum dolor sit amet cons ectetur. Feugi at sed a dictum neq ue duis rhoncus integer eti am ha bitasse. Faucibus tellus risus iacu lis ore m ipsum dolor...  Faucibus tellus risus iacu lis ore m ipsum dolor'
    const [textShown, setTextShown] = useState(false);
    const groupImg = props.route?.params?.chatDataImage
    const chatId = props.route?.params?.chatId

    const chatsData = useSelector(state => state.chats.chatsData[chatId]);
    const userData = useSelector(state => state.auth.userData);
    const storedUsers = useSelector(state => state.users.storedUsers);

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/img/Design.png')} resizeMode='cover' style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false} >



                    <SafeAreaView style={{ alignItems: 'center', marginTop: '15%' }}>
                        <View style={{ alignItems: 'center', position: 'relative' }}>
                            <View style={{ position: 'relative' }}>
                                <Image source={require('../assets/app_icon/my-account/pp-background.png')} style={{ width: 140, height: 140 }} />
                            </View>
                            <View style={{ position: 'absolute', top: 30, right: 30, }}>
                                <Image source={{ uri: groupImg.chatImage }} style={{ width: 95, height: 95, borderRadius: 100 }} />
                            </View>
                        </View>
                    </SafeAreaView>

                    <Text style={{ color: '#fff', alignSelf: 'center', marginTop: 32, fontSize: 20, fontFamily: FontFamily.soraRegular }}>{groupImg.chatName}</Text>

                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            {usersGrop.slice(0, 5).map((uid, index) => (
                                <Image
                                    key={index}
                                    source={{ uri: uid.profile }}
                                    style={{ width: 34, height: 34, borderRadius: 100, borderWidth: 1, borderColor: '#fff', marginLeft: index !== 0 ? -10 : 0 }}
                                />
                            ))}
                            {usersGrop.length > 5 && (
                                <View style={{ alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 100, backgroundColor: Color.colorDarkslateblue, marginLeft: -10 }}>
                                    <Text style={{ color: '#fff', fontSize: FontSize.size_smi }}>+{usersGrop.length - 5}</Text>
                                </View>
                            )}
 

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

                    <View style={{ paddingHorizontal: 25 }}>
                        <Text style={{ alignSelf: 'flex-start', color: Color.colorWhite, fontSize: 20, fontFamily: FontFamily.soraSemiBold }}>About</Text>

                        <Text style={{ color: Color.colorGray_100, fontFamily: FontFamily.soraRegular, fontSize: 16 }} numberOfLines={textShown ? undefined : 3}>{content}</Text>
                        <TouchableOpacity onPress={() => setTextShown(!textShown)}>
                            <Text style={styles.readMore}>
                                {textShown ? 'See less' : 'See more'}
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ paddingHorizontal: 25, marginVertical: 25 }}>
                        <CustomButton title='Leave' />
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


