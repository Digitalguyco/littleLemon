import * as React from 'react';
import { View, Text,StyleSheet, Image, Pressable} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={styles.container}>
    <Image resizeMode="contain" style={styles.welcomeImage} source={require('../assets/little-lemon-logo.png')}/>
    <Text style={styles.welcomeText}> Little Lemon, your local Mediterranean Bistro</Text>
    <Pressable onPress={() => navigation.navigate('subscribe')} style={styles.btn}>
      <Text style={styles.btnText}>Newsletter</Text>
    </Pressable>
  </View>;
};

export default WelcomeScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
      alignItems: 'center'
    },
    welcomeImage: {
      flex: 0.6,
      width: 150,
      height: 150
    },
    welcomeText: {
      flex: 0.3,
      paddingHorizontal: 30,
      fontSize: 22,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    btn: {
      width: "85%",
      backgroundColor: 'black',
      borderRadius: 10,
      padding:8
    },
    btnText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
    }
})

