import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Link } from 'expo-router';
import './assets/App.css';


export default function viewbuddy() {
    return (
        <View style={styles.container}>
            <View style={styles.columnContainerMain}>
                <Image source={require('./assets/logo.png')} style={styles.image} />
                <View style={styles.rowContainer1}>
                    <Image source={require('./assets/logo.png')} style={styles.avatar}/>
                    <Link href="/pages/workoutplan" style = {styles.buttons}>Name</Link>
                </View>
                <View style={styles.rowContainer2}>
                    <Image source={require('./assets/logo.png')} style={styles.avatar}/>
                    <Link href="/pages/login" style = {styles.buttons}>Name</Link>
                </View>
                <View style={styles.rowContainer3}>
                    <Image source={require('./assets/logo.png')} style={styles.avatar}/>
                    <Link href="/pages/login" style = {styles.buttons}>Name</Link>
                </View>
                <View style={styles.rowContainer}>

                <Link href="/pages/settings" style={styles.navbar} >
                  <Image source={require('./assets/SettingsLogo.png')} style={styles.navbar}/>
                </Link>

                <Link href="/pages/mainpage" style={styles.navbar}>
                <Image source={require('./assets/HomeLogo.png')} style={styles.navbar} />
                </Link>

                <Link href="/pages/profile" style={styles.navbar}>
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
        backgroundColor: '#ffffea',
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
      width: 65,
      height: 60,
      position: 'absolute',
      top: '2.5%',
      left: '78.5%',
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
  rowContainer1: {
      flexDirection: 'row',
      alignItems: 'center',
      top: '0%',
  },
  rowContainer2: {
      flexDirection: 'row',
      alignItems: 'center',
      top: '20%',
  },
  rowContainer3: {
      flexDirection: 'row',
      alignItems: 'center',
      top: '40%',
  },
  homeLogo: {
    width: 0,
    height: 0,
    top: '0%',
    margin: 70,
  }

});