/* This file contains the app's navigation */

import React from 'react';
import { Colors, Metrics } from '../Themes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



/* Feed */
import { Feed } from '../Screens/Feed';

const FeedStack = createStackNavigator();
function FeedStackComponent() {
    return (
        <FeedStack.Navigator headerMode="float">
            <FeedStack.Screen name="Feed" component={Feed} />
        </FeedStack.Navigator>
    );
}

/* Actions */
import { Actions } from '../Screens/Actions';

const ActionsStack = createStackNavigator();
function ActionsStackComponent() {
    return (
        <ActionsStack.Navigator headerMode="float">
            <ActionsStack.Screen name="Actions" component={Actions} />
        </ActionsStack.Navigator>
    );
}

/* Dashboard */
import { DashboardTeamsOverview } from '../Screens/Dashboard';

const DashboardStack = createStackNavigator();
function DashboardStackComponent() {
    return (
        <DashboardStack.Navigator headerMode="float">
            <DashboardStack.Screen name="Dashboard" component={DashboardTeamsOverview} />
        </DashboardStack.Navigator>
    );
}

/* Profile */
import { ProfileScreen, WalletOverview, WalletLocali, CongratsWon, CongratsBalance, Stores, localiPreview } from '../Screens/Profile';

const ProfileStack = createStackNavigator();
function ProfileStackComponent({ navigation }) {
    return (
        <ProfileStack.Navigator headerMode="float">
            <ProfileStack.Screen name="Profile" component={ProfileScreen} />
            <ProfileStack.Screen name="WalletOverview" component={WalletOverview} />
            <ProfileStack.Screen name="WalletLocali" component={WalletLocali} options={{ animationEnabled: false, }} />
            <ProfileStack.Screen name="CongratsWon" component={CongratsWon} />
            <ProfileStack.Screen name="CongratsBalance" component={CongratsBalance} />
            <ProfileStack.Screen name="Stores" component={Stores} />
            <ProfileStack.Screen name="localiPreview" component={localiPreview} options={{ animationEnabled: false, }} />
        </ProfileStack.Navigator>
    );
}


const TabNav = createBottomTabNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
};

export default function AppNavigation() {
    return (
        <NavigationContainer theme={MyTheme}>
            <TabNav.Navigator
            screenOptions={({ route }) => ({
                 tabBarIcon: ({ focused, color, size }) => {
                     let iconName;

                     if (route.name === 'Feed') {
                         iconName = focused ? 'list-circle' : 'list-circle-outline';
                     } else if (route.name == 'Actions') {
                         iconName = focused ? 'leaf' : 'leaf-outline';
                     } else if (route.name == 'Dashboard') {
                         iconName = focused ? 'podium' : 'podium-outline';
                     } else if (route.name == 'Profile') {
                         iconName = focused ? 'person' : 'person-outline';
                     }
                return <Ionicons name={iconName} size={35} color={Colors.darkGrey} />;
                 },
             })}
             
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: Colors.darkGrey
            }}>
                <TabNav.Screen name="Feed" component={FeedStackComponent} />   
                <TabNav.Screen name="Actions" component={ActionsStackComponent} /> 
                <TabNav.Screen name="Dashboard" component={DashboardStackComponent} /> 
                <TabNav.Screen name="Profile" component={ProfileStackComponent} />
                
            </TabNav.Navigator>
        </NavigationContainer>
    );
}