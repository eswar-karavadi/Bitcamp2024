import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Link } from 'react-router-dom';

export default function SignUp() {
	return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign Up Screen</Text>
            <Image source={require('C:/Users/samik/BitcampProject/assets/logo.png')} style={styles.image} />
            <View style={styles.columnContainer}>
                <Text style={styles.nameText}>Name: </Text>
                <Text style={styles.nameText}>Email: </Text>
                <Text style={styles.nameText}>Password: </Text>
                <Text style={styles.nameText}>Confirm Password: </Text>
                <Link to='/'>
                    <button>Register</button>
                </Link>
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
        top: '30%',
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
        margin: 15
    },
    image: {
        width: 50,
        height: 40,
        position: 'absolute',
        top: '5%',
        left: '60%',
    },
});