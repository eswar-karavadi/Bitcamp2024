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
            <Image source={require('../assets/terpfitLogo.png')} style={styles.image} />
            <View style={styles.columnContainer}>
                <Text style={styles.nameText}>{displayDay}</Text>

                <View style={styles.rowContainer2}>
                    <Text style={styles.subheadingText}>Muscles Trained</Text>
                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={() => router.push("/pages/createplanhome")}
                    >
                        <Image source={require('../assets/infoImage.png')} style={styles.infoImage} />
                    </TouchableOpacity>
                </View>
                {/* CODE FOR POPUP
                <View style={styles.modal}>
                    <View style = {styles.rowContainer4}>
                        <Text style={styles.modalHeader}>Muscles Trained Info</Text>
                        <TouchableOpacity
                            style={styles.buttons}
                            onPress={() => router.push("/pages/createplanhome")}
                        >
                            <Image source={require('../assets/closeImage.png')} style={styles.closeImage} />
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={styles.modalText}>Enter the muscle that you would like 
                    to train today. To add additional muscles, press the plus button.</Text>
                </View>
                <View style={styles.overlay}>

                </View>
                */}
                <View style = {styles.columnContainer2}>
                    <TextInput
                        style={styles.input1}
                        placeholder='e.g. Biceps, Chest'
                    />
                    <TouchableOpacity
                            style={styles.buttons}
                            onPress={() => router.push("/pages/createplanhome")}
                        >
                            <Image source={require('../assets/plusImage.png')} style={styles.infoImage} />
                    </TouchableOpacity>
                </View>

                <View style={styles.rowContainer3}>
                    <Text style={styles.subheadingText}>Potential Exercises</Text>
                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={() => router.push("/pages/createplanhome")}
                    >
                        <Image source={require('../assets/infoImage.png')} style={styles.infoImage} />
                    </TouchableOpacity>
                </View>

                <View style = {styles.columnContainer2}>
                    <TextInput
                        style={styles.input2}
                        placeholder='e.g. Bicep Curls, Rear Delt Flys'
                    />
                    <TouchableOpacity
                            style={styles.buttons}
                            onPress={() => router.push("/pages/createplanhome")}
                        >
                            <Image source={require('../assets/plusImage.png')} style={styles.infoImage} />
                    </TouchableOpacity>
                </View>
                
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
    columnContainer2: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    nameText: {
        fontSize: 36,
        alignItems: 'center',
        top: '-10%',
    },
    subheadingText: {
        fontSize: 24,
        alignItems: 'center',
    },
    modal: {
        position: 'relative',
        top: '-10%',
        borderWidth: 1,
        borderColor: "#777",
        borderRadius: '30px',
        borderWidth: '3px',
        zIndex: '10',
        backgroundColor: '#D90429',
        width: '500',
        maxWidth: '80%',
        transform: '',
    },
    modalHeader: {
        color: 'white',
        alignItems: 'center',
        textAlign: 'center',
        left: '20%',
        justifyContent: 'space-between',
        fontWeight: 'bold',
    },
    modalText: {
        color: 'white',
        alignItems: 'center',
        textAlign: 'center',
        top: '-20%',
        padding: '10px 15px',
    },
    overlay: {
        position: 'relative',
        opacity: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        pointerEvents: 'none',
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
    },
    closeImage: {
        width: 20,
        height: 20,
        left: '80%',
    },
    input1: {
        borderWidth: 1,
        borderColor: '#777',
        alignItems: 'center',
        padding: 10,
        width: 200,
        top: '-20%',
    },
    input2: {
        borderWidth: 1,
        borderColor: '#777',
        alignItems: 'center',
        padding: 10,
        width: 200,
        top: '-7%',
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
        top: '60%',
    },
    rowContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '-10%',
    },
    rowContainer3: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowContainer4: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '-8%',
        left: '60%',
        borderBottom: '5px solid black',
    },
    homeLogo: {
        width: 0,
        height: 0,
        top: '0%',
        margin: 70,
    }

});