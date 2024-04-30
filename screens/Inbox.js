import React from 'react'
import { StyleSheet, View, ScrollView, Button, Pressable, Image, Text } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
 
import UserList from '../components/UserList'

import CustomSearch from '../components/CustomSearch'

import { Color, FontFamily } from '../theme'
import { users } from '../assets/user'

const Inbox = ({ navigation }) => {
const {top} = useSafeAreaInsets()
  return (
    <View style={{ justifyContent: 'center', flex:1, paddingBottom: 10  }}  >
      

      <SafeAreaView style={{ paddingHorizontal: 25, marginTop: top + 30 }}>
        <CustomSearch placeholder='Search User' />

      </SafeAreaView>
      
        <ScrollView bounces={false} >
          {users.map((user => (
            <Pressable key={user.id} onPress={() => navigation.navigate('Chat', {item: user})}>
              <UserList  user={user} />
            </Pressable>
          )))}
        </ScrollView>
     



    </View>
  )
}

export default Inbox

const styles = StyleSheet.create({})