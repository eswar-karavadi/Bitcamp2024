import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';

export default function LogoImage() {

    return (
        <View style={styles.container}>
            <Image source={require('../assets/terpfitLogo.png')} style={styles.image} />
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

    image: {
      position: 'absolute',
      width: 68,
      height: 64,
      top: '2%',
      left: '31%',
      
    },

});