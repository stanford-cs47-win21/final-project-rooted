/* This file contains the app's navigation */

import React from 'react';
import { Colors, Metrics } from '../Themes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/* Rewards + Profile Screens */
import { ProfileScreen, WalletOverview, WalletLocali, CongratsWon, CongratsBalance, Stores, localiPreview, localiPreviewMinus } from '../Screens/Rewards';

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
            <ProfileStack.Screen name="localiPreviewMinus" component={localiPreviewMinus} options={({ navigation }) => ({ 
                animationEnabled: false, 
                headerLeft: (props) => (
                    <HeaderBackButton onPress={() => navigation.navigate('Stores')}/>
                    ),
                })} 
            />
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
                         iconName = focused ? 'list-circle' : 'list-circle';
                     } else if (route.name == 'Actions') {
                         iconName = focused ? 'leaf' : 'leaf-outline';
                     } else if (route.name == 'Dashboard') {
                         iconName = focused ? 'podium' : 'podium-outline';
                     } else if (route.name == 'Profile') {
                         iconName = focused ? 'person' : 'person-outline';
                     }
                return <Ionicons name={iconName} size={40} color={Colors.darkGrey} />;
                 },
             })}
             
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: Colors.darkGrey
            }}>
                <TabNav.Screen name="Profile" component={ProfileStackComponent} />
            </TabNav.Navigator>
            {/* <ProfileStackComponent /> */}
        </NavigationContainer>
    );
}

// export default function AppNavigation() {
//     return (
//         <NavigationContainer theme={MyTheme}>
//             <ProfileStackComponent />
//         </NavigationContainer>
//     );
// }


/* For later */
// const FeedStack = createStackNavigator();
// function FeedStackComponent() {
//     return (
//         <FeedStack.Navigator headerMode="float">
//             <FeedStack.Screen name="Feed" component={FeedScreen} />
//         </FeedStack.Navigator>
//     );
// }

// const ActionStack = createStackNavigator();
// function ActionStackComponent() {
//   return (
//     <ActionStack.Navigator headerMode="float">
//       <ActionStack.Screen name="Bookmark" component={ActionScreen} />
//       <ActionStack.Screen name="BookmarkViewer" component={LogActionScreen} />
//       <ActionStack.Screen name="BookmarkViewer" component={CustomActionScreen} />
//       {/* Add more screens as we go */}
//     </ActionStack.Navigator>
//   );
// }

// const DashboardStack = createStackNavigator();
// function DashboardStackComponent() {
//   return (
//     <DashboardStack.Navigator headerMode="float">
//       <DashboardStack.Screen name="Bookmark" component={DashboardTeamsScreen} />
//       <DashboardStack.Screen name="BookmarkViewer" component={ViewTeamScreen} />
//       <DashboardStack.Screen name="BookmarkViewer" component={DiscoverTeamScreen} />
//       <DashboardStack.Screen name="BookmarkViewer" component={CustomActionScreen} />
//       <DashboardStack.Screen name="Bookmark" component={DashboardChallengesScreen} />
//       <DashboardStack.Screen name="Bookmark" component={LeaderboardScreen} />
//       {/* Add more screens as we go */}
//     </DashboardStack.Navigator>
//   );
// }

