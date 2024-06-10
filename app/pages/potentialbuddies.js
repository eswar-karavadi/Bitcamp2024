import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Link } from 'expo-router';
import './assets/App.css';
import Navbar from './navbar';
import LogoImage from './logoImage';


export default function potentialbuddies() {
    return (
        <View style={styles.container}>
            <LogoImage />
            <Navbar />
            <View style={styles.columnContainerMain}>
                <View style={styles.rowContainer1}>
                    <Image source={require('../assets/terpfitLogo.png')} style={styles.avatar}/>
                    <Link href="/pages/workoutplan" style = {styles.buttons}>Name</Link>
                </View>
                <View style={styles.rowContainer2}>
                    <Image source={require('../assets/terpfitLogo.png')} style={styles.avatar}/>
                    <Link href="/pages/login" style = {styles.buttons}>Name</Link>
                </View>
                <View style={styles.rowContainer3}>
                    <Image source={require('../assets/terpfitLogo.png')} style={styles.avatar}/>
                    <Link href="/pages/login" style = {styles.buttons}>Name</Link>
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
    buttons: {
        alignItems: 'center',
        top: '20%',
        fontSize: 36,
        padding: 40
    },
    navbar: {
        flex: 1,
        right: '10%',
        width: 150,
        height: 90,
        alignItems: 'center',
        top: '27%',
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


});