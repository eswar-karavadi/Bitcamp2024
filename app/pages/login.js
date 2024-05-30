import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { Link } from 'expo-router';
import './assets/App.css';
import { FIREBASE_AUTH } from '../../Firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const auth = FIREBASE_AUTH;

    const handleSignIn = async () => {
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Sign in successful!');
            navigate('/Mainpage');
        } catch (error) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        } finally{
            setLoading(false);
        }

        
    };


	return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <Image source={require('./assets/logo.png')} style={styles.image} />
            <View style = {styles.columnContainer}>
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
                        secureTextEntry = {true}
                        value= {password}
                        style={styles.input} 
                        placeholder='e.g. eppley123!'
                        onChangeText={(val) => setPassword(val)}
                    />
                </View>
            </View>
            {/* <Link style={styles.loginStyle} onPress ={handleSignIn} href="/pages/mainpage">Login</Link>  */}
            <Button title="Login" onPress={handleSignIn} />
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
    }
});