
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";

import { Link, useRouter } from 'expo-router';

export default function Home() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.columnContainer}>

                <Text style={styles.nameText}>Welcome to TerpFit!</Text>
                <Text style={styles.subheadingText}>Please sign up or login to access your account!</Text>
                <Image source={require('./assets/terpfitLogo.png')} style={styles.image} />
                 
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/signup")}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/login")}
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
           
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
        top: '30%',
        fontWeight: 'bold',
    },
    subheadingText: {
        fontSize: 24,
        alignItems: 'center',
        textAlign: 'center',
        top: '50%',
    },
    image: {
        width: 150,
        height: 140,
        alignItems: 'center',
        top: '60%',
    },
    buttons: {
        alignItems: 'center',
        top: '77%',
        backgroundColor: '#D90429',
        padding: 10,
        borderRadius: 30,
        marginVertical: 10,
        borderWidth: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 36,
    }
});