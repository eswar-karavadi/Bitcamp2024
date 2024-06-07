import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import './assets/App.css';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import { FIREBASE_AUTH } from '../../Firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { TouchableOpacity } from 'react-native';



export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
   
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    
    const handleSignUp = async () => {
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Sign up successful!');
            router.push("/pages/mainpage")
        } catch (error) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        } finally{
            setLoading(false);
        }

        
    };

	return (
       <View style={styles.container}>
            <Text style={styles.header}>Sign Up</Text>
            <Text style={styles.text}>Please sign up to use the app </Text>
            <Image source={require('./assets/logo.png')} style={styles.image} />
            <View style={styles.columnContainer}>

                <View style={styles.rowNameContainer}>
                    <Text style={styles.nameText}>Name: </Text>
                    <TextInput 
                        value = {name}
                        style={styles.input} 
                        placeholder='e.g. Samik Wangneo'
                        onChangeText={(val) => setName(val)}
                    />
                </View>

                <View style={styles.rowEmailContainer}>
                    <Text style={styles.nameText}>Email: </Text>
                    <TextInput 
                        value= {email}
                        style={styles.input} 
                        placeholder='e.g. rivincity@gmail.com'
                        onChangeText={(val) => setEmail(val)}
                    />
                </View>

                <View style={styles.rowPasswordContainer}>
                    <Text style={styles.nameText}>Password: </Text>
                    <TextInput  
                        secureTextEntry = {true}
                        value= {password}
                        style={styles.input} 
                        placeholder='e.g. eppley123!'
                        onChangeText={(val) => setPassword(val)}
                    />
                </View>

                <View style={styles.rowConfirmPasswordContainer}>
                    <Text style={styles.nameText}>Confirm Password: </Text>
                    <TextInput 
                        value = {confirmPassword}
                        style={styles.input} 
                        placeholder='e.g. ********'
                        onChangeText={(val) => setConfirmPassword(val)}
                    />
                </View>
            </View>

            {/* <Link style={styles.registerStyle} onPress={handleSignUp} href="/pages/mainpage">Register</Link>
            <Button title="Login" onPress={handleSignUp}  <--- eswar firebase old cahnges/> */}


            <TouchableOpacity
                style={styles.buttons}
                onPress={handleSignUp}
            >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

         
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
        fontSize: 45,
        alignItems: 'center',
        position: 'absolute',
        top: '14%',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        alignItems: 'center',
        position: 'absolute',
        top: '22.5%',

    },

    nameText: {
        fontSize: 17,
        alignItems: 'center',
        fontWeight: 'bold',
    },
    image: {
        width: 65,
        height: 60,
        position: 'absolute',
        top: '2.5%',
        left: '78.5%',
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
        top: '5%',    
    },
    rowEmailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '25%',
    },
    rowPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '45%',    
    },
    rowConfirmPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '65%',    
    },
    registerStyle: {
        fontSize: 18,
        alignItems: 'center',
        top: '20%',
    },
    buttons: {
        alignItems: 'center',
        top: '30%',
        backgroundColor: '#D90429',
        padding: 15,
        borderRadius: 30,
        marginVertical: 10,
        borderWidth: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 36,
    }
});