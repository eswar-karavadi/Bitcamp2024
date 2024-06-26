import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { Link } from 'expo-router';
import './assets/App.css';
import Navbar from './navbar';
import LogoImage from './logoImage';

export default function findbuddy() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
	return (
        <View style={styles.container}>
            <LogoImage />
            <Navbar />
            <View style = {styles.columnContainer}>
                <View style={styles.rowEmailContainer}>
                    <Text style={styles.nameText}>1. What time are you looking to workout today?: </Text>
                        <TextInput 
                            style={styles.input} 
                            placeholder='e.g 6 P.M'
                            onChangeText={(val) => setEmail(val)}
                        />
                </View>

                <View style={styles.rowPasswordContainer}>
                    <Text style={styles.nameText}>2. What muscles are you training today? </Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='e.g. Chest'
                        onChangeText={(val) => setPwd(val)}
                    />
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
        position: 'absolute',
        top: '10%',
        left: '5%'
    },
    header: {
        fontSize: 24,
        alignItems: 'center',
        position: 'absolute',
        top: '15%',
    },
    nameText: {
        fontSize: 18,
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        position: 'absolute',
        padding: 8,
        width: 300,
        left: '10%',
        top: '200%'
    },
    rowEmailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '20%',
    },
    rowPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '40%',    
    },
    loginStyle: {
        fontSize: 18,
        alignItems: 'center',
        top: '20%',
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