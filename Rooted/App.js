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
        pts: "30",
        image: 'recycle',
    }, 
    {
        title: "Vegetarian For a Week",
        description: "Eat vegetarian food for a full week",
        pts: "100",
        image: 'greenDream',
    }, 
    {
        title: "Reuseable Bottle Week",
        description: "Don't use any single use plastic water bottles all week",
        pts: "40",
        image: 'waterbottle',
    }, 
    {
        title: "Bike to Work",
        description: "Replace your commute with a bike ride",
        pts: "20",
        image: 'bike',
    }, 
    {
        title: "Beach Clean-up Day",
        description: "Volunteer at a local beach clean up for at least 4 hours",
        pts: "50",
        image: 'beach',
    }
]


global.actionsAvailable = [
    {
        title: "Compost for a Week",
        description: "Compost any leftover foodscraps at each meal for one week",
        pts: "40",
        image: 'compost',
    }, 
    {
        title: "Vegan For a Week",
        description: "Eat vegan food (no animal products of any kind) for a full week",
        pts: "150",
        image: 'vegan',
    }, 
    {
        title: "Go a week using public transportation",
        description: "Use public transportation, walking or biking to travel for a week",
        pts: "80",
        image: 'bus',
    }, 
    {
        title: "Buy from a sustainable shopping brand",
        description: "Puchase a clothing item from a sustainable brand rather than fast fashion",
        pts: "10",
        image: 'fashion',
    }, 
    {
        title: "Reduce your Electricity Bill by 5%",
        description: "Reduce your electricity usage by at least 5% over the month",
        pts: "200",
        image: 'electricity',
    }, 
    {
        title: "Attend a Local Tree Planting",
        description: "Attend a local tree planting event",
        pts: "50",
        image: 'treePlanting',
    }, 
    {
        title: "Clean a Park",
        description: "Spend at least 2 hours at a local park / public location clean up",
        pts: "25",
        image: 'park',
    }, 
    {
        title: "Go to a Farmers Market",
        description: "Shop for produce at your local farmers market at least once",
        pts: "15",
        image: 'market',
    }, 
    {
        title: "Buy in Bulk",
        description: "Buy bulk groceries to reduce single use plastic",
        pts: "15",
        image: 'bulk',
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