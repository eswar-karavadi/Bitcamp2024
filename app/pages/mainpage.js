import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Link } from 'expo-router';


export default function mainpage() {
    return (
        <View style={styles.container}>
            <View style={styles.columnContainer}>
                <Image source={require('./assets/logo.png')} style={styles.image} />
                <Link href="/pages/signup" style = {styles.buttons}>See Workout Plan</Link>
                <Link href="/pages/login" style = {styles.buttons}>Find Workout Buddy</Link>
                <Link href="/pages/login" style = {styles.buttons}>Machine Availability</Link>
                <View style={styles.rowContainer}>

                <Link href="/pages/signup" style={styles.navbar} >
                  <Image source={require('./assets/SettingsLogo.png')} style={styles.navbar}/>
                </Link>

                <Link href="/pages/signup" style={styles.navbar}>
                <Image source={require('./assets/HomeLogo.png')} style={styles.homeLogo} />
                </Link>

                <Link href="/pages/signup" style={styles.navbar}>
                <Image source={require('./assets/ProfileLogo.png')} style={styles.navbar} />
                </Link>

                  
                  

                  </View>
                
           
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    columnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        top: '0%',
    },
    nameText: {
        fontSize: 36,
        alignItems: 'center',
        top: '40%',
    },
    image: {
      width: 50,
      height: 48,
      position: 'absolute',
      top: '2.5%',
      left: '82.5%',
    },
    buttons: {
        alignItems: 'center',
        top: '20%',
        fontSize: 36,
        padding: 40
    },
    navbar: {
      width: 150,
      height: 90,
      alignItems: 'center',
      top: '30%',
    },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: '50%',
  },

  homeLogo: {
    width: 0,
    height: 0,
    top: '0%',
    margin: 70,
  }

});