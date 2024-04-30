import React, { useEffect } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Chat, Login,  SignUp, StartUpScreen } from '../screens'

import { createStackNavigator } from "@react-navigation/stack";
import { Color, FontFamily } from '../theme';

import BottomTabNavigator from './BottomTabNavigator';
import Introduction from '../screens/Introduction';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
 

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const navigation = useNavigation();
  const isAuth = useSelector(state => state.auth.token !== null && state.auth.token !== "")
  const didTryAutoLogin =   useSelector(state => state.auth.didTryAutoLogin);
  const isNewUser = useSelector(state => state.auth.isNewUser);
 
  useEffect(() => {
    if (isAuth) {
      if (isNewUser) {
        navigation.navigate('Introduction');
      } else {
        navigation.navigate('Home');
      }
    } else {
      navigation.navigate('Login');
    }
  }, [isAuth, isNewUser, navigation]);


  return (
    <Stack.Navigator initialRouteName='Login'>

      {/* {!isAuth && didTryAutoLogin && (<>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignUp} options={({ navigation }) => ({
          title: 'Sign Up',
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
            <TouchableOpacity style={{ marginLeft: 25, width: 12, height: 16, paddingHorizontal: 20 }} onPress={() => navigation.goBack()}>
              <Image source={require('../assets/app_icon/header/return-back.png')} style={{ width: 12, height: 12 }} />

            </TouchableOpacity>
          ),
        })} />
      </>
      )}

{!isAuth && !didTryAutoLogin (
        <>
          <Stack.Screen name='Startup' component={StartUpScreen} options={{ headerShown: false }} />
         

        </>)}

      {isAuth && (
        <>
          <Stack.Screen name='Home' component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name='Chat' component={Chat} options={{ headerShown: false }} />
          <Stack.Screen name='Introduction' component={Introduction} options={{ headerShown: false }} />

        </>)} */}
         {!isAuth && didTryAutoLogin && (
      <>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignUp} options={({ navigation }) => ({
          title: 'Sign Up',
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
            <TouchableOpacity style={{ marginLeft: 25, width: 12, height: 16, paddingHorizontal: 20 }} onPress={() => navigation.goBack()}>
              <Image source={require('../assets/app_icon/header/return-back.png')} style={{ width: 12, height: 12 }} />
            </TouchableOpacity>
          ),
        })} />
      </>
    )}

    {!isAuth && !didTryAutoLogin && (
      <>
        <Stack.Screen name='Startup' component={StartUpScreen} options={{ headerShown: false }} />
      </>
    )}

    {isAuth && (
      <>
        <Stack.Screen name='Home' component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='Chat' component={Chat} options={{ headerShown: false }} />
        <Stack.Screen name='Introduction' component={Introduction} options={{ headerShown: false }} />
      </>
    )}
    </Stack.Navigator>
  )
}

export default AuthNavigator