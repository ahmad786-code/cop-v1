import { Dimensions, StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity,Image } from 'react-native'
import React from 'react'
 
import { Color, FontFamily, FontSize } from '../theme';

const { height, width } = Dimensions.get('window');

const ArticleDetails = ({ navigation }) => {

  return (

    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/img/Design.png')}>
      <ScrollView bounces={false}  showsVerticalScrollIndicator={false}>
       
          <ImageBackground source={require('../assets/DetailArti.png')} resizeMode='cover' imageStyle={{ borderBottomLeftRadius: 42, borderBottomRightRadius: 42, }} style={{ height: height * .60 }}>
            <View style={{ height: height * .60, borderBottomLeftRadius: 42, borderBottomRightRadius: 42, backgroundColor: 'rgba(0, 0, 0, .4)' }}>
          


            </View>
          </ImageBackground>

          <View style={{ paddingHorizontal: 25, bottom: 20 }}>

            <View style={{ backgroundColor: Color.colorDarkslateblue, width: 121, borderRadius: 64, alignItems: 'center', paddingVertical: 7, paddingHorizontal: 14, alignSelf: 'flex-end' }}>
              <Text style={{ color: '#fff', fontFamily: FontFamily.soraSemiBold, fontSize: 14 }}>Eleanor Pena</Text>

            </View>
          </View>
        
          <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10, paddingHorizontal: 25, marginBottom: 10 }}>
            <Text style={{ color: '#fff', fontSize: 20, fontFamily: FontFamily.soraSemiBold }}>Article Title</Text>
            <Text style={{ color: Color.colorDarkslateblue, fontFamily: FontFamily.soraRegular, fontSize: 15 }}>22 May</Text>
          </View>

          <View style={{ paddingHorizontal: 25 }}>
            <Text style={{ color: Color.colorGray_100, fontFamily: FontFamily.soraRegular, fontSize: 15 , lineHeight: 35 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla. Mi bibendum neque egestas congue. Magnis dis parturient montes nascetur ridiculus mus. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Augue eget arcu dictum varius duis at consectetur lorem. Ipsum consequat nisl vel pretium lectus quam id leo. Ultrices gravida dictum fusce ut. Amet porttitor eget dolor morbi. Cras sed felis eget velit aliquet sagittis id consectetur. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.
            </Text>

            <Text style={{ color: Color.colorGray_100, fontFamily: FontFamily.soraRegular, fontSize: 15,lineHeight: 35 }}>
            Lacus suspendisse faucibus interdum posuere lorem. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Ultrices in iaculis nunc sed. At tellus at urna condimentum mattis. Sem nulla pharetra diam sit. Nunc id cursus metus aliquam eleifend mi. Urna et pharetra pharetra massa massa. Quis lectus nulla at volutpat diam ut venenatis tellus in. Elementum integer enim neque volutpat ac tincidunt vitae semper. Auctor augue mauris augue neque gravida. Tortor id aliquet lectus proin nibh nisl. Ut consequat semper viverra nam libero justo laoreet sit amet.
            </Text>

          </View>

        </ScrollView>
      </ImageBackground>
    </View>

  )
}





export default ArticleDetails
const styles = StyleSheet.create({

})