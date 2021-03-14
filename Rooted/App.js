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
        description: "Recycle items (boxes, plastic, etc.) three times to complete this action",
        pts: "30 points",
        image: 'recycle',
    }, 
    {
        title: "Vegetarian For a Week",
        description: "Eat vegetarian food for a full week",
        pts: "100 points",
        image: 'greenDream',
    }, 
    {
        title: "Reuseable Water Bottles for a Week",
        description: "Don't use any single use plastic water bottles all week",
        pts: "40 points",
        image: 'waterbottle',
    }, 
    {
        title: "Bike to Work",
        description: "Replace your commute with a bike ride",
        pts: "20 points",
        image: 'bike',
    }, 
    {
        title: "Beach Clean-up Day",
        description: "Volunteer at a local beach clean up for at least 4 hours",
        pts: "50 points",
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