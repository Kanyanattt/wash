import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
        
      <View style={styles.container}>
          <StatusBar backgroundColor='#35A3A8' barStyle="light-content"/>
        <View style={styles.header}>
        
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/banners/logo3.png')}
            
            style={styles.logo}
            resizeMode="stretch"
            
            />
            
        </View>
        <View style={styles.container2}>
        <Text style={styles.logotext}>Wash Station</Text>
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: colors.text
            }]}>Welcome to Wash Station!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <LinearGradient
                    colors={['#35A3A8', '#35A3A8']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started </Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
            
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:'#35A3A8'
  },
  container2: {
    flex: 1, 
    backgroundColor:'#35A3A8'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: 600,
      height: 600,
      marginTop:200
  },
  title: {
      color: '#05375a',
      fontSize: 25,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  logotext: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 80,
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30,
      marginRight: 70
  },
  signIn: {
      width: 200,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
});

