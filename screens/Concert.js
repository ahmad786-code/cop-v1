import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import CustomSearch from '../components/CustomSearch'

import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
 

import { FlatList } from 'react-native'
 
import { FontFamily, Color } from '../theme'

const data = new Array(10).fill(null).map((_, index) => ({
  id: String(index),
  name: `Sam Alvez Jon ${index + 1}`,
  description: 'Ipsum Dolor Sit Amet Cons Ectetur Feugiat.',
  date: '22 May',
  image: `https://via.placeholder.com/150/0000FF/808080?Text=Image${index + 1}`,
}));

const Concert = ({ navigation }) => {
  const renderArticalItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Concert_Detail', {
            item: item,
          })
        } style={{marginVertical:20}}>
        <ImageBackground source={require('../assets/img/concert.jpg')} imageStyle={{ borderRadius: 12 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 20, paddingRight: 10, paddingTop: 20, }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#fff' }}>Eleanor Pena</Text>
              <View style={{ flexDirection: 'row', columnGap: 4, alignItems: 'center' }}>
                <Image source={require('../assets/img/Location.png')} />
                <Text style={{ color: '#fff' }}>Syracuse, Connecticut</Text>
              </View>
            </View>
            <View style={{ width: 86, backgroundColor: Color.colorDarkslateblue, borderRadius: 64, alignItems: 'center', justifyContent: 'center', paddingVertical: 5, }}>
              <Text style={{ color: '#fff', fontFamily: FontFamily.soraRegular, fontSize: 12 }}>22 May, 23</Text>
            </View>
          </View>
          <View style={{ alignSelf: 'flex-end', marginTop: 100, paddingRight: 14 }}>
            <Image source={require('../assets/img/concertIcon.png')} />

          </View>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, .100)', paddingHorizontal: 23, paddingVertical: 13, borderBottomLeftRadius: 12, borderBottomRightRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 16, fontFamily: FontFamily.soraRegular, lineHeight: 25 }}>ipsum dolor sit amet co ns ectetur Feugiat...</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground source={require('../assets/img/Design.png')} resizeMode='cover' style={{ flex: 1 ,   }}>
      <SafeAreaView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5, marginBottom: 60 }}>
         
        </View>
      </SafeAreaView>

      <View style={{ paddingHorizontal: 25, marginBottom: 14 }}>
        <CustomSearch placeholder='Search Concert' />

      </View>

      <View style={{ paddingHorizontal: 25, flex:1 }}>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderArticalItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>


    </ImageBackground>
  )
}

export default Concert

const styles = StyleSheet.create({})