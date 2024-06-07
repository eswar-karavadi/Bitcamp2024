import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from "react-native";
import { Link, useRouter } from 'expo-router';
import './assets/App.css';
import { useLocalSearchParams } from 'expo-router';


export default function viewday() {
    const selectedDay = useLocalSearchParams();
    const displayDay = selectedDay["day"];
    const router = useRouter();
   return(
        <View style={styles.container}>
            <Image source={require('./assets/logo.png')} style={styles.image} />
            <View style={styles.columnContainer}>
                <Text style={styles.nameText}>{displayDay}</Text>
                <View style={styles.rowContainer2}>
                    <Text style={styles.nameText}>Muscles Trained</Text>
                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={() => router.push("/pages/createplanhome")}
                    >
                        <Image source={require('./assets/logo.png')} style={styles.infoImage} />
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='e.g. Biceps, Chest'
                />

                <View style={styles.rowContainer2}>
                    <Text style={styles.nameText}>Potential Exercises</Text>
                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={() => router.push("/pages/createplanhome")}
                    >
                        <Image source={require('./assets/logo.png')} style={styles.infoImage} />
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='e.g. Bicep Curls, Rear Delt Flys'
                />


            </View>
            <View style={styles.rowContainer}>

                <Link href="/pages/settings" style={styles.navbar} >
                    <Image source={require('./assets/SettingsLogo.png')} style={styles.navbar} />
                </Link>

                <Link href="/pages/mainpage" style={styles.navbar}>
                    <Image source={require('./assets/HomeLogo.png')} style={styles.navbar} />
                </Link>

                <Link href="/pages/profile" style={styles.navbar}>
                    <Image source={require('./assets/ProfileLogo.png')} style={styles.navbar} />
                </Link>




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
    },
    columnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        top: '15%',
    },
    nameText: {
        fontSize: 36,
        alignItems: 'center',
        top: '0%',
        padding: 40
    },
    image: {
        width: 65,
        height: 60,
        position: 'absolute',
        top: '2.5%',
        left: '78.5%',
    },
    infoImage: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: '40%',
        left: '50%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        alignItems: 'center',
        padding: 20,
        width: 200,
    },
    buttons: {
        alignItems: 'center',
        top: '0%',
        fontSize: 36,
        padding: 40
    },
    navbar: {
        width: 150,
        height: 90,
        alignItems: 'center',
        bottom: '24%',
    },

    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '81%',
    },
    rowContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    homeLogo: {
        width: 0,
        height: 0,
        top: '0%',
        margin: 70,
    }

});