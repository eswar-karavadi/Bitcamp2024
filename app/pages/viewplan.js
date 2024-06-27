import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from "react-native";
import { Link, useRouter } from 'expo-router';
import './assets/App.css';
import Navbar from './navbar';
import LogoImage from './logoImage';


export default function viewplan() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <LogoImage />
            <Navbar />
            <View style={styles.columnContainer}>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/workoutplan")}
                >
                    <Text style={styles.buttonText}>Workout Plan 1</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/workoutplan")}
                >
                    <Text style={styles.buttonText}>Workout Plan 2</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => router.push("/pages/workoutplan")}
                >
                    <Text style={styles.buttonText}>Workout Plan 3</Text>
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
    navbar: {
      width: 150,
      height: 90,
      alignItems: 'center',
      top: '30%',
    },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: '50%',
  },

  homeLogo: {
    width: 0,
    height: 0,
    top: '0%',
    margin: 70,
  },

  buttons: {
    top: '23%',
    backgroundColor: '#D90429',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 25,
    width: '80%',
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