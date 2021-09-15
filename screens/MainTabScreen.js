import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import MapTestScreen from './MapTestScreen';
import NotificationScreen from './NotificationScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import WashPlaceScreen from './WashPlaceScreen';
import HistoryScreen from './HistoryScreen';
import StatusScreen from './StatusScreen';
import SearchScreen from './SearchScreen';
import ScanScreen from './ScanScreen';
import WashConfirmScreen from './WashConfirmScreen';
import ReportScreen from './ReportScreen';

import WashChooseScreen from './WashChooseScreen';
import MyShopScreen from '../Owner/MyShopScreen';
import In_DeScreen from '../Owner/In_DeScreen';
import WashAmount from '../Owner/WashAmount';
import PlaceAmount from '../Owner/PlaceAmount';
import ToolsScreen from '../Owner/ToolsScreen';






import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ScanStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#35A3A8',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color='#fff' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: 'Notifications',
        tabBarColor: '#35A3A8',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color='#fff' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#35A3A8',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color='#fff' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Screen"
      component={ScanScreen}
      options={{
        tabBarLabel: 'Scan',
        tabBarColor: '#35A3A8',
        tabBarIcon: ({color}) => (
          < MaterialCommunityIcons name="qrcode-scan" color='#fff' size={26} />
        ),
      }}
    />
  </Tab.Navigator>
  
);

export default MainTabScreen;

const HomeStackScreen = ({navigation  }) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#35A3A8',
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor='#35A3A8'
            onPress={() => navigation.openDrawer()}
          />
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      
      
      <HomeStack.Screen
        name="WashPlace"
        component={WashPlaceScreen}
        options={{
          title: 'WashPlace',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color={colors.text}
                backgroundColor= '#35A3A8'
               onPress={() => navigation.goBack()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="WashChoose"
        component={WashChooseScreen}
        options={{
          title: 'Location',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color={colors.text}
                backgroundColor='#35A3A8'
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="Status"
        component={StatusScreen}
        options={{
          title: 'Order',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color={colors.text}
                backgroundColor='#35A3A8'
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="In_De"
        component={In_DeScreen}
        options={{
          title: 'เพิ่ม/ลด เครื่องซักผ้า',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color={colors.text}
                backgroundColor='#35A3A8'
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="PlaceAmount"
        component={PlaceAmount}
        options={{
          title: 'Location',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color={colors.text}
                backgroundColor='#35A3A8'
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="WashAmount"
        component={WashAmount}
        options={{
          title: 'เครื่องซักผ้าของฉัน',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color={colors.text}
                backgroundColor='#35A3A8'
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="MyShop"
        component={MyShopScreen}
        options={{
          title: 'Myshop',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color={colors.text}
                backgroundColor='#35A3A8'
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: 'History',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor='#35A3A8'
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
               <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color={colors.text}
                backgroundColor= '#35A3A8'
               onPress={() => navigation.goBack()}
              />
              
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="WashConfirm"
        component={WashConfirmScreen}
        options={{
          title: 'Confirm',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color={colors.text}
                backgroundColor= '#35A3A8'
               onPress={() => navigation.goBack()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Explore',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor='#35A3A8'
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="Report"
        component={ReportScreen}
        options={{
          title: 'Report',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color={colors.text}
                backgroundColor= '#35A3A8'
               onPress={() => navigation.goBack()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="WashReport"
        component={ToolsScreen}
        options={{
          title: 'ReportWash',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color={colors.text}
                backgroundColor= '#35A3A8'
               onPress={() => navigation.goBack()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      
      
     
    </HomeStack.Navigator>
  );
};

const NotificationStackScreen = ({navigation}) => (
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#35A3A8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <NotificationStack.Screen
      name="Notifications"
      component={NotificationScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor='#35A3A8'
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </NotificationStack.Navigator>
);


const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#35A3A8',
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor='#35A3A8'
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor='#35A3A8'
                color={colors.text}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );


      };


      const ScanStackScreen = ({navigation}) => {
        const {colors} = useTheme();
      
        return (
          <ScanStack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#35A3A8',
                shadowColor: colors.background, // iOS
                elevation: 0, // Android
              },
              headerTintColor: colors.text,
            }}>
            <ScanStack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                title: 'Profile',
                headerLeft: () => (
                  <View style={{marginLeft: 10}}>
                    <Icon.Button
                      name="ios-menu"
                      size={25}
                      backgroundColor='#35A3A8'
                      color={colors.text}
                      onPress={() => navigation.openDrawer()}
                    />
                  </View>
                ),
                headerRight: () => (
                  <View style={{marginRight: 10}}>
                    <MaterialCommunityIcons.Button
                      name="account-edit"
                      size={25}
                      backgroundColor='#35A3A8'
                      color={colors.text}
                      onPress={() => navigation.navigate('EditProfile')}
                    />
                  </View>
                ),
              }}
            />
            <ScanStack.Screen
              name="EditProfile"
              options={{
                title: 'Edit Profile',
              }}
              component={EditProfileScreen}
            />
          </ScanStack.Navigator>
        );
      
      
            };

