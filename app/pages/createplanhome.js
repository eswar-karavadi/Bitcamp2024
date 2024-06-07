import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from "react-native";
import { Link, useRouter } from 'expo-router';
import './assets/App.css';


export default function createplanhome() {
    const [name, setName] = useState('');

    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.columnContainer}>
                <Image source={require('./assets/logo.png')} style={styles.image} />
                <Text style = {styles.nameText}>Plan Name:</Text>
                    <TextInput 
                            style={styles.input} 
                            placeholder='e.g. Push Pull Legs'
                            onChangeText={(val) => setName(val)}
                        />
                <Text style = {styles.subheading}>Select a day and input your workout for that day.</Text>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                    <TouchableOpacity
                        key={day}
                        style={styles.buttons}
                        onPress={() => router.push({ pathname: '/pages/viewday', params: { day } })}
                    >
                        <Text style={styles.buttons}>{day}</Text>
                    </TouchableOpacity>
                ))}

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
        fontSize: 20,
        alignItems: 'center',
        top: '10%',
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
        top: '8%',
        fontSize: 36,
        padding: 20
    },
    navbar: {
      width: 150,
      height: 90,
      alignItems: 'center',
      bottom: '28%',
    },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: '40%',
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