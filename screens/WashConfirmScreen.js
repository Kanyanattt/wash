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
import CountDown from 'react-native-countdown-component';


export default class WashPlaceScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
  });

  constructor(props) {
    //constructor to set default state  
    super(props);
    this.state = {
      ID: [],
      // data: this.props.route.params

    };
  }
  fetchData = async () => {
    //  console.log(route.params);
    // console.log(this.state.data);
    const response = await fetch(`https://wash-station.herokuapp.com/GetHW.php`); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
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
    const { Fanction } = this.props.route.params;

    console.log(Fanction)

    return (
      <SafeAreaView style={styles.container}>
<Text
          style={{
            alignItems: "center",
            marginTop: 30,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          WORKING...
        </Text>
        {/* <View style={styles.infoBoxWrapper2}></View> */}
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
<View style={styles.FoBtnTxt}>
        <Text style={styles.FoBtnTxt1}>
          {Fanction}</Text>
        </View>

        <FlatList
          data={this.state.ID}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
           
                
                <CountDown

                  size={50}
                  until={30}
                  digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#fff', marginTop: 200 }}
                  digitTxtStyle={{ color: '#000' }}
                  timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
                  separatorStyle={{ color: '#1CC625' }}
                  timeToShow={['S']}
                  timeLabels={{ s: item.State }}
                  showSeparator
                />

             
          }
        />




      </SafeAreaView>
    );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    marginTop: 80,
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
    marginTop: 80,
    marginLeft: -265,
    color: '#000',
    fontWeight: 'bold',
  },
  LoBtnTxt1: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 0,
    marginTop: 60,
    marginLeft: 180,
    color: '#000',
    fontWeight: 'bold',
  },
  FoBtnTxt1: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 0,
    marginTop: 85,
    marginLeft: 180,
    color: '#000',
    fontWeight: 'bold',
  },
  MBtnTxt1: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 0,
    marginTop: 165,
    marginLeft: 155,
    color: '#000',
    fontWeight: 'bold',
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 0,
    marginTop: 50,
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
  FoBtnTxt: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 0,
    marginTop: -150,
    marginLeft: 0,
    color: '#de4f35',
    fontWeight: 'bold',
  },
});
