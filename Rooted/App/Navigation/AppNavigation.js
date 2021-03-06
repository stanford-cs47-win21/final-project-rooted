// import React from 'react';
// import { Colors, Metrics } from '../Themes';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import { StyleSheet, Image } from 'react-native';

// // import FeedScreen from '../Screens/FeedScreen;
// // import ActionScreen from '../Screens/ActionScreen;
// // import ActionScreen from '../Screens/LogActionScreen;
// // import ActionScreen from '../Screens/CustomActionScreen;
// // import each screen as we go

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