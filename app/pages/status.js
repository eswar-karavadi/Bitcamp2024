import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Link } from 'expo-router';
import './assets/App.css';
import Navbar from './navbar';
import LogoImage from './logoImage';


export default function status() {
    return (
        <View style={styles.container}>
            <LogoImage />
            <Navbar />
            <View style={styles.columnContainer}>
                <Text style = {styles.header}>Breakdown of Status</Text>
                <Text style = {styles.nameText}>0 - 99 - Rookie</Text>
                <Text style = {styles.nameText}>100 - 199 - Amateur</Text>
                <Text style = {styles.nameText}>200 - 299 - Regular</Text>
                <Text style = {styles.nameText}>300 - 399 - Pro</Text>
                <Text style = {styles.nameText}>400 - 499 - Expert</Text>
                
           
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
    header: {
        fontSize: 40,
        alignItems: 'center',
        top: '17%',

    },
    columnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        top: '0%',

    },
    nameText: {
        fontSize: 40,
        alignItems: 'center',
        top: '23%',
        margin: 20,
    },
    buttons: {
        alignItems: 'center',
        top: '20%',
        fontSize: 36,
        padding: 40
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