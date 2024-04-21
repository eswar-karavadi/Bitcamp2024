import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { Link } from 'expo-router';


export default function createplanhome() {
    const [name, setName] = useState('');
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
                <Link href="/pages/viewmonday" style = {styles.buttons}>Monday</Link>
                <Link href="/pages/viewtuesday" style = {styles.buttons}>Tuesday</Link>
                <Link href="/pages/viewwednesday" style = {styles.buttons}>Wednesday</Link>
                <Link href="/pages/viewthursday" style = {styles.buttons}>Thursday</Link>
                <Link href="/pages/viewfriday" style = {styles.buttons}>Friday</Link>

                <View style={styles.rowContainer}>

                <Link href="/pages/signup" style={styles.navbar} >
                    <Image source={require('./assets/SettingsLogo.png')} style={styles.navbar}/>
                </Link>

                <Link href="/pages/mainpage" style={styles.navbar}>
                    <Image source={require('./assets/HomeLogo.png')} style={styles.homeLogo} />
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
    image: {
      width: 50,
      height: 48,
      position: 'absolute',
      top: '2.5%',
      left: '82.5%',
    },
    buttons: {
        alignItems: 'center',
        top: '5%',
        fontSize: 36,
        padding: 40
    },
    navbar: {
      width: 150,
      height: 90,
      alignItems: 'center',
      bottom: '24%',
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