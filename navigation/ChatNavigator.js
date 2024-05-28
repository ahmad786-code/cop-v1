import React,{useEffect, useState} from 'react';
import { createStackNavigator, } from '@react-navigation/stack';
import { NewChat, UserProfile,GroupProfile, Inbox, ReportUser, ChatSetting } from '../screens';
import { Color, FontFamily } from '../theme';
import { Image, TouchableOpacity, View,ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { getFirebaseApp } from "../utils/firebaseHalper";
  import { child, get, getDatabase, off, onValue, ref } from "firebase/database";
 
import { setChatsData } from "../store/chatSlice";
import { setStoredUsers } from '../store/userSlice';
import { setChatMessages } from '../store/messagesSlice';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const Stack = createStackNavigator();



const ChatNavigator = () => {
 
const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const userData = useSelector(state => state.auth.userData);
 
 
 const storedUsers = useSelector(state => state.users.storedUsers)
  
 console.log(storedUsers);
 
//  useEffect(() => {

//   console.log("Subscribing to firebase listeners");

//   const app = getFirebaseApp();
//   const dbRef = ref(getDatabase(app));
//   const userChatsRef = child(dbRef, `userChats/${userData.userId}`);
//   const refs = [userChatsRef];

//   onValue(userChatsRef, (querySnapshot) => {
//     const chatIdsData = querySnapshot.val() || {};
//     const chatIds = Object.values(chatIdsData);

//     const chatsData = {};
//     let chatsFoundCount = 0;

//     for (let i = 0; i < chatIds.length; i++) {
//       const chatId = chatIds[i];
//       const chatRef = child(dbRef, `chats/${chatId}`);
//       refs.push(chatRef);

//       onValue(chatRef, (chatSnapshot) => {
//         chatsFoundCount++;
        
//         const data = chatSnapshot.val();

//         if (data) {
//           data.key = chatSnapshot.key;

//           data.users.forEach(userId => {
//             if (storedUsers[userId]) return;

//             // const userRef = child(dbRef, `users/${userId}`);
//             const app = getFirebaseApp();
//          const db = getFirestore(app);
//             const userRef = doc(db, "users", userId);
//             get(userRef)
//             .then(userSnapshot => {
//               const userSnapshotData = userSnapshot.val();
//               dispatch(setStoredUsers({ newUsers: { userSnapshotData } }))
//             })

//             refs.push(userRef);
//           })

//           chatsData[chatSnapshot.key] = data;
//         }

//         if (chatsFoundCount >= chatIds.length) {
//           dispatch(setChatsData({ chatsData }));
//           setIsLoading(false);
//         }
//       })

//       const messagesRef = child(dbRef, `messages/${chatId}`);
//       refs.push(messagesRef);

//       onValue(messagesRef, messagesSnapshot => {
//         const messagesData = messagesSnapshot.val();
//         dispatch(setChatMessages({ chatId, messagesData }));
//       })

//       if (chatsFoundCount == 0) {
//         setIsLoading(false);
//       }
//     }

//   })

//   return () => {
//     console.log("Unsubscribing firebase listeners");
//     refs.forEach(ref => off(ref));
//   }
 
   
 
// }, []);
 
useEffect(() => {
  console.log("Subscribing to firebase listeners");

  const app = getFirebaseApp();
  const dbRef = ref(getDatabase(app));
  const userChatsRef = child(dbRef, `userChats/${userData.userId}`);
  const refs = [userChatsRef];
  const db = getFirestore(app); // Firestore instance should be created outside the loop

  onValue(userChatsRef, (querySnapshot) => {
    const chatIdsData = querySnapshot.val() || {};
    const chatIds = Object.values(chatIdsData);

    const chatsData = {};
    let chatsFoundCount = 0;

    chatIds.forEach(chatId => {
      const chatRef = child(dbRef, `chats/${chatId}`);
      refs.push(chatRef);

      onValue(chatRef, (chatSnapshot) => {
        chatsFoundCount++;
        const data = chatSnapshot.val();

        if (data) {
          data.key = chatSnapshot.key;

          const userPromises = data.users.map(userId => {
            if (storedUsers[userId]) return Promise.resolve();

            const userRef = doc(db, "users", userId);
            return getDoc(userRef)
              .then(userSnapshot => {
                if (userSnapshot.exists()) {
                  const userSnapshotData = userSnapshot.data();
                  dispatch(setStoredUsers({ newUsers: { [userId]: userSnapshotData } }));
                }
              })
              .catch(error => {
                console.error(`Error fetching user data: ${error}`);
              });
          });

          Promise.all(userPromises).then(() => {
            chatsData[chatSnapshot.key] = data;

            if (chatsFoundCount >= chatIds.length) {
              dispatch(setChatsData({ chatsData }));
              setIsLoading(false);
            }
          });
        }

        if (chatsFoundCount === 0) {
          setIsLoading(false);
        }
      });

      const messagesRef = child(dbRef, `messages/${chatId}`);
      refs.push(messagesRef);

      onValue(messagesRef, messagesSnapshot => {
        const messagesData = messagesSnapshot.val();
        dispatch(setChatMessages({ chatId, messagesData }));
      });
    });
  });

  return () => {
    console.log("Unsubscribing firebase listeners");
    refs.forEach(ref => off(ref));
  };
}, [dispatch, userData.userId, storedUsers]);


if (isLoading) {
  <View style={{justifyContent:'center', alignItems:'center'}}>
    <ActivityIndicator size={'large'} color={Color.colorDarkslateblue} />
  </View>
}
 

  
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

<Stack.Screen name="NewChat" component={NewChat} options={({route}) => ({
              title: route?.params?.isGroupChat ? 'Add Participta' :  'New Chat',
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
      


      <Stack.Screen name="Group_Setting" component={ChatSetting} 
            options={({ navigation }) => ({
              title: 'Group Setting',
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
        </Stack.Navigator>
    )
}

export default ChatNavigator