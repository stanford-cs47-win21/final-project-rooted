import React, { useState } from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function TeamScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={Images.sustainabiliTeam} style={styles.teamImg}></Image>
                <Text style={styles.teamName}>SustainabiliTeam</Text>
                <Text style={styles.points}>670 points</Text>
                <View style={styles.currChallContainer}>
                    <Text style={styles.sectionHead}>Current Challenges</Text>
                    <View style={styles.listingContainer}>
                        <Image source={Images.ecoweek} style={styles.listingImg}></Image>
                        <View style={styles.listingDescripContainer}>
                            <Text style={styles.currChallName}>Stanford Eco Week</Text>
                            <Text style={styles.currChallDescrip}>5 days 1:21:33 left</Text>
                        </View>
                        <Image source={Images.goButton} style={styles.goButton}></Image>
                    </View>
                </View>

                <View style={styles.rankingsContainer}>
                    <Text style={styles.sectionHead}>Rankings</Text>

                    <View style={styles.personContainer}>
                        <View style={styles.numberContainer}>
                            <Text style={{ fontWeight: 'bold'}}>1</Text>
                        </View>
                        <Image source={Images.divya} style={styles.personPhoto}></Image>
                        <View style={styles.bodyTextView}>
                            <Text style={styles.bodyText}>Divya Jyothi</Text>
                        </View>
                        <Text style={styles.points}>360</Text>
                        <Image source={Images.goButton} style={styles.goButton}></Image>
                    </View>
                    <View style={styles.personContainer}>
                        <View style={styles.numberContainer}>
                            <Text style={{ fontWeight: 'bold'}}>2</Text>
                        </View>
                        <Image source={Images.caleb} style={styles.personPhoto}></Image>
                        <View style={styles.bodyTextView}>
                            <Text style={styles.bodyText}>Caleb Brown</Text>
                        </View>
                        <Text style={styles.points}>360</Text>
                        <Image source={Images.goButton} style={styles.goButton}></Image>
                    </View>
                    <View style={styles.personContainer}>
                        <View style={styles.numberContainer}>
                            <Text style={{ fontWeight: 'bold'}}>3</Text>
                        </View>
                        <Image source={Images.li} style={styles.personPhoto}></Image>
                        <View style={styles.bodyTextView}>
                            <Text style={styles.bodyText}>Li Xue</Text>
                        </View>
                        <Text style={styles.points}>360</Text>
                        <Image source={Images.goButton} style={styles.goButton}></Image>
                    </View>
                    <View style={styles.personContainer}>
                        <View style={styles.numberContainer}>
                            <Text style={{ fontWeight: 'bold'}}>4</Text>
                        </View>
                        <Image source={Images.jake} style={styles.personPhoto}></Image>
                        <View style={styles.bodyTextView}>
                            <Text style={styles.bodyText}>Jake Matthews</Text>
                        </View>
                        <Text style={styles.points}>360</Text>
                        <Image source={Images.goButton} style={styles.goButton}></Image>
                    </View>


                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Metrics.screenWidth,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    teamImg: {
        height: 130,
        width: 130,
        borderRadius: 130/2,
    },
    teamName: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
    },
    points: {
        fontSize: 14,
        color: Colors.mediumGrey,
    },
    currChallContainer: {
        height: 100,
        width: Metrics.screenWidth * 0.9,
        backgroundColor: Colors.lightBlue,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    sectionHead: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.mediumGrey,
        marginTop: 10,
    },
    listingContainer: {
        height: 60,
        width: Metrics.screenWidth * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    listingDescripContainer: {
        width: 210,
    },
    listingImg: {
        width: 50,
        resizeMode: 'contain',
    },
    goButton: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    currChallName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    currChallDescrip: {
        fontSize: 12,
        color: Colors.mediumGrey,
    },
    goalsContainer: {
        height: 193,
        width: Metrics.screenWidth * 0.9,
        alignItems: 'center',
        backgroundColor: Colors.lightGrey,
    },
    rankingsContainer: {
        height: 270,
        width: Metrics.screenWidth * 0.9,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 10,
        marginTop: 20,
    },
    personContainer: {
        width: Metrics.screenWidth * 0.9,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginTop: 30,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
    },
    personPhoto: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    bodyTextView: {
        width: 120,
    },
    bodyText: {
        fontSize: 15,
    },
    numberContainer: {
        height: 20,
        width: 10,
    },
});