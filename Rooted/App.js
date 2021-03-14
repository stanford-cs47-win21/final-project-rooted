/* CS 147 
* Rooted Hi-Fi implementation
* by Nicole Woo and Clara MacAvoy */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Images } from './App/Themes';
import AppNavigation from './App/Navigation/AppNavigation';

global.actionsInProgress = [
    {
        title: "Recycle Three Times",
        pts: "30 pts",
        image: 'recycle',
    }, 
    {
        title: "Vegetarian For a Week",
        pts: "100 pts",
        image: 'greenDream',
    }, 
    {
        title: "Reuseable Water Bottles for a Week",
        pts: "40 pts",
        image: 'waterbottle',
    }, 
    {
        title: "Bike to Work",
        pts: "20 pts",
        image: 'bike',
    }, 
    {
        title: "Beach Clean-up Day",
        pts: "50 pts",
        image: 'beach',
    }
]

// To test out screens, import the screen.js file from the Screens folder and paste it into the return function for App()

//import ProfileScreen from './App/Screens/ProfileScreen';

// export default function App() {
//     return (
//         <ProfileScreen></ProfileScreen>
//     );
// }

export default AppNavigation;