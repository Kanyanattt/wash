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


export default class PlaceAmount extends React.Component{
  static navigationOptions= ({navigation}) =>({
});  
constructor(props) {  
  //constructor to set default state  
  super(props);  
  this.state = {  
      data: '',  
      Loname: '',
      cou:''
  };   
}
fetchData = async () => {
  //  console.log(route.params);
  // console.log(this.state.data);
  const response = await fetch(`http://192.168.0.108:8000/location/`); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
  const response2 = await fetch(`http://192.168.0.108:8000/location3/`); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
  const Count = await response2.json();
  const Location_name = await response.json();
  console.log(Location_name);
  console.log(Count);
  this.setState({ data: Location_name });
  this.setState({ cou: Count });
}
componentWillMount() {
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
            marginRight:240,
            marginTop:40,
            marginBottom:20,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          COUNT:
        </Text>
        
        </View>
        
       <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <View>
        <View style={styles.categoryIcon2}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="home-circle" size={70} color="#196A6A" 
            />
             </View>
          <Text style={styles.categoryBtnTxt1} onPress={() => this.props.navigation.navigate('WashAmount', {data: item.Location_ID,Loname: item.Location_name,money: item.Wash_Amount})}>
             {item.Location_name }</Text>
          
             
        </View>

        } 
      />
      <FlatList
        cou={this.state.cou}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <View>
        
          <Text>
             {item.total}</Text>
          
             
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
