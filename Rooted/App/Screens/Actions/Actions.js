import React from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Action( {navigation} ) {
    return (
        <SafeAreaView>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <View style={styles.percentageView}>
                        <View style={styles.percentageCard} >
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.mediumBlue}}>1</Text>
                            <Text style={{ textAlign: 'center', color: Colors.mediumBlue }}>Challenge in Progress</Text>
                        </View>
                        <View style={styles.percentageCard}>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.grassGreen}}>50</Text>
                            <Text style={{ textAlign: 'center', color: Colors.grassGreen }}>Actions Completed</Text>
                        </View>
                        <View style={styles.percentageCard}>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.darkGreen}}>6</Text>
                            <Text style={{ textAlign: 'center', color: Colors.darkGreen }}>Challenges Completed</Text>
                        </View>
                    </View>
                    <View style={styles.actionsProgressOverview}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Actions in Progress</Text>
                    </View>
                    <View style={styles.tasks}>
                        <View style={styles.taskView}>
                            <View style={styles.bodyTextView}>
                                <Text style={styles.bodyText}>Recycle 3 Times</Text>
                            </View>
                        </View>
                        <View style={styles.taskView}>
                            <View style={styles.bodyTextView}>
                                <Text style={styles.bodyText}>Vegetarian for a Week</Text>
                            </View>
                        </View>

                        <View style={styles.taskView}>
                            <View style={styles.bodyTextView}>
                                <Text style={styles.bodyText}>Reusable Water Bottles</Text>
                            </View>
                        </View>

                        <View style={styles.taskView}>
                            <View style={styles.bodyTextView}>
                                <Text style={styles.bodyText}>Bike to Work</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.customButtonBox}>
            <TouchableOpacity onPress={() => {
                            console.log("Pressed");
                            global.activitiesList = ["Hello!"];
                navigation.navigate('CustomAction');
            }}><View style={styles.customButton}><Text style={styles.customButtonText}>CREATE CUSTOM ACTION</Text>
                </View>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: Metrics.screenHeight*.71
    },
    title: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
        height: 40,
        marginTop: 25,
        marginBottom: 10,
    },
    actionsProgressOverview: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 10,
        width: Metrics.screenWidth * 0.9,
    },
    pillView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: Metrics.screenWidth * 0.9,
        height: 40,
        marginTop: 10,
        marginBottom: 20,
    },
    timePill: {
        height: 24.14,
        width: 92.18,
        borderRadius: 46.09,
        backgroundColor: 'white',
        margin: 5, 
    },
    pillText: {
        fontSize: 12,
        marginTop: 3,
        textAlign: 'center',
    },
    percentageView: {
        height: 150,
        width: Metrics.screenWidth * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    percentageCard: {
        height: 120,
        width: Metrics.screenWidth * 0.8 / 3,
        backgroundColor: Colors.lightGrey,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 10,
    },
    walletSection: {
        marginTop: 5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: Metrics.screenWidth * 0.9,
        height: 300,
    },
    customButtonBox: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    customButton: {
        width: 308,
        height: 48,
        borderRadius: 20,
        backgroundColor: Colors.darkGreen,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonText: {
        color: 'white',
        fontSize: 20,
    },
    dashBack: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    combinedButtonsView: {
        height: 45,
        width: 316,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 22.5,
        marginTop: 50,
        marginBottom: 30, 
    },
    teamsButton: {
        height: 45,
        width: 316/2,
        borderTopLeftRadius: 22.5,
        borderBottomLeftRadius: 22.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
        borderRightColor: Colors.lightGrey,
        backgroundColor: 'white',
        borderLeftWidth: 0.5,
        borderLeftColor: Colors.lightGrey,
        borderTopWidth: 0.5,
        borderTopColor: Colors.lightGrey,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.lightGrey,
    },
    challengeButton: {
        height: 45,
        width: 316/2,
        borderTopRightRadius: 22.5,
        borderBottomRightRadius: 22.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 0.5,
        borderColor: Colors.lightGrey,
        backgroundColor: 'white',
        borderRightWidth: 0.5,
        borderRightColor: Colors.lightGrey,
        borderTopWidth: 0.5,
        borderTopColor: Colors.lightGrey,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.lightGrey,
    },
    buttonText: {
        fontSize: 14,
    },
    tasks: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskView: {
        height: Metrics.screenHeight * 0.1,
        width: Metrics.screenWidth * .8,
        backgroundColor: Colors.lightGrey,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 50,
        margin: 10,
    },
    bodyTextView: {
        width: 120,
    },
    bodyText: {
        fontSize: 15,
    },
    teamPhoto: {
        height: 40,
        width: 40,
        resizeMode: 'contain'
    },
    goButton: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    plusButton: {
        height: 62,
        resizeMode: 'contain',
        marginBottom: 30,
    }
});