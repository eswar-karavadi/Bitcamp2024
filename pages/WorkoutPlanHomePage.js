import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Link } from 'react-router-dom';

export default function WorkoutPlanHomePage() {
	return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign Up Screen</Text>
            <Image source={require('C:/Users/samik/BitcampProject/assets/logo.png')} style={styles.image} />
            <View style={styles.columnContainer}>
                <Link to='/'>
                    <button>Create Workout Plan</button>
                </Link>
                <Link to='/'>
                    <button>View Workout Plan</button>
                </Link>
                <Text style={styles.CurrentWorkoutStreakText}>Current Workout Streak:</Text>
                <Text style={styles.StreakText}>0</Text>
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
    CurrentWorkoutStreakText: {
        fontSize: 18,
        alignItems: 'center',
        margin: 15
    },
    StreakText: {
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