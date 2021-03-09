/* This file contains the app's navigation */

import React from 'react';
import { Colors, Metrics } from '../Themes';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Image } from 'react-native';

/* Rewards + Profile Screens */
import { ProfileScreen, WalletOverview, WalletLocali, CongratsWon, CongratsBalance, Stores, localiPreview } from '../Screens/Rewards';

const ProfileStack = createStackNavigator();
// function ProfileStackComponent() {
//     return (
//         <ProfileStack.Navigator headerMode="float">
//             <ProfileStack.Screen name="Profile" component={ProfileScreen} />
//             <ProfileStack.Screen name="Profile" component={WalletOverview} />
//         </ProfileStack.Navigator>
//     );
// }

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
            <ProfileStack.Navigator initialRouteName='Profile'>
                {/* <ProfileStack.Screen name="Profile" component={ProfileScreen} />
                <ProfileStack.Screen name="WalletOverview" component={WalletOverview} />
                <ProfileStack.Screen name="WalletLocali" component={WalletLocali} />
                <ProfileStack.Screen name="CongratsWon" component={CongratsWon} />
                <ProfileStack.Screen name="CongratsBalance" component={CongratsBalance} /> */}
                {/* <ProfileStack.Screen name="Stores" component={Stores} /> */}
                <ProfileStack.Screen name="localiPreview" component={localiPreview} />
            </ProfileStack.Navigator>
        </NavigationContainer>
    );
}


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

// const TabNav = createBottomTabNavigator();

// export default function AppNavigation() {
//     return (
//       <NavigationContainer>
//         <TabNav.Navigator
//           initialRouteName='ActionScreen'
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
  
//               if (route.name === 'ActionTab') {
//                 iconName = 'actions';
//                 return // actions icon
//               } else if (route.name === 'feed') {
//                 iconName = 'dashboard';
//                 return // dasboard icon
//               } else {
//                   // return feed icon
//               }
  
//               //return <Entypo name={iconName} size={Metrics.icons.medium} color={color} />;
//             },
//           })}
//           tabBarOptions={{
//             activeTintColor: Colors.darkGrey,
//             showLabel: true,
//           }}>
//           <TabNav.Screen name="FeedTab" component={FeedStackComponent} />
//           <TabNav.Screen name="DashboardTab" component={DashboardStackComponent} />
//         </TabNav.Navigator>
//       </NavigationContainer>
//     );
//   }