import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Link } from 'expo-router';
import './assets/App.css';


export default function workoutbuddy() {
    const [counter, setCounter] = useState('0')
    return (
        <View style={styles.container}>
            <View style={styles.columnContainer}>
                <Image source={require('../assets/terpfitLogo.png')} style={styles.image} />
                <Link href="/pages/findbuddy" style = {styles.buttons}>Find Buddy</Link>
                <Link href="/pages/viewbuddy" style = {styles.buttons}>View Buddies</Link>
                <Text style = {styles.streak}>Total Buddies: </Text>
                <Text style = {styles.streak}>{counter}</Text>

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
    streak: {
      fontSize: 36,
      alignItems: 'center',
      top: '40%',
      margin: 10
    },
    navbar: {
      flex: 1,
      width: 150,
      height: 90,
      alignItems: 'center',
        top: '30%',
      margin: 20,
    },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
      top: '67%',
      right: '9.5%',

  },


});