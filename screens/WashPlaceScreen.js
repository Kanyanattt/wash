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
    const response = await fetch('http://192.168.0.108:8000/location'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
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
          
          <Text
          style={{
            marginRight:180,
            marginTop:40,
            marginBottom:20,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          LOCATION
        </Text>
        
        </View>
        <View style={styles.mapIcon}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="map-marker" size={30} color="#F70606"  
           />
           </View>
       <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <View style={styles.infoBoxWrapper2}>
        <View style={styles.categoryIcon2}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="home-circle" size={70} color="#196A6A" 
            />
             </View>
          <Text style={styles.categoryBtnTxt1} onPress={() => this.props.navigation.navigate('WashChoose', {data: item.Location_ID,Loname: item.Location_name})}>
             {item.Location_name }</Text>
          
             
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
    borderRadius: 50,
    marginRight:0,
    marginLeft:20,
    marginTop:10,
    marginBottom:10,
  },
  infoBoxWrapper2: {
    flexDirection: 'row',
    color:'#000',
    width: 380,
    height: 120,
    backgroundColor: '#A6C6BE',
    borderRadius: 10,
    marginRight:6,
    marginLeft:5,
    marginTop:10,
    marginBottom:30,
    
  },
  mapIcon: {
    borderRadius: 50,
    marginRight:30,
    marginLeft:20,
    marginTop:-75,
    marginBottom:30,
  },
  categoryBtnTxt1: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginLeft:20,
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
    color:'#000'
  },

});
