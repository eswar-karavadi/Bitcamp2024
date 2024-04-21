import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Link } from 'expo-router';


export default function Home() {
    return (
        <View style={styles.container}>

            <Text>Home Page</Text>
            <Link href="pages/signup">Go to signup</Link>

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
        top: '50%',
    },
    nameText: {
        fontSize: 24,
        alignItems: 'center',
        position: 'absolute',
        top: '15%',
    },
    button: {
        margin: 10,
    },
    image: {
        width: 150,
        height: 140,
        alignItems: 'center',
        position: 'absolute',
        top: '25%',
    },
});