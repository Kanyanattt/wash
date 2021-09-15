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
  Button,FlatList
} from 'react-native';
import {Avatar,Title,Caption,TouchableRipple} from 'react-native-paper'
// import { NavigationContainer } from '@react-navigation/native';

import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';


export default class WashPlaceScreen extends React.Component{
  static navigationOptions= ({navigation}) =>({
});  
constructor(props) {  
  //constructor to set default state  
  super(props);  
  this.state = {  
      data: '',  
      Loname: '',
  };   
}
  fetchData= async()=>{
    const response = await fetch('http://192.168.0.108:8000/report1'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const Location_name = await response.json();
    this.setState({data: Location_name});
  }
  componentWillMount(){
    this.fetchData();
  
}

render() {
  const { navigate } = this.props.navigation;
  return (
    <SafeAreaView style={styles.container}>   
    <ScrollView style={styles.container}>
      <View style={styles.container}>
      <View style={styles.userInfoSection}>
        </View>
       <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <View style={styles.infoBoxWrapper2}>
          <Text style={styles.categoryBtnTxt1}>
             {item.Location_name }</Text> 
             <Text
          style={{
            marginRight:0,
            marginLeft:-170,
            marginTop:40,
            marginBottom:20,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
         {item.Wash_ID}
        </Text>
        <Text
          style={{
            marginRight:0,
            marginLeft:-40,
            marginTop:100,
            marginBottom:20,
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FF0023',
          }}>
         ปัญหา: {item.report}
        </Text>
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
  infoBoxWrapper2: {
    flexDirection: 'row',
    color:'#000',
    width: 380,
    height: 120,
    backgroundColor: '#E4DBEE',
    borderRadius: 10,
    marginRight:6,
    marginLeft:5,
    marginTop:10,
    marginBottom:30,
    
  },
  categoryBtnTxt1: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 50,
    marginLeft:20,
    color: '#000',
    fontWeight: 'bold',
  },

});
