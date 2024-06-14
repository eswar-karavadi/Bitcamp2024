import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import { Link, useRouter } from 'expo-router';
import './assets/App.css';
import Navbar from './navbar';
import LogoImage from './logoImage';

export default function workoutbuddy() {
    const [counter, setCounter] = useState('0')
    const router = useRouter();
    return (
        <View style={styles.container}>
          <LogoImage />
          <Navbar />
            <View style={styles.columnContainer}>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/findbuddy")}
                >
                    <Text style={styles.buttonText}>Find Buddy</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/viewbuddy")}
                >
                    <Text style={styles.buttonText}>View Buddies</Text>
                </TouchableOpacity>
                <Text style = {styles.streak}>Total Buddies: </Text>
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
  buttons: {
    alignItems: 'center',
    top: '25%',
    backgroundColor: '#D90429',
    padding: 10,
    borderRadius: 30,
    marginVertical: 35,
    borderWidth: 3,
},
buttonText: {
    color: 'white',
    fontSize: 36,
}
});