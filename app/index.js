import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Link } from 'expo-router';


export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.columnContainer}>
                <Text style={styles.nameText}>Name</Text>
                <Image source={require('./assets/logo.png')} style={styles.image} />
                <Link href="/pages/signup" style = {styles.buttons}>Sign Up</Link>
                <Link href="/pages/login" style = {styles.buttons}>Log In</Link>
           
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        top: '40%',
    },
    image: {
        width: 150,
        height: 140,
        alignItems: 'center',
        top: '70%',
    },
    buttons: {
        alignItems: 'center',
        top: '100%',
        fontSize: 36,
        padding: 10
    }
});