import React, { useEffect } from 'react'
import { StyleSheet, View, ScrollView, Button, Pressable, Image, Text, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

import UserList from '../components/UserList'

import CustomSearch from '../components/CustomSearch'

import { Color, FontFamily } from '../theme'
import { users } from '../assets/user'
import { useSelector } from 'react-redux'

const Inbox = (props) => {
  const { top } = useSafeAreaInsets()

  const selectedUser = props.route?.params?.selectedUserId;
   
  const selectedUserList = props.route?.params?.selectedUsers;
  const chatName = props.route?.params?.chatName;

  const userData = useSelector(state => state.auth.userData);
  const storedUsers = useSelector(state => state.users.storedUsers);
 
  const userChats = useSelector(state => {
    const chatsData = state.chats.chatsData;
    return Object.values(chatsData).sort((a, b) => {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
  });

  useEffect(() => {
    if (!selectedUser && !selectedUserList) {
      return;
    }
  
    let chatData;
    let navigationProps;
  
    if (selectedUser) {
      chatData = userChats.find(cd => !cd.isGroupChat && cd.users.includes(selectedUser));
    }
  
    if (chatData) {
      navigationProps = { chatId: chatData.key };
    } else {
      const chatUsers = selectedUserList || [selectedUser];
      if (!chatUsers.includes(userData.userId)) {
        chatUsers.push(userData.userId);
      }
  
      navigationProps = {
        newChatData: {
          users: chatUsers,
          isGroupChat: selectedUserList !== undefined,
          ...(selectedUserList && { chatName }) // Only add chatName for group chats
        }
      };
    }
   
    props.navigation.navigate("Chat", navigationProps);
  
  }, [props.route?.params,]);
  useEffect(() => {
    if (!selectedUser) {
      return;
  }
  
  const chatUsers = [selectedUser, userData.userId];

  const navigationProps = {
      newChatData: { users: chatUsers }
  }
    props.navigation.navigate("Chat", navigationProps);
  },[props.route?.params])

  return (
    <View style={{ justifyContent: 'center', flex: 1, paddingBottom: 10 }}  >


      <SafeAreaView style={{ paddingHorizontal: 25, marginTop: top + 30 }}>
        <CustomSearch placeholder='Search User' />

      </SafeAreaView>

      <Pressable style={{ position: 'absolute', zIndex: 10, bottom: 100, right: 10 }} onPress={() => props.navigation.navigate("NewChat")}>


        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: Color.colorDarkslateblue, width: 60, height: 60, borderRadius: 100 }}>
          <Image source={require("../assets/app_icon/addChat.png")} style={{ width: 17.45, height: 17.43 }} />
        </View>


      </Pressable>

      <View style={{ paddingHorizontal: 25 }}>
        <TouchableOpacity onPress={() => props.navigation.navigate("NewChat", { isGroupChat: true })}>
          <Text style={{ color: Color.colorDarkslateblue, fontSize: 17, marginTop: 10 }}>New Group</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={userChats}
        renderItem={(itemData) => {
          const chatData = itemData.item;
          const chatId = chatData.key;
          const isGroupChat = chatData.isGroupChat
          let title = ""
          const subTitle = chatData.latestMessageText || "New chat";
          let image = ""

          if(isGroupChat) {
            title = chatData.chatName
            image = chatData?.chatImage

          } else {
            const otherUserId = chatData.users.find(uid => uid !== userData.userId);
            const otherUser = storedUsers[otherUserId];
  
            if (!otherUser) return;
  
              title = `${otherUser.userName}`;
           
              image = otherUser.profilePicURL;
          }

          return <UserList
            isGroupChat={chatData.isGroupChat}
            title={title}
            subTitle={subTitle}
            profile={image}
            onPress={() => props.navigation.navigate("Chat", { chatId })}
          />
        }}
      />




    </View>
  )
}

export default Inbox

const styles = StyleSheet.create({})