import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity} from "react-native";
import { Link, useRouter} from 'expo-router';
import './assets/App.css';


export default function settings() {
    const [name, setName] = useState('');
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.columnContainer}>
                <Image source={require('../assets/terpfitLogo.png')} style={styles.image} />
                <Text style = {styles.nameText}>Settings</Text>
                    <TextInput 
                            style={styles.input} 
                            placeholder='Search Inside Settings'
                            onChangeText={(val) => setName(val)}
                        />
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/settingsAccount")}
                >
                    <Text style={styles.buttonText}>Account</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/settingsAppearance")}
                >
                    <Text style={styles.buttonText}>Appearance</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/settingsNotifications")}
                >
                    <Text style={styles.buttonText}>Notifications</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/settingsPrivacySecurity")}
                >
                    <Text style={styles.buttonText}>Privacy and Security</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/settingsHelpSupport")}
                >
                    <Text style={styles.buttonText}>Help and Support</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/settingsAbout")}
                >
                    <Text style={styles.buttonText}>About</Text>
                </TouchableOpacity>

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
        top: '0%',
    },
    image: {
      width: 65,
      height: 60,
      position: 'absolute',
      top: '2.5%',
      left: '78.5%',
    },
    navbar: {
      flex: 1,
      right: '10%',
      width: 150,
      height: 90,
      alignItems: 'center',
      top: '10%',
    },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: '25%',
  }, 

  buttons: {
    alignItems: 'center',
    top: '10%',
    backgroundColor: '#D90429',
    padding: 8,
    borderRadius: 30,
    marginVertical: 15,
    borderWidth: 3,
},
buttonText: {
    color: 'white',
    fontSize: 30,
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