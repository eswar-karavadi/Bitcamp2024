import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from "react-native";
import { Link, useRouter} from 'expo-router';
import './assets/App.css';


export default function settingsNotifications() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.columnContainer}>
                <Image source={require('./assets/logo.png')} style={styles.image} />
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
                    onPress={() => router.push("/pages/login")}
                >
                    <Text style={styles.buttonText}>Machine Availability</Text>
                </TouchableOpacity>

                <View style={styles.rowContainer}>

                <Link href="/pages/settings" style={styles.navbar} >
                  <Image source={require('./assets/SettingsLogo.png')} style={styles.navbar}/>
                </Link>

                <Link href="/pages/mainpage" style={styles.navbar}>
                <Image source={require('./assets/HomeLogo.png')} style={styles.navbar} />
                </Link>

                <Link href="/pages/profile" style={styles.navbar}>
                <Image source={require('./assets/ProfileLogo.png')} style={styles.navbar} />
                </Link>

                  
                  

                  </View>
                
           
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
    image: {
      width: 50,
      height: 48,
      position: 'absolute',
      top: '2.5%',
      left: '82.5%',
    },
    navbar: {
      flex: 1,
      right: '10%',
      width: 150,
      height: 90,
      alignItems: 'center',
      top: '20%',
    },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: '50%',
  }, 

  buttons: {
    alignItems: 'center',
    top: '25%',
    backgroundColor: '#D90429',
    padding: 10,
    borderRadius: 30,
    marginVertical: 35,
    borderWidth: 3,
},
buttonText: {
    color: 'white',
    fontSize: 36,
}

});