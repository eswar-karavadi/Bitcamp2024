import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from "react-native";
import { Link, useRouter } from 'expo-router';
import './assets/App.css';
import Navbar from './navbar';
import LogoImage from './logoImage';


export default function createplanhome() {
    const [name, setName] = useState('');

    const router = useRouter();

    return (
        <View style={styles.container}>
            <LogoImage />
            <Navbar />
            <View style={styles.columnContainer}>
                <Text style = {styles.nameText}>Plan Name:</Text>
                    <TextInput 
                            style={styles.input} 
                            placeholder='e.g. Push Pull Legs'
                            onChangeText={(val) => setName(val)}
                        />
                <Text style = {styles.subheading}>Choose a day/input your workout for that day</Text>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                    <TouchableOpacity
                        key={day}
                        style={styles.buttons}
                        onPress={() => router.push({ pathname: '/pages/viewday', params: { day } })}
                    >
                        <Text style={styles.buttonText}>{day}</Text>
                    </TouchableOpacity>
                ))}
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
        top: '2%',
    },
    subheading: {
        fontSize: 19,
        alignItems: 'center',
        top: '10%',
    },

  buttons: {
    alignItems: 'center',
    top: '10%',
    backgroundColor: '#D90429',
    padding: 10,
    borderRadius: 35,
    marginVertical: 16,
    borderWidth: 3,
},
buttonText: {
    color: 'white',
    fontSize: 36,
},

navbar: {
      width: 150,
      height: 90,
      alignItems: 'center',
      flex: 1,
    },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: '30%',
  },

  homeLogo: {
    width: 0,
    height: 0,
    top: '0%',
    margin: 70,
  },

  input: {
        borderWidth: 1,
        borderColor: '#777',
        position: 'absolute',
        padding: 8,
        width: 200,
        top: '10%'
    }
});