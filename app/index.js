
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
        top: '20%',
        fontWeight: 'bold',
    },
    subheadingText: {
        fontSize: 24,
        alignItems: 'center',
        textAlign: 'center',
        top: '25%',
    },
    image: {
        width: 230,
        height: 230,
        alignItems: 'center',
        top: '30%',
    },
    buttons: {
        top: '35%',
        backgroundColor: '#D90429',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginVertical: 12,
        width: '55%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderColor: '#000',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 36,
    }
});