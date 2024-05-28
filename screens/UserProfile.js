import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Color, FontFamily, FontSize } from '../theme'
import CustomButton from '../components/CustomButton'
import { useSelector } from 'react-redux'
import ProfileImage from '../components/ProfileImage'


const UserProfile = (props) => {
    const storedUsers = useSelector(state => state.users.storedUsers);
    const currentUser = storedUsers[props.route.params.uid]
     
    
   const cUser = currentUser.userId
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
                           
                            <ProfileImage uri={currentUser.profilePicURL} width={95} height={95}/>
                        </View>
                    </View>
                </SafeAreaView>


               <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 20, fontFamily: FontFamily.soraRegular,marginTop:14.5 }}>{currentUser.userName}</Text>



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
                            <Text style={{ fontFamily: FontFamily.soraSemiBold, fontSize: 16, color: Color.colorWhite }}>{currentUser.rank} RANK</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: FontFamily.soraBold, fontSize: 20, color: Color.colorWhite }}>About</Text>
                            <View style={{ maxHeight: 100 }}>
                                <Text style={{ fontFamily: FontFamily.soraRegular, fontSize: 14, color: Color.colorGray_100 }}>  
                                {currentUser.bio} 
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
                        <CustomButton title='Message'   onPress={() => props.navigation.navigate("Inbox", { selectedUserId: currentUser.userId })}/>
                        
                    </View>
                </View>  
 


            </ImageBackground>

        </View>

    )
}

export default UserProfile
