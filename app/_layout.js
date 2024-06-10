import { Stack } from 'expo-router';

export default function RootLayout() {

    return (
        <Stack>
            <Stack.Screen 
            name='index' 
            options={{
                headerTitle: "Home",
                headerStyle:  {
                    backgroundColor: '#D90429',
                }
                }} 
            />
            <Stack.Screen 
            name='pages/signup' 
            options={{
                headerTitle: "Sign Up",
                headerStyle:  {
                    backgroundColor: '#D90429',
                }
                }} 
            />
            <Stack.Screen
            name='pages/login'
            options={{
                headerTitle: "Login",
                headerStyle:  {
                    backgroundColor: '#D90429',
                }
            }}
            />
            <Stack.Screen
            name='pages/mainpage'
            options={{
                headerTitle: "Main Page",
                headerStyle:  {
                    backgroundColor: '#D90429',
                }
            }}
            />
            <Stack.Screen
            name='pages/workoutplan'
            options={{
                headerTitle: "Workout Home",
                headerStyle:  {
                    backgroundColor: '#D90429',
                }
            }}
            />
            <Stack.Screen
            name='pages/createplanhome'
            options={{
                headerTitle: "Create Plan",
                headerStyle:  {
                    backgroundColor: '#D90429',
                }
            }}
            />
            <Stack.Screen
            name='pages/viewday'
            options={{
                headerTitle: "Day Plan",
                headerStyle:  {
                    backgroundColor: '#D90429',
                }
            }}
            />
            <Stack.Screen
            name='pages/viewplan'
            options={{
                headerTitle: "View Plan",
                headerStyle:  {
                    backgroundColor: '#D90429',
                }
            }}
            />
            <Stack.Screen
            name='pages/workoutbuddy'
            options={{
                headerTitle: "Workout Buddy",
                headerStyle:  {
                    backgroundColor: '#D90429',
                }
            }}
            />
            <Stack.Screen
            name='pages/profile'
            options={{
                headerTitle: "Profile",
                headerStyle:  {
                    backgroundColor: '#D90429',
                }
            }}
            />
            <Stack.Screen
            name='pages/status'
            options={{
                headerTitle: "Status",
                headerStyle:  {
                    backgroundColor: '#D90429',
                }
            }}
            />
            <Stack.Screen
            name='pages/findbuddy'
            options={{
                headerTitle: "Find Buddy",
                headerStyle:  {
                    backgroundColor: '#D90429',
                }
            }}
            />
            <Stack.Screen
            name='pages/potentialbuddies'
            options={{
                headerTitle: "Potential Buddies",
                headerStyle:  {
                    backgroundColor: '#D90429',
                }
            }}
            />
            <Stack.Screen
            name='pages/contact'
            options={{
                headerTitle: "Contact",
                headerStyle:  {
                    backgroundColor: '#D90429',
                }
            }}
            />
            <Stack.Screen
            name='pages/viewbuddy'
            options={{
                headerTitle: "View Buddies",
                headerStyle: {
                    backgroundColor: '#D90429',
                }
            }}
            />

            <Stack.Screen
                name='pages/settings'
                options={{
                    headerTitle: "Settings",
                    headerStyle: {
                        backgroundColor: '#D90429',
                    }
                }}
            />

        </Stack>


    );
};