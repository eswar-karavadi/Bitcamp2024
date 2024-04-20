import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>Name</Text>
            <Image source={require('C:/Users/samik/BitcampProject/assets/logo.png')} style={styles.image} />
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/SignUp'>
                <button>SignUp</button>
            </Link>
            <Link to='/Login'>
                <button>Login</button>
            </Link>
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
    nameText: {
        fontSize: 24,
        alignItems: 'center',
        position: 'absolute',
        top: '15%',
    },
    image: {
        width: 150,
        height: 140,
        alignItems: 'center',
        position: 'absolute',
        top: '25%',
    },
});