import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View, ImageBackground, Button, Pressable, Image, FlatList, TouchableOpacity, Keyboard, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Bubble from '../components/Bubble'
import { TextInput } from 'react-native'
import { Color, FontFamily, FontSize } from '../theme'
 

const Chat = ({ navigation, route }) => {
  const [messages, setMessages] = useState(Array.from({ length: 20 }, (_, index) => ({ id: index, text: `Message ${index + 1}` })));
  const [showButton, setShowButton] = useState(false);
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
  const { item } = route.params;

  const flatListRef = useRef();

  const scrollToBottom = () => {
  
      flatListRef.current?.scrollToEnd({ animated: false });
    
  };
  const handleScroll = ({ nativeEvent }) => {
    const isCloseToBottom = nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >= nativeEvent.contentSize.height - 50;
    setShowButton(!isCloseToBottom);
  };
 
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsOpen(true);
    });
    const hideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsOpen(false);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);
  return (
    <ImageBackground source={require('../assets/img/Design.png')} resizeMode='cover' style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={{ backgroundColor: Color.colorLightslateblue, height: 109, }}>
          <SafeAreaView>
            <View style={{ flexDirection: 'row', marginLeft: 15, alignItems: 'center', marginTop: 10 }}>
              <TouchableOpacity style={{padding:10}} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/vectors/ChevronLeft.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate(item.type === 'group' ? 'Group_Profile' : 'User_Profile')} style={{ flexDirection: 'row', marginLeft: 16, columnGap: 12, alignItems: 'center' }}>
                {item.type === 'group' ? (
                  <View>
                    <Image source={require('../assets/group.jpg')} style={{ width: 40, height: 40, borderRadius: 9, }} />
                    <View style={{ alignItems: 'flex-end', marginTop: -14 }}>
                      <View style={{ alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: 6, backgroundColor: Color.colorDarkslateblue, }}>

                        <Image style={{ width: 16, height: 16 }} source={require('../assets/vectors/GroupIcon.png')} />

                      </View>
                    </View>
                  </View>

                ) : (
                  <View>
                    <Image source={require('../assets/group.jpg')} style={{ width: 40, height: 40, borderRadius: 100, }} />
                  </View>
                )}

                <View>
                  <Text style={{ color: '#fff', fontFamily: FontFamily.soraSemiBold, fontSize: 16 }}>{item.title}</Text>
                  <Text style={{ color: Color.colorGray_100, fontFamily: FontFamily.soraRegular, fontSize: 12 }}>Online</Text>
                </View>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>


        <View style={{ flex: 1 }}>

          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              return (<Bubble />)
            }
            }
          
            ListHeaderComponent={
              <Text style={{ color: Color.colorGray_100, marginVertical: 23, alignSelf: 'center', fontWeight: '600', fontSize: 16 }}>
                Today
              </Text>

            }
            onScroll={handleScroll}
            nestedScrollEnabled={true}
            onContentSizeChange={ scrollToBottom}
            onLayout={  scrollToBottom}
           
          />
        </View>

        <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  >
          <View style={{ paddingHorizontal: 20, marginBottom: 40, marginTop: 18 }}>
            <View style={{ justifyContent: 'center', backgroundColor: Color.colorLightslateblue, height: 60, borderRadius: 12, paddingHorizontal: 15 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TextInput style={{ color: Color.colorWhite, flex: 1, flexShrink: 1, marginRight: 10 }} multiline={true} placeholder='Write Message here' placeholderTextColor={Color.colorGray_100} />

                <TouchableOpacity>
                  <View style={{ backgroundColor: Color.colorDarkslateblue, width: 36, height: 36, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
                    <Image source={require('../assets/img/Send.png')} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
      {showButton && (
     
          <TouchableOpacity style={{padding:20,  backgroundColor: Color.colorDarkslateblue, width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 100, position: 'absolute', bottom: 150, right: 10, zIndex: 999}} onPress={scrollToBottom}>
            <Image source={require('../assets/vectors/ChevronDown.png')} />
          </TouchableOpacity>

       
      )}
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