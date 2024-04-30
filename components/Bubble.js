import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color, FontSize } from '../theme'

const Bubble = () => {
    return (
        <>
        
            <View style={styles.chatBox}>
                <View style={styles.user}>
                    <Image source={require('../assets/img/user.jpg')} style={styles.profileImg} />
                    <Text style={styles.username}>Arlene McCoy</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Hey, guess what? I just got tickets to the upcoming Starlight Symphony concert!</Text>
                </View>
            </View>


            <View style={[styles.chatBox, styles.otherChatBox]}>
            <View style={styles.user}>
                    <Image source={require('../assets/img/user.jpg')} style={styles.profileImg} />
                    <Text style={styles.username}>Arlene McCoy</Text>
                </View>
                <View style={styles.textContainerOther}>
                    <Text style={[styles.text, styles.other]}>Hey, guess what? I just got tickets to the upcoming Starlight Symphony concert!</Text>
                </View>
            </View>
        </>
    )
}

export default Bubble

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: Color.colorGray_200,
        width: 274,

        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 17
    },
    textContainerOther: {
        backgroundColor: Color.colorDarkslateblue,

        width: 274,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 17



    },

    text: {
        color: Color.colorGray_100,
        fontSize: FontSize.size_smi,
        lineHeight: 20

    },
    other: {
        color: Color.colorWhite
    },

    profileImg: {
        height: 25,
        width: 25,
        borderRadius: 50
    },
    username: {
        color: Color.colorGray_100,
        fontSize: 7
    },
    chatBox: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 13,
        marginHorizontal: 9
    },
    user: {
        marginVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 7,

    },
    otherChatBox: {
       marginVertical: 30,
       marginHorizontal: 9,
        flexDirection: 'row-reverse'
    }
})