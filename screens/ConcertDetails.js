import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
 

import { Color, FontFamily, FontSize } from '../theme';

import SubmitButton from '../components/SubmitButton';




const content = 'Lorem ipsum dolor sit amet cons ectetur. Feugi at sed a dictum neq ue duis rhoncus integer eti am ha bitasse. Faucibus tellus risus iacu lis ore m ipsum dolor...  Faucibus tellus risus iacu lis ore m ipsum dolor Lorem ipsum dolor sit amet cons ectetur. Feugi at sed a dictum neq ue duis rhoncus integer eti am ha bitasse. Faucibus tellus risus iacu lis ore m ipsum dolor...  Faucibus tellus risus iacu lis ore m ipsum dolor Lorem ipsum dolor sit amet cons ectetur. Feugi at sed a dictum neq ue duis rhoncus integer eti am ha bitasse. Faucibus tellus risus iacu lis ore m ipsum dolor...  Faucibus tellus risus iacu lis ore m ipsum dolor'
const ConcertDetails = ({ navigation }) => {
 
  const [textShown, setTextShown] = useState(false);
  const {height} = useWindowDimensions()
  return (
    <>

      <ImageBackground source={require('../assets/img/Design.png')} resizeMode='cover' style={{ flex: 1 }}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <ImageBackground source={require('../assets/ConcertDetailImg.jpg')} resizeMode='cover' style={{ width: '100%', height: height * .4, overflow: 'hidden', borderBottomEndRadius: 42, borderBottomStartRadius: 42 }}>

          <View style={styles.overlay} >
         
          </View>
        </ImageBackground>
        <View style={{ alignItems: 'flex-end', marginRight: 25, marginTop: -20 }}>
          <View style={{ backgroundColor: Color.colorDarkslateblue, width: 121, height: 31, borderRadius: 64, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: FontSize.size_sm, }}>Eleanor Pena</Text>
          </View>
        </View>
      
          <View style={{ flexDirection: 'column', marginHorizontal: 20 }}>
            <View style={styles.concertConatiner}>
              <View style={styles.concertBox}>
                <View style={styles.concertDate}>
                  <Text style={styles.title}>Date</Text>
                  <Text style={styles.subTitle}>10 Jan 2023</Text>
                </View>
              </View>
              <View style={styles.concertBox}>
                <View style={styles}>
                  <Text style={styles.title}>City</Text>
                  <Text style={styles.subTitle}>Inglewood</Text>
                </View>
              </View>
              <View style={styles.concertBox}>
                <View style={styles.concertDate}>
                  <Text style={styles.title}>Venue</Text>
                  <Text style={styles.subTitle}>Connecticut</Text>
                </View>
              </View>
            </View>

            <View style={styles.aboutContainer}>
              <Text style={styles.aboutTitle}>About</Text>
              <View style={styles.textContainer}>

                <Text style={styles.aboutContent} numberOfLines={textShown ? undefined : 3}>{content}</Text>
                <TouchableOpacity onPress={() => setTextShown(!textShown)}>
                  <Text style={styles.readMore}>
                    {textShown ? 'See less' : 'See more'}
                  </Text>
                </TouchableOpacity>

              </View>
            </View>


            <Text style={{ color: '#fff', fontSize: 20, marginBottom: 6 }}>Eentry conditions</Text>
            <View style={{ flexDirection: 'column', rowGap: 5 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                <View style={{ width: 5, height: 5, backgroundColor: Color.colorGray_100 }} />
                <Text style={{ color: Color.colorGray_100, fontSize: FontSize.size_base }}>500 places available</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                <View style={{ width: 5, height: 5, backgroundColor: Color.colorGray_100 }} />
                <Text style={{ color: Color.colorGray_100, fontSize: FontSize.size_base }}>500 places available</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                <View style={{ width: 5, height: 5, backgroundColor: Color.colorGray_100 }} />
                <Text style={{ color: Color.colorGray_100, fontSize: FontSize.size_base }}>500 places available</Text>
              </View>

            </View>

          </View>

          <View style={{ alignItems: 'center', flex: 1, marginVertical: 10, }}>
            <SubmitButton title='Participate' onPress={() => navigation.navigate('Participate')} />

          </View>
        </ScrollView>


      </ImageBackground>
    </>
  )
}





export default ConcertDetails
const styles = StyleSheet.create({
  overlay: {

    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .3)',
  },
  concertConatiner: {
    marginTop: 48,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 10
  },
  concertBox: {

    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 7,
    padding: 12


  },
  aboutContainer: {
    marginBottom: 22
  },
  title: {
    color: Color.colorWhite
  },
  subTitle: {
    color: Color.colorDarkslateblue
  },

  aboutTitle: {
    marginBottom: 6,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite
  },

  aboutContent: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
  },
  readMore: {
    color: Color.colorDarkslateblue,
    fontSize: FontSize.size_base
  }
})