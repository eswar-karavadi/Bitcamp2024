import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Link } from 'expo-router';


export default function profile() {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/logo.png')} style={styles.image} />
            <Image source={require('./assets/logo.png')} style={styles.avatar} />

            <View style={styles.columnContainer}>
                <Text style = {styles.nameText}>Name: </Text>
                <Text style = {styles.nameText}>Experience: </Text>
                <Text style = {styles.nameText}>Personality Traits: </Text>
                <Text style = {styles.nameText}>Status: </Text>
                <Link href="/pages/status" style = {styles.buttons}>i</Link>
           
            </View>

             <View style={styles.rowContainer}>
                <Link href="/pages/signup" style={styles.navbar} >
                    <Image source={require('./assets/SettingsLogo.png')} style={styles.navbar}/>
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
        justifyContent: 'center',
    },
    columnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        top: '40%',
    },
    nameText: {
        fontSize: 36,
        alignItems: 'center',
        top: '40%',
    },
        image: {
      width: 50,
      height: 48,
      position: 'absolute',
      top: '2.5%',
      left: '82.5%',
    },

    buttons: {
        alignItems: 'center',
        top: '50%',
        fontSize: 36,
        padding: 10,
    },

    avatar: {
      width: 250,
      height: 250,
      position: 'absolute',
      alignItems: 'center',
      top: '10%',

    },

    navbar: {
        flex: 1,
        right: '10%',
        width: 150,
        height: 90,
        alignItems: 'center',
        top: '27%',
    },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: '50%',
  },



});