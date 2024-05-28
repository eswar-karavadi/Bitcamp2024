import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { Link } from 'expo-router';


export default function viewthursday() {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/logo.png')} style={styles.image} />
            <View style={styles.columnContainer}>
                <Text style = {styles.nameText}>Thursday</Text>

                <Text style = {styles.nameText}>Muscles Trained</Text>
                <TextInput
                    style={styles.input} 
                    placeholder='e.g. Biceps, Chest'
                />

                <Text style = {styles.nameText}>Potential Exercises</Text>
                <TextInput
                    style={styles.input} 
                    placeholder='e.g. Bicep Curls, Rear Delt Flys'
                />
                
           
            </View>
            <View style={styles.rowContainer}>

                <Link href="/pages/signup" style={styles.navbar} >
                    <Image source={require('./assets/SettingsLogo.png')} style={styles.navbar}/>
                </Link>

                <Link href="/pages/mainpage" style={styles.navbar}>
                    <Image source={require('./assets/HomeLogo.png')} style={styles.homeLogo} />
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
      width: 50,
      height: 48,
      position: 'absolute',
      top: '2.5%',
      left: '82.5%',
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

  homeLogo: {
    width: 0,
    height: 0,
    top: '0%',
    margin: 70,
  }

});