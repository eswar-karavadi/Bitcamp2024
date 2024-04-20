import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Link } from 'react-router-dom';

export default function SignUp() {
	return (
        <View style={styles.container}>
            <Image source={require('C:/Users/samik/BitcampProject/assets/logo.png')} style={styles.image} />
            <View style={styles.columnContainer}>
                <Link to='/'>
                    <button>See Workout Plan</button>
                </Link>
                <Link to='/'>
                    <button>Find Workout Buddy</button>
                </Link>
                <Link to='/'>
                    <button>Machine Availability</button>
                </Link>
            </View>
            
            <StatusBar style="auto" />
        </View>
	);
}

const styles = StyleSheet.create({
  image: {
      width: 50,
      height: 40,
      position: 'absolute',
      top: '5%',
      left: '60%',
  },
});