import React, { useState } from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function Leaderboard() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={Images.ecoweek} style={styles.challImage}></Image>
                <Text style={styles.challName}>Stanford Eco Week</Text>
                <Text style={styles.timeLeft}>5 days 1:21:33 left</Text>
                <Text style={{marginTop: 10}}>Stanford's week-long sustainability challenge</Text>

                <View style={styles.yourTeamContainer}>
                    <Image source={Images.powerRangers} style={styles.yourTeamPhoto}></Image>
                    <View style={styles.yourTeamDescrip}>
                        <Text style={styles.teamName}>Power Rangers</Text>
                        <Text style={styles.teamPoints}>640 points</Text>
                    </View>
                </View>

                <Image source={Images.leaderboard} style={styles.leaderboard}></Image>
                
                <View style={styles.rankingTitleContainer}>
                    <Text style={[styles.rankingTitleText, {marginRight: 67}]}>Rank</Text>
                    <Text style={[styles.rankingTitleText, {marginRight: 60}]}>Team Name</Text>
                    <Text style={styles.rankingTitleText}>Points</Text>
                </View>
                <View style={styles.rankingsContainer}>
                    <View style={styles.teamContainer}>
                        <View style={styles.numberContainer}>
                            <Text style={{ fontWeight: 'bold'}}>4</Text>
                        </View>
                        <Image source={Images.divya} style={styles.teamPhoto}></Image>
                        <View style={styles.bodyTextView}>
                            <Text style={styles.bodyText}>Green Dream</Text>
                        </View>
                        <Text style={styles.points}>415</Text>
                        <Image source={Images.goButton} style={styles.goButton}></Image>
                    </View>
                    <View style={styles.teamContainer}>
                        <View style={styles.numberContainer}>
                            <Text style={{ fontWeight: 'bold'}}>5</Text>
                        </View>
                        <Image source={Images.caleb} style={styles.teamPhoto}></Image>
                        <View style={styles.bodyTextView}>
                            <Text style={styles.bodyText}>Vegan Machine</Text>
                        </View>
                        <Text style={styles.points}>367</Text>
                        <Image source={Images.goButton} style={styles.goButton}></Image>
                    </View>
                


                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
    },
    challImage: {
        width: 130,
        resizeMode: 'contain',
        borderRadius: 130/2,
    },
    challName: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
    },
    timeLeft: {
        fontSize: 14,
        color: Colors.mediumGrey,
    }, 
    leaderboard: {
        width: Metrics.screenWidth * 0.9,
        height: 220,
        borderRadius: 40,
    },
    yourTeamContainer: {
        height: 80,
        width: Metrics.screenWidth * 0.8,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },
    yourTeamPhoto: {
        height: 79,
        width: 79,
        borderRadius: 40,
    },
    yourTeamDescrip: {
        height:60,
        width: 200,
        justifyContent: 'space-evenly',
        marginLeft: 20,
    },
    teamName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    teamPoints: {
        fontSize: 18,
        color: Colors.lightGrass,
    },
    rankingTitleContainer: {
        width: Metrics.screenWidth * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    rankingTitleText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.mediumBlue,
        marginLeft: 4,
    },
    rankingsContainer: {
        height: 100,
        backgroundColor: 'white',
        width: Metrics.screenWidth * 0.9,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 10,
        marginBottom: 40,
    },
    teamContainer: {
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
    numberContainer: {
        height: 20,
        width: 10,
    },
    teamPhoto: {
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
    goButton: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    points: {
        fontSize: 12,
        color: Colors.mediumGrey
    }
});