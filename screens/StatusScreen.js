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
  Button, FlatList,
  Picker,
  ActivityIndicator,
  Alert,
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
      isLoading: true,
      PickerValueHolder: ''

      // data: this.props.route.params

    };
  }
  componentDidMount() {
    return fetch('http://192.168.0.108:8000/fanction/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function () {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  GetPickerSelectedItemValue = () => {
    Alert.alert(this.state.PickerValueHolder);
  }
  render() {
    const { navigate } = this.props.navigation;

    const { data } = this.props.route.params;
    const { Loname } = this.props.route.params;
    const { money } = this.props.route.params;
    const { Fanction } = this.props.route.params;
    
    console.log(data)
      if (this.state.isLoading) {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <ActivityIndicator />
          </View>
        );
      }

    return (
      <SafeAreaView style={styles.container}>
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
        <Text
          style={{
            alignItems: "center",
            marginTop: 10,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          WASHING MACHINE
        </Text>
        

        <View style={styles.infoBoxWrapper2}></View>
          <View style={styles.categoryBtnTxt}>
        <Text style={styles.categoryBtnTxt1}>
          {data}</Text> 
        </View>
        <View style={styles.LoBtnTxt}>
        <Text style={styles.LoBtnTxt1}>
          {Loname}</Text>
        </View>
     
       

        <View style={styles.categoryContainer}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons style={styles.chipsIcon} name="washing-machine" size={50} color="#35A3A8"
            />
          </View>
    <Text style={styles.MBtnTxt1}>
          ราคา : {money} บาท </Text>     
</View>
      
      <View>
        <Text style={styles.headingText}>
          เลือกโหมดการซัก
        </Text>
        <View style={styles.container}>
          <Picker
            selectedValue={this.state.PickerValueHolder}

            onValueChange={(itemValue, itemIndex) => this.setState({ PickerValueHolder: itemValue })} >

            {this.state.dataSource.map((item, key) => (
              <Picker.Item label={item.Fanction_machine} value={item.Fanction_machine} key={key} />)
        
         )}

          </Picker>
          <View style={styles.BoxStatus}>
            <Text 
              style={{
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }} onPress={() => this.props.navigation.navigate('WashConfirm',{Fanction:this.state.PickerValueHolder,data,Loname,money})}>
              ชำระเงิน
            </Text> 

          </View>
          </View>
          </View>
        </SafeAreaView>
  );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  infoBoxWrapper2: {
    flexDirection: 'row',
    color: '#000',
    width: 380,
    height: 120,
    backgroundColor: '#3DB6BB',
    borderRadius: 10,
    marginRight: 6,
    marginLeft: 6,
    marginTop: 30,
    marginBottom: 30,
  },
  BoxStatus:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#000',
    width: 380,
    height: 50,
    backgroundColor: '#99d1c9',
    borderRadius: 10,
    marginRight:0,
    marginLeft:10,
    marginTop:25,
    marginBottom:0,
  },
  headingText: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:20,
    marginTop:50,
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
    marginRight: 0,
    marginLeft: 5,
    marginTop: 90,
  },
  chipsIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -4,
    marginBottom: 0,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: -125,
    marginBottom: 10,
  },
  categoryBtnTxt1: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 0,
    marginTop: 20,
    marginLeft: -265,
    color: '#000',
    fontWeight: 'bold',
  },
  LoBtnTxt1: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 0,
    marginTop: 60,
    marginLeft: 200,
    color: '#000',
    fontWeight: 'bold',
  },
  MBtnTxt1: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 0,
    marginTop: 120,
    marginLeft: 165,
    color: '#000',
    fontWeight: 'bold',
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 0,
    marginTop: -80,
    marginLeft: 0,
    color: '#de4f35',
    fontWeight: 'bold',
  },
  LoBtnTxt: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 0,
    marginTop: -150,
    marginLeft: 0,
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
