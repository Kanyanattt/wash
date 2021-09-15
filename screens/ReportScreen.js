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
  Button, FlatList, AppRegistry, TextInput, Alert,
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




export default class In_DeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
    });
  constructor(props) {

    super(props)

    this.state = {

      TextInputLocationname: '',
      TextInputreport: '',
      TextInputWash_id: '',


    }

  }
  InsertDataToServer = () => {


    const { TextInputLocationname } = this.state;
    const { TextInputreport } = this.state;
    const { TextInputWash_id } = this.state;




    fetch('http://192.168.0.108:8000/report', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        Location_name: TextInputLocationname,

        report: TextInputreport,

        Wash_ID: TextInputWash_id,


      })

    }).then((response) => response.json())
      .then((responseJson) => {

        // Showing response message coming from server after inserting records.
        Alert.alert(JSON.stringify(responseJson));

      }).catch((error) => {
        console.error(error);
      });


  }
  deleteDataToServer = () => {


    const { TextInputLocationname } = this.state;
    const { TextInputreport } = this.state;
    const { TextInputWash_id } = this.state;



    fetch('http://192.168.0.108:8000/report', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        Location_name: TextInputLocationname,

        report: TextInputreport,

        Wash_ID: TextInputWash_id,



      })

    }).then((response) => response.json())
      .then((responseJson) => {

        // Showing response message coming from server after inserting records.
        Alert.alert(JSON.stringify(responseJson));

      }).catch((error) => {
        console.error(error);
      });


  }

  render() {
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
            </View>
            <View style={styles.MainContainer}>
              <Text
                style={{
                  marginRight: 320,
                  marginTop: 20,
                  marginBottom: 20,
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000',
                }}>
                ชื่อหอ
              </Text>
              <TextInput

                // Adding hint in Text Input using Place holder.
                placeholder="ชื่อหอ"

                onChangeText={TextInputLocationname => this.setState({ TextInputLocationname })}

                // Making the Under line Transparent.
                underlineColorAndroid='transparent'

                style={styles.TextInputStyleClass}
              />

              <Text
                style={{
                  marginRight: 215,
                  marginTop: 20,
                  marginBottom: 20,
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000',
                }}>
                รหัสเครื่อง(LXX-XX)
              </Text>
              <TextInput

                // Adding hint in Text Input using Place holder.
                placeholder="(LXX-XX)"

                onChangeText={TextInputWash_id => this.setState({ TextInputWash_id })}

                // Making the Under line Transparent.
                underlineColorAndroid='transparent'

                style={styles.TextInputStyleClass}
              />

              <Text
                style={{
                  marginRight: 300,
                  marginTop: 10,
                  marginBottom: 20,
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000',
                }}>
                ปัญหา
              </Text>
              <TextInput

                // Adding hint in Text Input using Place holder.
                placeholder="ปัญหา"

                onChangeText={TextInputreport => this.setState({ TextInputreport })}

                // Making the Under line Transparent.
                underlineColorAndroid='transparent'

                style={styles.TextInputStyleClass}
              />
              <View style={styles.BoxStatus}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#000',
                  }} onPress={this.InsertDataToServer}>
                 รายงาน
                </Text>

              </View>
            


            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    flex: 1,
    margin: 10
  },

  TextInputStyleClass: {

    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 0.5,
    // Set border Hex Color Code Here.
    borderColor: '#000',
    // Set border Radius.
    //borderRadius: 10 ,
  },
  container: {
    flex: 1,
  },
  BoxStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    width: 360,
    height: 50,
    backgroundColor: '#99d1c9',
    borderRadius: 10,
    marginRight: 0,
    marginLeft: 10,
    marginTop: 25,
    marginBottom: 0,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
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