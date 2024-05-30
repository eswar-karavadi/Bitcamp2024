// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/native-stack';
// import Home from './pages/home';
// import Login from './pages/login';
// import SignUp from './pages/signup';
// // import Mainpage from './pages/mainpage';

// const Stack = createStackNavigator();

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Home">
//                 <Stack.Screen name="Home" component={Home} />
//                 <Stack.Screen name="SignUp" component={SignUp} />
//                 <Stack.Screen name="Login" component={Login} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';




export default function Home() {
    const navigation = useNavigation();

    return ( /* not working*/

        <View style={styles.container}>
            <View style={styles.columnContainer}>
                <Text style={styles.nameText}>Name</Text>
                <Image source={require('./assets/logo.png')} style={styles.image} />
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.buttons}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttons}>
                    <Text style={styles.buttonText}>Log In</Text>
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
    image: {
        width: 150,
        height: 140,
        alignItems: 'center',
        top: '70%',
    },
    buttons: {
        alignItems: 'center',
        top: '100%',
        fontSize: 36,
        padding: 10
    }
});