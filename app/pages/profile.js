import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Link } from 'expo-router';
import './assets/App.css';
import Navbar from './navbar';
import LogoImage from './logoImage';


export default function profile() {
    return (
        <View style={styles.container}>
            <LogoImage />
            <Navbar />
            <Image source={require('../assets/terpfitLogo.png')} style={styles.avatar} />

            <View style={styles.columnContainer}>
                <Text style = {styles.nameText}>Name: </Text>
                <Text style = {styles.nameText}>Experience: </Text>
                <Text style = {styles.nameText}>Personality Traits: </Text>
                <Text style = {styles.nameText}>Status: </Text>
                <Link href="/pages/status" style = {styles.buttons}>i</Link>
           
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
        top: '40%',
    },
    nameText: {
        fontSize: 36,
        alignItems: 'center',
        top: '30%',
        fontWeight: 'bold',
    },
    buttons: {
        alignItems: 'center',
        top: '40%',
        fontSize: 36,
        padding: 10,
    },

    avatar: {
      width: 250,
      height: 250,
      position: 'absolute',
      alignItems: 'center',
      top: '10%',

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



});