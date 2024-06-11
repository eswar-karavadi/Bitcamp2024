import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";

import { Link } from 'expo-router';

export default function Navbar() {

    return (
        <View style={styles.container}>
            <Text style={styles.navbarText}>______________________________________</Text>
            <View style={styles.rowContainer}>
                <Link href="/pages/settings">
                    <Image source={require('./assets/SettingsLogo.png')} style={styles.navbar} />
                </Link>

                <Link href="/pages/mainpage">
                    <Image source={require('./assets/HomeLogo.png')} style={styles.navbar} />
                </Link>

                <Link href="/pages/profile">
                    <Image source={require('./assets/ProfileLogo.png')} style={styles.navbar} />
                </Link>
            </View>

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
    navbar: {
        flex: 1,
        width: 115,
        height: 71.875,
        marginHorizontal: 3,
    },

    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '69%',

    },

    navbarText: {
        top: '68%',
        fontSize: 18,
        fontWeight: 'bold',
    }

});