import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import { Link, useRouter } from 'expo-router';
import './assets/App.css';


export default function workoutplan() {
    const [counter, setCounter] = useState('0')
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.columnContainer}>
                <Image source={require('../assets/terpfitLogo.png')} style={styles.image} />
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/createplanhome")}
                >
                    <Text style={styles.buttonText}>Create Workout Plan</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/viewplan")}
                >
                    <Text style={styles.buttonText}>View Workout Plan</Text>
                </TouchableOpacity>
 
                <Text style = {styles.streak}>Current Workout Streak: </Text>
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

    streak: {
      fontSize: 36,
      alignItems: 'center',
      top: '40%',
      margin: 10
    },
    navbar: {
        flex: 1,
        right: '10%',
        width: 150,
        height: 90,
        alignItems: 'center',
        top: '18%',
        paddingHorizontal: 20
    },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: '55%',
  },

  homeLogo: {
    width: 0,
    height: 0,
    top: '0%',
    margin: 70,
  },

  buttons: {
    alignItems: 'center',
    top: '18%',
    backgroundColor: '#D90429',
    padding: 10,
    borderRadius: 30,
    marginVertical: 30,
    borderWidth: 3,
},
buttonText: {
    color: 'white',
    fontSize: 36,
}

});