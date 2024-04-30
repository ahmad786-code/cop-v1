import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View, Text, FlatList, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'

import { FontSize, Color, FontFamily } from '../theme'

import { SafeAreaView } from 'react-native-safe-area-context';


const data = new Array(10).fill(null).map((_, index) => ({
  id: String(index),
  name: `Sam Alvez Jon ${index + 1}`,
  description: 'Ipsum Dolor Sit Amet Cons Ectetur Feugiat.',
  date: '22 May',
  image: `https://via.placeholder.com/150/0000FF/808080?Text=Image${index + 1}`,
}));


const ENTRIES = [

  {
    id: '76ytytt',
    title: '08# Trending',
    date: '29 May, 2023',
    location: 'Wilshire Blvd. Beverly Grove',
    uri: 'https://picsum.photos/200/300?random=8'
  },
  {
    id: '17ytyty',
    title: '09# Trending',
    date: '30 May, 2023',
    location: 'Washington Blvd. Culver City',
    uri: 'https://picsum.photos/200/300?random=9'
  },
  {
    id: '13dddd',
    title: '10# Trending',
    date: '31 May, 2023',
    location: 'Melrose Ave. Fairfax',
    uri: 'https://picsum.photos/200/300?random=10'
  }
];
const { height, width } = Dimensions.get('window');

const Home = ({ navigation }) => {
  const [flatData, setData] = useState(ENTRIES)
  const [currentIndex, setCurrentIndex] = useState(0)


  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/img/Design.png')} resizeMode='cover' style={{ flex: 1 }}>
        <SafeAreaView bounces={false}  >
        
          <View style={{ paddingHorizontal: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, marginBottom: 60 }}>
            
          </View>
        </SafeAreaView>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: width }}>
            <ScrollView
              style={{ height: height * '.25', }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              onScroll={e => {
                const x = e.nativeEvent.contentOffset.x;
                setCurrentIndex((x / width).toFixed(0));
              }}
              pagingEnabled={true}
              scrollEventThrottle={16}
            >
              {flatData.map((item, index) => (

                <View key={index} style={{ width: width, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 25 }}>

                  <ImageBackground
                    source={{ uri: item.uri }}
                    style={styles.imageBackground}
                    imageStyle={styles.image}
                  >


                    <Text style={{ position: 'absolute', top: 19, left: 20, backgroundColor: '#783F8E', height: 31, width: 121, lineHeight: 31, textAlign: 'center', borderRadius: 64, fontSize: 14, fontFamily: FontFamily.soraSemiBold, color: '#fff' }}>{item.title}</Text>

                    <View style={{ position: 'absolute', bottom: 20, left: 20 }}>
                      <Text style={{ color: 'white', fontSize: 16, fontFamily: FontFamily.soraRegular }}>{item.date}</Text>
                      <Text style={{ color: 'white', fontSize: 16, fontFamily: FontFamily.soraRegular }}>{item.location}</Text>

                    </View>
                  </ImageBackground>
                </View>
              ))}
            </ScrollView>
            <View style={{ flexDirection: 'row', width: width, justifyContent: 'center', alignItems: 'center', top: 23, marginBottom: 23 }}>
              {flatData.map((item, index) => (
                <View key={item.index} style={
                  {


                    width: currentIndex == index ? 20 : 10,
                    height: 8,
                    borderRadius: 50,
                    marginLeft: 5,
                    backgroundColor: currentIndex == index ? '#783F8E' : '#783F8E'
                  }
                }
                />
              ))}
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 25, marginTop: 23, marginBottom: 17 }}>
            <Text style={{ color: Color.colorWhite, fontSize: 20, fontFamily: FontFamily.soraSemiBold }}>Articles</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Articale')}>
              <Text style={{ color: Color.colorDarkslateblue, fontSize: 16, fontFamily: FontFamily.soraSemiBold }}>View more</Text>
            </TouchableOpacity>
          </View>

          <View style={{ paddingHorizontal: 20 }}>
            {data.map((item, index) => (
              <View key={item.index} style={{ flexDirection: 'row', alignItems: 'center',   columnGap: 20 , marginVertical: 20,  }}>
                <Image style={{ width: 109, height: 109, borderRadius: 12 }} source={require('../assets/pexels-andrea-piacquadio-733872.jpg')} />

                <View style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', rowGap: 4, width: 200}}>
                  <Text style={{ color: '#fff', fontSize: 18, fontFamily:FontFamily.soraRegular }}> Sam alvez jon </Text>
                  <Text style={{ color: Color.colorGray_100, fontFamily:FontFamily.soraRegular }}>ipsum dolor sit amet cons ectetur Feugiat.</Text>
                  <Text style={{ color: Color.colorDarkslateblue ,fontFamily:FontFamily.soraRegular}}>22 May</Text>
                </View>
              </View>
            ))}
          </View>

        </ScrollView>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({

  imageBackground: {
    width: '100%',
    height: '100%',

  },
  image: {
    borderRadius: 20,
  },
  articlesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 17,
    paddingHorizontal: 25
  },
  articles: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.soraSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  viewMore: {

    color: Color.colorDarkslateblue,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.soraSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  articlesParent: {
    top: 23,
    flexDirection: "row",
    paddingHorizontal: 25,
    zIndex: 1
  },

  oTracedIcon: {
    width: 24,
    height: 26,
  },
  home1: {
    marginLeft: 139,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    textTransform: "capitalize",
  },
  vectorIcon: {
    width: 16,
    height: 16,
    marginLeft: 139,
  },
  oTracedParent: {
    top: 59,
    flexDirection: "row",
  },
})

export default Home