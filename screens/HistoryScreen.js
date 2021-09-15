import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
  Button
} from 'react-native';
import {Avatar,Title,Caption,TouchableRipple,} from 'react-native-paper'
import { useTheme } from '@react-navigation/native';

import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';

const HistoryScreen = ({navigation}) => {
  const theme = useTheme();

  return (
 
      <SafeAreaView style={styles.container}>   
      <ScrollView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection:'row',marginTop: 30}}>
            <Avatar.Image
              source={{
                uri:'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
              }}
              size={90}
              />
              <View style={{marginLeft: 25}}>
                <Title style={styles.title, {
                  marginTop:15,
                  marginBottom: 3,
                }}>Lalisa Manoban</Title>
                <Caption style={styles.caption}>@Li_sa</Caption>
              </View>
          </View>
        </View>

      
        
       <View style={styles.cardsWrapper}>
         <Text
          style={{
            marginRight:200,
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000',
          }}>

          USING HISTORY
        </Text>
        <Text
          style={{
            marginRight:270,
            marginTop:20,
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000',
          }}>

          12/10/64
        </Text>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryIcon}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="washing-machine" size={50} color="#35A3A8"  
            />
          </View>
          <Text style={styles.categoryBtnTxt}
          onPress={() => navigation.navigate("Explore")}
          >หอพักลักษณานิเวศ 1</Text>
          
          <Text style={styles.cardDetails}>
          12/12/2020
            </Text>
            <Text style={styles.cardDetails1}>
          20 ฿
            </Text>
      </View>
      </View>

      <View style={styles.cardsWrapper}>
        <View style={styles.categoryContainer1}>
          <View style={styles.categoryIcon}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="washing-machine" size={50} color="#35A3A8" 
            />
          </View>
          <Text style={styles.categoryBtnTxt}
          onPress={() => navigation.navigate("WashPlace")}
          >หอพักลักษณานิเวศ 1</Text>
          <Text style={styles.cardDetails}>
          12/12/2020
            </Text>
            <Text style={styles.cardDetails1}>
          20 ฿
            </Text>
      </View>
      </View>
  
    </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  categoryContainer1: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#DEDEDE',
    borderRadius: 50,
    marginRight:0,
    marginLeft:-15,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    fontSize: 16,
    marginBottom: 30,
    marginLeft:30,
    color: '#de4f35',
    fontWeight: 'bold',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  cardDetails: {
    fontSize: 14,
    color: '#000',
    marginTop: 35,
    marginRight:120,
    marginLeft:-148,
  },
  cardDetails1: {
    fontSize: 14,
    color: '#000',
    marginTop:55,
    marginLeft:-195,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color:'#000'
  },
});
