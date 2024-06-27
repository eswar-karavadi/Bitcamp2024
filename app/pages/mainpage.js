import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from "react-native";
import { Link, useRouter} from 'expo-router';
import './assets/App.css';
import Navbar from './navbar';
import LogoImage from './logoImage';

export default function Mainpage() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <LogoImage />
            <Navbar />
            <View style={styles.columnContainer}>
                <Text style = {styles.text}>Empower Your Day With TerpFit! </Text>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/workoutplan")}
                >
                    <Text style={styles.buttonText}>See Workout Plan</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/workoutbuddy")}
                >
                    <Text style={styles.buttonText}>Find Workout Buddy</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/tutorials")}
                >
                    <Text style={styles.buttonText}>Tutorials</Text>
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
        top: '40%',
    },
    text: {
        fontSize: 24,
        alignItems: 'center',
        top: '20%',
        fontWeight: 'bold',
    },
    navbar: {
      flex: 1,
      right: '10%',
      width: 150,
      height: 90,
      alignItems: 'center',
      top: '10%',
    },
    rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: '50%',
    }, 
    buttons: {
        top: '25%',
        backgroundColor: '#D90429',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginVertical: 20,
        width: '75%',
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