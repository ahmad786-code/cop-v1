import React from 'react';
import { createStackNavigator, } from '@react-navigation/stack';
import { Chat, UserProfile,GroupProfile, Inbox, ReportUser } from '../screens';
import { Color, FontFamily } from '../theme';
import { Image, TouchableOpacity, View } from 'react-native';

const Stack = createStackNavigator();



const ChatNavigator = () => {
    return (
        <Stack.Navigator
       
            screenOptions={{
                headerShown: true,
                gestureEnabled:true,
                gestureDirection: 'horizontal',

            }}>
            <Stack.Screen name="Inbox" component={Inbox} options={({ navigation }) => ({
              title: 'Inbox',
              headerTitleAlign: 'center',
              headerStyle: {
             
                elevation: 0,
                shadowOpacity: 0,

              },
              headerTitleStyle: {
              
                color: Color.colorWhite,
                fontFamily: FontFamily.soraBold,
                fontSize: 20,
                textTransform: 'capitalize',
              },
              headerTransparent: true,
              headerLeft: () => (
                <View style={{ alignItems:'center', justifyContent:'center',   marginLeft: 25, width: 12, height: 16, paddingHorizontal: 20}}>
               <Image source={require('../assets/O_icon.png')} style={{width:23.65, height:26}} />
                </View>
              ),
              headerRight: () => (
                <View style={{marginRight: 25}}>
                    <View style={{flexDirection:'row', alignItems:'center', columnGap:10}}>
                      
                    <Image source={require('../assets/app_icon/header/search.png')} style={{width:16, height:16}} />

                    </View>
                </View>
              )
            })}/>
            
            <Stack.Screen name="User_Profile" options={({ navigation }) => ({
              title: 'User Profile',
              headerTitleAlign: 'center',
              headerStyle: {
             
                elevation: 0,
                shadowOpacity: 0,

              },
              headerTitleStyle: {
              
                color: Color.colorWhite,
                fontFamily: FontFamily.soraBold,
                fontSize: 20,
                textTransform: 'capitalize',
              },
              headerTransparent: true,
              headerLeft: () => (
                <View  style={{ alignItems:'center', justifyContent:'center',   marginLeft: 25, width: 12, height: 16, paddingHorizontal: 20}}>
                  <Image source={require('../assets/O_icon.png')} style={{width:23.65, height:26}} />
                </View>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Report_User')} style={{   padding: 10, marginRight: 15}}>
                        <Image source={require('../assets/app_icon/header/bullet-point-user-profile.png')} style={{width:4.35, height:20}} />
                </TouchableOpacity>
              )
            })} component={UserProfile} />
            <Stack.Screen name="Group_Profile" component={GroupProfile} 
            options={({ navigation }) => ({
              title: 'Group Profile',
              headerTitleAlign: 'center',
              headerStyle: {
             
                elevation: 0,
                shadowOpacity: 0,

              },
              headerTitleStyle: {
              
                color: Color.colorWhite,
                fontFamily: FontFamily.soraBold,
                fontSize: 20,
                textTransform: 'capitalize',
              },
              headerTransparent: true,
              headerLeft: () => (
                <View style={{  marginLeft: 25, width: 12, height: 16, paddingHorizontal: 20}}>
               <Image source={require('../assets/O_icon.png')} style={{width:23.65, height:26}} />
                </View>
              ),
              headerRight: () => (
                <View style={{marginRight: 25}}>
                    <View style={{flexDirection:'row', alignItems:'center', columnGap:10}}>
                      
                      <Image source={require('../assets/app_icon/header/search.png')} style={{width:16, height:16}} />

                    </View>
                </View>
              )
            })}
            />
            <Stack.Screen name="Report_User" component={ReportUser} 
            options={({ navigation }) => ({
              title: 'Report user',
              headerTitleAlign: 'center',
              headerStyle: {
             
                elevation: 0,
                shadowOpacity: 0,

              },
              headerTitleStyle: {
              
                color: Color.colorWhite,
                fontFamily: FontFamily.soraBold,
                fontSize: 20,
                textTransform: 'capitalize',
              },
              headerTransparent: true,
              headerLeft: () => (
                <View style={{ alignItems:'center', justifyContent:'center',  marginLeft: 25, width: 12, height: 16, paddingHorizontal: 20}}>
               <Image source={require('../assets/O_icon.png')} style={{width:23.65, height:26}} />
                </View>
              ),
              headerRight: () => (
                <View style={{marginRight: 25}}>
                    <View style={{flexDirection:'row', alignItems:'center', columnGap:10}}>
                      
                      <Image source={require('../assets/app_icon/header/search.png')} style={{width:16, height:16}} />

                    </View>
                </View>
              )
            })}
            />
      
        </Stack.Navigator>
    )
}

export default ChatNavigator