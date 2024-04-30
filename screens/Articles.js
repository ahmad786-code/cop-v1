import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import CustomSearch from '../components/CustomSearch';
import { Color, FontFamily, FontSize } from '../theme';
import ArticleCard from '../components/ArticleCard';

import { FlatList } from 'react-native';




const { height, width } = Dimensions.get('window');

const data = new Array(10).fill(null).map((_, index) => ({
    id: String(index),
    name: `Sam Alvez Jon ${index + 1}`,
    description: 'Ipsum Dolor Sit Amet Cons Ectetur Feugiat.',
    date: '22 May',
    image: `https://via.placeholder.com/150/0000FF/808080?Text=Image${index + 1}`,
}));

const Articles = ({ navigation }) => {

    const renderArticalItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Articale_Detail', {
                        item: item,
                    })
                } style={{ marginHorizontal: 25 }}>
                <ImageBackground source={require('../assets/FeatureArticale.png')} style={{ height: 220, width: 250 }} imageStyle={{ borderRadius: 12 }}>

                    <View style={{ justifyContent: 'flex', justifyContent: 'space-between', height: '100%' }}>
                        <View style={{ paddingVertical: 12, paddingHorizontal: 13 }}>
                            <View style={{ width: 86, backgroundColor: Color.colorDarkslateblue, borderRadius: 64, paddingVertical: 5, paddingHorizontal: 11, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 12, fontFamily: FontFamily.soraRegular, color: '#fff' }}>22 May, 23</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', paddingHorizontal: 23, paddingVertical: 13, borderBottomLeftRadius: 12, borderBottomRightRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 16, fontFamily: FontFamily.soraRegular, lineHeight: 25 }}>ipsum dolor sit amet co ns ectetur Feugiat...</Text>
                        </View>
                    </View>

                </ImageBackground>
            </TouchableOpacity>
        );
    };


    return (

        <View style={{ flex: 1, }}>
            <ImageBackground source={require('../assets/img/Design.png')} resizeMode='cover' style={{ flex: 1 }}>

                <SafeAreaView>
                 
                    <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30, marginBottom: 24 }}>
                      
                    </View>
                </SafeAreaView>
                <View style={{ paddingHorizontal: 25, marginBottom: 24 }}>
                    <CustomSearch placeholder='Search articles' />

                </View>

                <ScrollView  showsVerticalScrollIndicator={false} bounces={false} >

                <Text style={{ color: Color.colorWhite, fontSize: 20, fontFamily: FontFamily.soraSemiBold, marginBottom: 10, paddingHorizontal: 25 }}>Featured Articles</Text>


                    <View style={{ paddingHorizontal: 25, marginBottom:24 }}>
                        <FlatList
                            data={data}
                            renderItem={renderArticalItem}
                            horizontal
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>

                    <Text style={{ color: Color.colorWhite, fontSize: 20, fontFamily: FontFamily.soraSemiBold, marginBottom: 17, paddingHorizontal: 25 }}>Recommended for you</Text>
                    


                    <View style={{ paddingHorizontal: 20 }}>
                        {data.map((item, index) => (
                            <TouchableOpacity  onPress={() =>
                                navigation.navigate('Articale_Detail', {
                                    item: item,
                                })
                            }>
                                <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', columnGap: 20, marginVertical: 20, }}>
                                    <Image style={{ width: 109, height: 109, borderRadius: 12 }} source={require('../assets/pexels-andrea-piacquadio-733872.jpg')} />

                                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', rowGap: 4, width: 200 }}>
                                        <Text style={{ color: '#fff', fontSize: 18, fontFamily: FontFamily.soraRegular }}> Sam alvez jon </Text>
                                        <Text style={{ color: Color.colorGray_100, fontFamily: FontFamily.soraRegular }}>ipsum dolor sit amet cons ectetur Feugiat.</Text>
                                        <Text style={{ color: Color.colorDarkslateblue, fontFamily: FontFamily.soraRegular }}>22 May</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>



    )
}

export default Articles

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        width: '80%',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: 109,
        height: 109,
        borderRadius: 12,
        marginRight: 10,
    },
    textContainer: {
        flexDirection: 'column',
        rowGap: 2,
        justifyContent: 'center',
        marginHorizontal: 18
    },
    name: {
        fontSize: 18,
        fontFamily: FontFamily.soraRegular,
        color: 'white',
    },
    description: {
        fontSize: 14,
        color: 'white',
        fontFamily: FontFamily.soraRegular,
    },
    date: {
        fontSize: 12,
        fontFamily: FontFamily.soraRegular,
        color: Color.colorDarkslateblue,
    },
})