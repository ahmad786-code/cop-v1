import React, { useEffect, useState, useRef, useCallback } from 'react'
import { StyleSheet, Text, View, ImageBackground, Button, Pressable, Image, FlatList, TouchableOpacity, Keyboard, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Bubble from '../components/Bubble'
import { TextInput } from 'react-native'
import { Color, FontFamily, FontSize } from '../theme'
import { useSelector } from 'react-redux'
import { createChat, sendTextMessage } from '../utils/actions/chatActions'

import ProfileImage from '../components/ProfileImage'
import { listenToUserStatus, monitorUserPresence } from '../utils/actions/percence'


const Chat = (props) => {
 
  const [chatUsers, setChatUsers] = useState([]);
  const [otherUserStatus, setOtherUserStatus] = useState(null);
  const userData = useSelector(state => state.auth.userData);
 
  const [messageText, setMessageText] = useState("");
  const [chatId, setChatId] = useState(props.route?.params?.chatId);

 

  const storedUsers = useSelector(state => state.users.storedUsers);
  const storedChats = useSelector(state => state.chats.chatsData);
  const chatMessages = useSelector(state => {
    if (!chatId) return [];

    const chatMessagesData = state.messages.messagesData[chatId];



    if (!chatMessagesData) return [];

    const messageList = [];
    for (const key in chatMessagesData) {
      const message = chatMessagesData[key];

      messageList.push({
        key,
        ...message
      });
    }

    return messageList;
  });


  const chatData = (chatId && storedChats[chatId]) || props.route?.params?.newChatData;

  const chatDataImage = useSelector(state => state.chats.chatsData[chatId])

  const getChatTitleFromName = () => {
    const otherUserId = chatUsers.find(uid => uid !== userData.userId);
    const otherUserData = storedUsers[otherUserId];


    if (otherUserData) {
      return otherUserData.userName

    }

    return null;
  }


  useEffect(() => {
    setChatUsers(chatData.users)
  }, [chatUsers])
  const sendMessage = useCallback(async () => {

    try {
      let id = chatId;
      if (!id) {
        // No chat Id. Create the chat
        id = await createChat(userData.userId, props.route.params.newChatData);
        setChatId(id);
      }

      await sendTextMessage(id, userData.userId, messageText);

      setMessageText("");
    } catch (error) {
      console.log(error);

    }
  }, [messageText, chatId]);

   


  const chatTitle = chatData.chatName ?? getChatTitleFromName();

  const otherUserId = chatData.users.find(uid => uid !== userData.userId);
  const otherUser = storedUsers[otherUserId];
  const image = otherUser.profilePicURL;

 
useEffect(() => {
  if (otherUserId) {
    const unsubscribe = listenToUserStatus(otherUserId, (status) => {
      setOtherUserStatus(status.online);
    });
    return () => unsubscribe(); // Ensure the unsubscribe function is called
  }
}, [otherUserId]);

  return (

    <ImageBackground source={require('../assets/img/Design.png')} resizeMode='cover' style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={{ backgroundColor: Color.colorLightslateblue, height: 109, }}>
          <SafeAreaView>
            <View style={{ flexDirection: 'row', marginLeft: 15, alignItems: 'center', marginTop: 10 }}>
              <TouchableOpacity style={{ padding: 10 }} onPress={() => props.navigation.goBack()}>
                <Image source={require('../assets/vectors/ChevronLeft.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => chatData.isGroupChat ? props.navigation.navigate("Group_Profile",{chatDataImage, chatId}) : props.navigation.navigate('User_Profile', { uid: chatData.users.find(uid => uid !== userData.userId) })} style={{ flexDirection: 'row', marginLeft: 16, columnGap: 12, alignItems: 'center' }}>

                <View>


                  <ProfileImage uri={  image} width={40} height={40} />


                </View>


                <View>
                  <Text style={{ color: '#fff', fontFamily: FontFamily.soraSemiBold, fontSize: 16 }}> {chatTitle}</Text>
                  <Text style={{ color: Color.colorGray_100, fontFamily: FontFamily.soraRegular, fontSize: 12 }}>{otherUserStatus ? 'Online' : 'Offline'}</Text>
                 
                </View>
              </TouchableOpacity>
              {chatData.isGroupChat && (
                <TouchableOpacity style={{ flex: 1, alignSelf: 'flex-end', alignItems: 'flex-end', padding: 10 }} onPress={() => props.navigation.navigate("Group_Setting", { chatId })}>
                  <Text style={{ color: '#fff' }}>Setting</Text>
                </TouchableOpacity>
              )}
            </View>
          </SafeAreaView>
        </View>


        <View style={{ flex: 1 }}>
          {chatId && <FlatList
            data={chatMessages}
            renderItem={(itemData) => {
              
              // const message = itemData.item
              const message = itemData.item;
             
              // const isOwnMessage = message.sentBy === userData.userId;

              // const messageType = isOwnMessage ? "myMessage" : "theirMessage";

              const sender = message.sentBy && storedUsers[message.sentBy]
             
               
              const name = sender && sender.userName
              
              const profilePicture = sender && sender.profilePicURL;
              console.log("profie", profilePicture);
               


              const isOwnMessage = message.sentBy === userData.userId;

              const messageType = isOwnMessage ? "myMessage" : "theirMessage";
              
              return <Bubble name={!chatData.isGroupChat || isOwnMessage ? undefined : name}  type={messageType}
                text={message.text}  isGroupChat={chatData.isGroupChat} profile={profilePicture} />
            }}
          />}

        </View>

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  >
          <View style={{ paddingHorizontal: 20, marginBottom: 40, marginTop: 18 }}>
            <View style={{ justifyContent: 'center', backgroundColor: Color.colorLightslateblue, height: 60, borderRadius: 12, paddingHorizontal: 15 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TextInput value={messageText}
                  onChangeText={(text) => setMessageText(text)} style={{ color: Color.colorWhite, flex: 1, flexShrink: 1, marginRight: 10 }} multiline={true} placeholder='Write Message here' placeholderTextColor={Color.colorGray_100} />

                <TouchableOpacity onPress={sendMessage}>
                  <View style={{ backgroundColor: Color.colorDarkslateblue, width: 36, height: 36, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
                    <Image source={require('../assets/img/Send.png')} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>


      <TouchableOpacity style={{ padding: 20, backgroundColor: Color.colorDarkslateblue, width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 100, position: 'absolute', bottom: 150, right: 10, zIndex: 999 }}  >
        <Image source={require('../assets/vectors/ChevronDown.png')} />
      </TouchableOpacity>



    </ImageBackground>
  )
}

export default Chat

const styles = StyleSheet.create({
  scrollToBottomButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  bubble: {
    margin: 10,
    height: 50,
    backgroundColor: '#ddd',
  },
});


 

 
