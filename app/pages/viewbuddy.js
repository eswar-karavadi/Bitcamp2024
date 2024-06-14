import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Link } from 'expo-router';
import './assets/App.css';
import Navbar from './navbar';
import LogoImage from './logoImage';


export default function viewbuddy() {
    return (
        <View style={styles.container}>
            <LogoImage />
            <View style={styles.columnContainerMain}>
                <View style={styles.rowContainer}>
                    <Image source={require('../assets/terpfitLogo.png')} style={styles.avatar}/>
                    <Link href="/pages/workoutplan" style = {styles.buttons}>Name</Link>
                </View>
                <View style={styles.rowContainer}>
                    <Image source={require('./assets/logo.png')} style={styles.avatar}/>
                    <Link href="/pages/login" style = {styles.buttons}>Name</Link>
                </View>
                <View style={styles.rowContainer}>
                    <Image source={require('./assets/logo.png')} style={styles.avatar}/>
                    <Link href="/pages/login" style = {styles.buttons}>Name</Link>
                </View>
            </View>
            <Navbar />
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
    columnContainerMain: {
        flexDirection: 'column',
        alignItems: 'left',
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
    rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: '0%',
    },
    homeLogo: {
    width: 0,
    height: 0,
    top: '0%',
    margin: 70,
  },
  avatar: {
    width: 80,
    height: 80,
  }
});