import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Color, FontFamily, FontSize } from '../theme'

const UserList = ({ user }) => {
  return (
    <View style={styles.rootContainer}>
       
      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', columnGap: 12 }}>
        {
          user.type === 'group' ? (
            <View>
              <Image source={require('../assets/group.jpg')} style={{ width: 60, height: 60, borderRadius: 9, }} />
              <View style={{ alignItems: 'flex-end', marginTop: -10 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: 6, backgroundColor: Color.colorDarkslateblue, }}>

                  <Image style={{ width: 16, height: 16 }} source={require('../assets/vectors/GroupIcon.png')} />

                </View>
              </View>
            </View>
          ) : (
            <View>
              <Image source={require('../assets/pexels-andrea-piacquadio-733872.jpg')} style={{ width: 60, height: 60, borderRadius: 100, }} />
            </View>
          )
        }
        <View >
          <Text style={styles.userName}>{ user.title  }</Text>
          <Text style={styles.userMessage}>What do you think?</Text>
        </View>

        <View style={{ alignItems: 'flex-end', marginLeft: 25 }}>
          <Text style={{ color: Color.colorGray_100, marginBottom: 8 }}>05:51 am</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: 22, height: 22, borderRadius: 50, backgroundColor: Color.colorDarkslateblue }}>
            <Text style={{ color: Color.colorWhite, fontSize: 12, fontFamily: FontFamily.soraBold }}>10</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default UserList

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 26





  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,

  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  userName: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite
  },
  userMessage: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100
  },
  notificationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 8
  },
  time: {
    fontSize: FontSize.size_xsm,
    color: Color.colorGray_100
  },
  notificationBadge: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 22,
    height: 22,
    borderRadius: 50,
    backgroundColor: Color.colorDarkslateblue
  },
  notificationNumber: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xsm,
  }
})