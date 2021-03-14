import React from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Action( {navigation} ) {
    return (
        <SafeAreaView>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <View style={styles.pointsToLead}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Points to take the Lead</Text>
                    </View>
                    <View style={styles.percentageView}>
                        <View style={styles.percentageCard} >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: Colors.mediumBlue }}>Stanford Eco Week</Text>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.mediumBlue}}>273</Text>
                            <Text style={{ textAlign: 'center', color: Colors.mediumBlue }}>pts</Text>
                        </View>
                        <View style={styles.percentageCard}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: Colors.grassGreen }}>Energy Marathon</Text>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.grassGreen}}>50</Text>
                            <Text style={{ textAlign: 'center', color: Colors.grassGreen }}>pts</Text>
                        </View>
                        <View style={styles.percentageCard}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: Colors.darkGreen }}>Green Revolution</Text>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.darkGreen}}>35</Text>
                            <Text style={{ textAlign: 'center', color: Colors.darkGreen }}>pts</Text>
                        </View>
                    </View>
                    <View style={styles.actionsProgressOverview}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Actions in Progress</Text>
                    </View>
                    <View style={styles.tasks}>
                        <View style={styles.taskView}>
                            <Image source={Images[global.actionsInProgress[0].image]} style={styles.taskPhoto}></Image>
                            <View style={styles.bodyTextView}>
                                <Text style={styles.titleText}>{global.actionsInProgress[0].title}</Text>
                                <Text style={styles.ptsText}>{global.actionsInProgress[0].pts}</Text>
                            </View>
                        </View>
                        <View style={styles.taskView}>
                        <Image source={Images[global.actionsInProgress[1].image]} style={styles.taskPhoto}></Image>
                            <View style={styles.bodyTextView}>
                                <Text style={styles.titleText}>{global.actionsInProgress[1].title}</Text>
                                <Text style={styles.ptsText}>{global.actionsInProgress[1].pts}</Text>
                            </View>
                        </View>

                        <View style={styles.taskView}>
                            <Image source={Images[global.actionsInProgress[2].image]} style={styles.taskPhoto}></Image>
                            <View style={styles.bodyTextView}>
                                <Text style={styles.titleText}>{global.actionsInProgress[2].title}</Text>
                                <Text style={styles.ptsText}>{global.actionsInProgress[2].pts}</Text>
                            </View>
                        </View>

                        <View style={styles.taskView}>
                            <Image source={Images[global.actionsInProgress[3].image]} style={styles.taskPhoto}></Image>
                            <View style={styles.bodyTextView}>
                                <Text style={styles.titleText}>{global.actionsInProgress[3].title}</Text>
                                <Text style={styles.ptsText}>{global.actionsInProgress[3].pts}</Text>
                            </View>
                        </View>

                        <View style={styles.taskView}>
                            <Image source={Images[global.actionsInProgress[4].image]} style={styles.taskPhoto}></Image>
                            <View style={styles.bodyTextView}>
                                <Text style={styles.titleText}>{global.actionsInProgress[4].title}</Text>
                                <Text style={styles.ptsText}>{global.actionsInProgress[4].pts}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.customButtonBox}>
                <TouchableOpacity onPress={() => {
                                console.log("Pressed");
                                global.activitiesList = ["Hello!"];
                    navigation.navigate('Custom Action');
                }}><View style={styles.customButton}><Text style={styles.customButtonText}>CREATE CUSTOM ACTION</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                                console.log("Pressed");
                                global.activitiesList = ["Hello!"];
                    navigation.navigate('Browse Actions');
                }}><View style={styles.customButton}><Text style={styles.customButtonText}>BROWSE FOR ACTIONS</Text>
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
        height: Metrics.screenHeight*.72
    },
    title: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
        height: 40,
        marginTop: 25,
        marginBottom: 10,
    },
    pointsToLead: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 10,
        marginTop: 15,
        width: Metrics.screenWidth * 0.9,
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
        backgroundColor: Colors.lightBlue,
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    customButton: {
        width: 190,
        height: 60,
        borderRadius: 20,
        backgroundColor: Colors.darkGreen,
        margin: 0,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
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
        flexDirection: 'row',
        height: Metrics.screenHeight * 0.085,
        width: Metrics.screenWidth * .9,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 20,
        margin: 5,
        borderWidth: 2,
        borderColor: Colors.lightGrey,
    },
    bodyTextView: {
        width: 200,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    ptsText: {
        fontSize: 12,
    },
    taskPhoto: {
        height: Metrics.screenHeight * 0.07,
        width: Metrics.screenHeight * 0.07,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5
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