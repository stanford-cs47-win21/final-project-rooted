/* This file contains the app's navigation */

import React, { useEffect, useState } from 'react';
import { Colors, Metrics } from '../Themes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, ActivityIndicator } from 'react-native';


/* Onboarding Flow */

import { OnboardingScreen } from '../Screens/Onboarding';

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
import { Actions, CustomAction, BrowseAction, LogAction, PostPreview, PointCalibrator, ActionComplete } from '../Screens/Actions';

const ActionsStack = createStackNavigator();
function ActionsStackComponent() {
    return (
        <ActionsStack.Navigator headerMode="float">
            <ActionsStack.Screen name="Action Center" component={Actions} options={{headerLeft: null}}  />
            <ActionsStack.Screen name="Custom Action" component={CustomAction} />
            <ActionsStack.Screen name="Browse Actions" component={BrowseAction} options={{title: null}} />
            <ActionsStack.Screen name="Complete Action" component={LogAction} options={{title: "Log Completed Action"}}  />
            <ActionsStack.Screen name="Post Preview" component={PostPreview} />
            <ActionsStack.Screen name="Point Calibrator" component={PointCalibrator} />
            <ActionsStack.Screen name="Action Created" component={ActionComplete} />
        </ActionsStack.Navigator>
    );
}

/* Dashboard */
import { DashboardTeamsOverview, joinTeamScreen, TeamScreen, ChallengesOverview, Leaderboard } from '../Screens/Dashboard';

const DashboardStack = createStackNavigator();
function DashboardStackComponent() {
    return (
        <DashboardStack.Navigator headerMode="float">
            <DashboardStack.Screen name="Dashboard" component={DashboardTeamsOverview} options={{ animationEnabled: false }}/>
            <DashboardStack.Screen name="joinTeamScreen" component={joinTeamScreen} options={{title: 'Discover'}} />
            <DashboardStack.Screen name="TeamScreen" component={TeamScreen}options={{title: null}} />
            <DashboardStack.Screen name="ChallengesOverview" component={ChallengesOverview} options={{ animationEnabled: false, headerLeft: null, title: 'Dashboard' }}/>
            <DashboardStack.Screen name="Leaderboard" component={Leaderboard} />
        </DashboardStack.Navigator>
    );
}

/* Profile */
import { ProfileScreen, WalletOverview, WalletLocali, CongratsWon, CongratsBalance, Stores, ReformationPreview } from '../Screens/Profile';

const ProfileStack = createStackNavigator();
function ProfileStackComponent() {
    return (
        <ProfileStack.Navigator headerMode="float">
            <ProfileStack.Screen name="Profile" component={ProfileScreen} />
            <ProfileStack.Screen name="WalletOverview" component={WalletOverview} options={{title: "Wallet"}} />
            <ProfileStack.Screen name="WalletLocali" component={WalletLocali} options={{ animationEnabled: false, title: "Wallet" }} />
            <ProfileStack.Screen name="CongratsWon" component={CongratsWon} />
            <ProfileStack.Screen name="CongratsBalance" component={CongratsBalance} />
            <ProfileStack.Screen name="Stores" component={Stores} />
            <ProfileStack.Screen name="ReformationPreview" component={ReformationPreview} options={{ animationEnabled: false, title: null}} />
        </ProfileStack.Navigator>
    );
}

/* Tab Navigation Container */
const TabNav = createBottomTabNavigator();
function TabNavComponent() {
    return (
        <TabNav.Navigator 
        initialRouteName="Actions"
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
            return <Ionicons style={{ marginTop: 3 }} name={iconName} size={35} color={Colors.darkGrey} />;
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
    );
}

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
};

export default function AppNavigation() {
    const [onboarded, setOnboarded] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const setBool = async (bool) => {
        try {
            await AsyncStorage.setItem('opened', bool.toString())
            setOnboarded(bool)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        const checkBool = async () => {
            try {
                const appOpened = await AsyncStorage.getItem('opened');
                console.log(appOpened);
                if (appOpened === "true") {
                    setOnboarded(true);
                }
                setLoading(false);
            } catch (e) {
                console.error(e);
            }
        }
        checkBool();
        AsyncStorage.clear();
    }, [])

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        )
    }

    if (!onboarded) {
        return <OnboardingScreen setOnboarded={setBool}/>
    } else {
        return (
            <NavigationContainer theme={MyTheme}>
                <TabNavComponent />
            </NavigationContainer>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        height: 780,
        width: Metrics.screenWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },
});