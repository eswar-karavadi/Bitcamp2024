import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, Linking} from "react-native";
import { Link, useRouter} from 'expo-router';
import './assets/App.css';
import Navbar from './navbar';
import LogoImage from './logoImage';

export default function tutorials() {
    const router = useRouter();
    return (

        <View style={styles.container}>
            <LogoImage />

            <Text style={styles.headingText}>Tutorial Videos</Text>

            <View style={styles.columnContainer}>
                <ScrollView>
                
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
                        }}
                    >
                        <Image source={{ uri: 'https://i.ytimg.com/vi/UwipvPhilHc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCR5CLhEcuN1YKCTidtqZeGRFaE3g' }} style={styles.image} />
                        <Text style={styles.videoText}>Shoulder Press</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
                        }}
                    >
                        <Text style={styles.videoText}>Flat Dumbell Press</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
                        }}
                    >
                        <Text style={styles.videoText}>Hamstring Curl</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
                        }}
                    >
                        <Text style={styles.videoText}>Rope Bicep Curl</Text>
                    </TouchableOpacity>
                
                </ScrollView>

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
        marginTop: '20%',
    },
    headingText: {
        fontSize: 24,
        alignItems: 'center',
        fontWeight: 'bold',
        top: '10%',
    },
    videoText: {
        fontSize: 24,
        alignItems: 'center',
        marginVertical: 100,
    },
    image: {
        width: 200,
        height: 120,
    }
});