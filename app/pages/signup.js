import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Link } from 'expo-router';

export default function SignUp() {
	return (
        <View style={styles.container}>

            <Text>Sign Up Page</Text>
            

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