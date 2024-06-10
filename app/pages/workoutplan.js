import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import { Link, useRouter } from 'expo-router';
import './assets/App.css';
import Navbar from './navbar';
import LogoImage from './logoImage';


export default function workoutplan() {
    const [counter, setCounter] = useState('0')
    const router = useRouter();
    return (
        <View style={styles.container}>
          <LogoImage />
          <Navbar />
            <View style={styles.columnContainer}>
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
    streak: {
      fontSize: 30,
      alignItems: 'center',
      top: '40%',
      margin: 10,
      fontWeight: 'bold',
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