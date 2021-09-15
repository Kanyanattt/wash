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


export default class MyShopScreen extends React.Component {
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
    

    
    render() {
        const { navigate } = this.props.navigation;
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
                <View>
      </View>
      <View style={styles.categoryIcon2}
     >
        <MaterialCommunityIcons style={styles.Icon1} name="wrench" size={30} color="#000"
         onPress={() => navigate("WashReport")}/>
      </View>



                <View style={styles.infoBox}>
                    <View style={styles.infoBoxWrapper1}>
                        <MaterialCommunityIcons style={styles.chipsIcon1} name="graphql" size={100} color="#fff"
                        />
                        <Text
                            style={{
                                alignItems: "center",
                                marginTop: 120,
                                marginLeft: -95,
                                alignSelf: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000',
                            }}>
                            การใช้งาน
                        </Text>
                    </View>
                    <View style={styles.infoBoxWrapper2}>
                        <MaterialCommunityIcons style={styles.chipsIcon1} name="arrow-up-circle" size={50} color="#fff"
                        />
                        <MaterialCommunityIcons style={styles.chipsIcon2} name="arrow-down-circle" size={50} color="#fff"
                        />
                        <Text
                            style={{
                                alignItems: "center",
                                marginTop: 92,
                                marginLeft: -81,
                                alignSelf: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000',
                            }} onPress={() => navigate("In_De")}>
                            เพิ่ม/ลด
                        </Text>
                        <Text
                            style={{
                                alignItems: "center",
                                marginTop: 135,
                                marginLeft: -90,
                                alignSelf: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000',
                            }}>
                            เครื่องซักผ้า
                        </Text>

                    </View>
                    <View style={styles.infoBoxWrapper3}>
                        <MaterialCommunityIcons style={styles.chipsIcon1} name="wallet" size={90} color="#fff"
                        />
                        <Text
                            style={{
                                alignItems: "center",
                                marginTop: 120,
                                marginLeft: -70,
                                alignSelf: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000',
                            }}>
                            รายได้
                        </Text>
                    </View>

                    <View style={styles.infoBoxWrapper4}>
                        <MaterialCommunityIcons style={styles.chipsIcon1} name="washing-machine" size={90} color="#fff"
                        />
                        <Text
                            style={{
                                alignItems: "center",
                                marginTop: 120,
                                marginLeft: -120,
                                alignSelf: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000',
                            }} onPress={() => navigate("PlaceAmount")} >
                                จำนวนเครื่องซักผ้า
                        </Text>
                </View>
            </View>

            </SafeAreaView >
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
    infoBoxWrapper1: {
        flexDirection: 'row',
        color: '#000',
        width: 180,
        height: 200,
        backgroundColor: '#A9CCE3',
        borderColor: '#000',
        borderWidth: 0,
        borderRadius: 10,
        marginRight: 6,
        marginLeft: 15,
        marginTop: 195,
        marginBottom: 30,
    },
    infoBoxWrapper2: {
        flexDirection: 'row',
        color: '#000',
        width: 180,
        height: 200,
        backgroundColor: '#7FB3D5',
        borderColor: '#000',
        borderWidth: 0,
        borderRadius: 10,
        marginRight: 6,
        marginLeft: 15,
        marginTop: -28,
        marginBottom: 10,
    },
    infoBoxWrapper3: {
        flexDirection: 'row',
        color: '#000',
        width: 180,
        height: 200,
        backgroundColor: '#AED6F1',
        borderColor: '#000',
        borderWidth: 0,
        borderRadius: 10,
        marginRight: 18,
        marginLeft: 198,
        marginTop: -411,
        marginBottom: 30,
    },
    infoBoxWrapper4: {
        flexDirection: 'row',
        color: '#000',
        width: 180,
        height: 200,
        backgroundColor: '#5DADE2',
        borderColor: '#000',
        borderWidth: 0,
        borderRadius: 10,
        marginRight: 18,
        marginLeft: 198,
        marginTop: -28,
        marginBottom: 30,
    },
    infoBox: {
        marginRight: 6,
        marginLeft: 0,
        marginTop: -160,
        marginBottom: 50,
    },
    categoryIcon2: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#9BD9D9',
        borderRadius: 50,
        marginRight: -300,
        marginTop: -90,
        marginBottom: 15,
        marginLeft: 0,
      },
    chipsIcon1: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: -4,
        marginBottom: 10,
        marginLeft: 39,

    },
    chipsIcon2: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 0,

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
