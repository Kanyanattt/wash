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
import { Avatar, Title, Caption, TouchableRipple, } from 'react-native-paper'
import { useTheme } from '@react-navigation/native';


import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeScreen = ({ navigation }) => {
  const theme = useTheme();



  return (

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <Avatar.Image
              source={{
                uri: 'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
              }}
              size={90}
            />
            <View style={{ marginLeft: 25 }}>
              <Title style={styles.title, {
                marginTop: 15,
                marginBottom: 3,
              }}>Lalisa Manoban</Title>
              <Caption style={styles.caption}>@Li_sa</Caption>
            </View>
          </View>
        </View>

        <View style={styles.Searchbox}>

          <MaterialCommunityIcons style={styles.Icon} name="magnify" size={30} color="#C0B9B9"
          />


          <Text style={styles.categoryBtnTxt1}
            onPress={() => navigation.navigate("SearchScreen")}
          >Search</Text>

        </View>

        <View style={styles.infoBoxWrapper2}>
          <View style={styles.Image}>

            <Animatable.Image
              animation="bounceIn"
              duraton="1500"
              source={require('../assets/banners/Energy-Efficient-Washing-Machine-removebg-preview.png')}

              style={styles.logo}
              resizeMode="stretch"
            />

          </View>


          <Text style={{
            marginRight: 150,
            marginLeft: 15,
            marginBottom: 60,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>บริการเครื่องซักผ้า</Text>
          <View style={styles.infoBoxWash}>
            <Text style={{
              marginLeft: 15,
              marginBottom: 4,
              alignSelf: 'center',
              fontSize: 18,
              color: '#000',
            }}>ซักเลย</Text>
            <View style={styles.Iconnex1}>
              <MaterialCommunityIcons style={styles.chipsIcon} name="chevron-right" size={50} color="#fff"
                onPress={() => navigation.navigate("WashPlace")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
      <Text style={{
        marginLeft: 300,
        marginBottom: -150,
        marginTop: 115,
        alignSelf: 'center',
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
      }}>MY SHOP</Text>
      </View>
      <View style={styles.categoryIcon2}
     >
        <MaterialCommunityIcons style={styles.Icon1} name="shopping" size={30} color="#000"
         onPress={() => navigation.navigate("MyShop")}/>
      </View>
      
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  categoryBtnTxt1: {
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 40,
    marginTop: 40,
    marginRight: 40,
    marginLeft: 0,
    color: '#C0B9B9',
  },
  Icon: {
    marginTop: 25,
    marginBottom: 0,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  Icon1: {
    marginTop: 25,
    marginBottom: 0,
    marginTop: -10,
    marginRight: 10,
    marginLeft: 10,
  },
  Searchbox: {
    flexDirection: 'row',
    color: '#000',
    width: 380,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 8,
    marginLeft: 15,
    marginTop: 30,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#C0B9B9',


  },
  Iconnex1: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    marginRight: 10,
    marginLeft: 3,
    marginTop: 35,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: '#000'
  },
  categoryIcon2: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#9BD9D9',
    borderRadius: 50,
    marginRight: -300,
    marginTop: 50,
    marginBottom: 15,
    marginLeft: 0,
  },
  infoBoxWash: {
    flexDirection: 'row',
    color: '#000',
    width: 120,
    height: 35,
    backgroundColor: '#9BD9D9',
    borderRadius: 30,
    marginRight: 500,
    marginLeft: -320,
    marginBottom: 60,
    marginTop: 60,
  },
  infoBoxWrapper2: {
    flexDirection: 'row',
    color: '#000',
    width: 380,
    height: 120,
    backgroundColor: '#35A3A8',
    borderRadius: 10,
    marginRight: 6,
    marginLeft: 7,
    marginTop: 10,
    marginBottom: 30,

  },
  Image: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 160,
    height: 100,
    marginTop: -10,
    marginRight: -550,
  },

});
