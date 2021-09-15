import React, { useState } from 'react';
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
  Button, FlatList
} from 'react-native';
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper'
// import { NavigationContainer } from '@react-navigation/native';

import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';
import { route } from '../Api/server';


export default class WashPlaceScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
  });

  constructor(props) {
    //constructor to set default state  
    super(props);
    this.state = {
      data: '',
      Loname:'',
      money:'',
      ID: [],
      cou:''
      // data: this.props.route.params

    };
  }
  fetchData = async () => {
    //  console.log(route.params);
    // console.log(this.state.data);
    const response = await fetch(`http://192.168.0.108:8000/Location1/`); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const Wash_ID = await response.json();
    console.log(Wash_ID);
    this.setState({ ID: Wash_ID });
  }
  componentWillMount() {
    this.fetchData();

  }
 
  render() {
    const { navigate } = this.props.navigation;
    const { data } = this.props.route.params;
    const { Loname } = this.props.route.params;
    const { money } = this.props.route.params;
    const { cou } = this.state;
    console.log(cou)
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.container}>
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

              <Text
                style={{
                  marginRight: 180,
                  marginTop: 10,
                  marginBottom: 20,
                  alignSelf: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#000',
                }}>

              </Text>

            </View>
            <View style={styles.mapIcon}>
              <MaterialCommunityIcons style={styles.chipsIcon} name="map-marker" size={30} color="#F70606"
              />
              {/* <View style={styles.LoBtnTxt}> */}
        <Text style={{
            marginRight:90,
            marginTop:-30,
            marginBottom:10,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          {Loname}</Text>
        {/* </View> */}
            </View>
            <FlatList
              cou={this.state.cou}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>

                <View>
        <Text>{cou}</Text>
                </View>


              }
            /> 


            <FlatList
              data={this.state.ID}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>

                <View>
                  {item.Location_ID == data ?  <View>
                    
                  <View style={styles.categoryIcon2}>
                    <MaterialCommunityIcons style={styles.chipsIcon} name="washing-machine" size={50} color="#196A6A"
                    />
                  </View>


                  <View style={styles.layer}>
                    
                      <Text
                        style={{
                          marginRight: 10,
                          marginLeft: 230,
                          marginTop: -20,
                          alignSelf: 'center',
                          fontSize: 20,
                          color: '#000',
                        }}>
                        สถานะ : ว่าง
                      </Text>
                  </View>
                  <View style={styles.layer}>
                    
                      <Text
                        style={{
                          marginRight: 10,
                          marginLeft: 230,
                          marginTop: -70,
                          alignSelf: 'center',
                          fontSize: 20,
                          color: '#000',
                        }}>
                        ราคา : {item.Wash_Amount}บาท
                      </Text>
                  </View>
                  <Text style={styles.categoryBtnTxt1}>
                    {item.Wash_ID}</Text>
                </View>: null}
                 
                </View>


              }
            />



          </View>
  

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  categoryIcon2: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#DEDEDE',
    borderRadius: 50,
    marginRight: 250,
    marginLeft: 0,
  },
  layer: {
    marginRight: 6,
    marginLeft: 5,
    
  },
  mapIcon: {
    borderRadius: 50,
    marginRight: 30,
    marginLeft: 20,
    marginTop: -60,
    marginBottom: 30,
  },
  categoryBtnTxt1: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: -250,
    color: '#de4f35',
    fontWeight: 'bold',
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

});
