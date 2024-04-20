import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/LogIn'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Login" element={<Login />} />

            </Routes>
        </Router>
    )
};

export default App;