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


global.actionsAvailable = [
    {
        title: "Recycle Three Times",
        description: "Recycle items (boxes, plastic, etc.) three times to complete this action",
        pts: "80 points",
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

global.actionsCompleted = [
    {
        name: 'Nicole Woo',
        profilePic: 'Nicole',
        id: '1',
        challenge: 'Stanford Eco Week',
        timePosted: 'now',
        caption: 'Just walked to get my groceries! The hardest part was carrying multiple bags home.',
        points: '20',
        image: 'groceries',
        likes: '27',
        comments: '32',
        liked: 'true',
    },
    {
        name: 'Morgan Zagerman',
        profilePic: 'Morgan',
        id: '2',
        challenge: 'Sorting Marathon',
        timePosted: '1 hr',
        caption: 'Who knew sorting trash is so easy? I could do it in my sleep',
        points: '30',
        image: 'sort',
        likes: '40',
        comments: '21',
        liked: 'false',
    },
    {
        name: 'Jordan Fong',
        profilePic: 'Jordan',
        id: '3',
        challenge: 'Efficient Energy',
        timePosted: '2 hr',
        caption: 'Did you know LED light bulbs use 75% less energy and last 25x longer than incandescent lighting?',
        points: '50',
        image: 'led',
        likes: '41',
        comments: '33',
        liked: 'true',
    },
]

export default AppNavigation;