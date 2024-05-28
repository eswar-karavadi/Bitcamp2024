import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { Link } from 'expo-router';


export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');

    const auth = FIREBASE_AUTH;
    
    const handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, pwd)
            .then((userCredential) => {
                // Signed up successfully
                console.log('User signed up:', userCredential.user);
                // You can add additional logic here, like navigating to another screen
            })
            .catch((error) => {
                // Handle errors here
                console.error('Error signing up:', error.message);
            });
    };

	return (
       <View style={styles.container}>
            <Text style={styles.header}>Sign Up</Text>
            <Image source={require('./assets/logo.png')} style={styles.image} />
            <View style={styles.columnContainer}>

                <View style={styles.rowNameContainer}>
                    <Text style={styles.nameText}>Name: </Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='e.g. Samik Wangneo'
                        onChangeText={(val) => setName(val)}
                    />
                </View>

                <View style={styles.rowEmailContainer}>
                    <Text style={styles.nameText}>Email: </Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='e.g. rivincity@gmail.com'
                        onChangeText={(val) => setEmail(val)}
                    />
                </View>

                <View style={styles.rowPasswordContainer}>
                    <Text style={styles.nameText}>Password: </Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='e.g. eppley123!'
                        onChangeText={(val) => setPwd(val)}
                    />
                </View>

                <View style={styles.rowConfirmPasswordContainer}>
                    <Text style={styles.nameText}>Confirm Password: </Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='e.g. ********'
                        onChangeText={(val) => setConfirmPwd(val)}
                    />
                </View>
            </View>

            <Link style={styles.registerStyle} onPress={handleSignUp}>Register</Link>

         
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
        top: '30%',
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
    image: {
        width: 50,
        height: 48,
        position: 'absolute',
        top: '2.5%',
        left: '82.5%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        position: 'absolute',
        padding: 8,
        width: 200,
        left: '100%'
    },
    rowNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '0%',    
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
    rowConfirmPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '60%',    
    },
    registerStyle: {
        fontSize: 18,
        alignItems: 'center',
        top: '20%',
    }
});