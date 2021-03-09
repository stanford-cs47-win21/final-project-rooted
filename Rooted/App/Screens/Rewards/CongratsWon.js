import React from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function CongratsWon() {
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <Text style={styles.header}>Congrats!</Text>
            </View>
            <View style={styles.winnerSection}>
                <Text style={styles.bodyText}>
                    <Text style={[ styles.bodyText, {textDecorationLine: 'underline'} ]}>Power Rangers</Text> won</Text>
                <Text style={[ styles.bodyText, {color: Colors.lightGrass} ]}>1st Place</Text>
                <Text style={styles.bodyText}>in <Text style={[ styles.bodyText, {textDecorationLine: 'underline'} ]}>Stanford Eco Week</Text></Text>
            </View>
            <View style={styles.earningSection}>
                <Text style={styles.bodyText}>You've earned:</Text>
                <Text style={[ styles.header, {color: Colors.grassGreen} ]}>$1.47</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headerSection: {
        marginTop: 100,
        alignItems: 'center',
        height: 100,
        width: Metrics.screenWidth * 0.9,
    },
    header: {
        fontSize: 50,
        fontWeight: 'bold',
        color: Colors.mediumBlue,
    },
    winnerSection: {
        justifyContent:'space-evenly',
        alignItems: 'center',
        height: 180,
        width: Metrics.screenWidth * 0.9,
    },
    bodyText: {
        fontSize: 30,
    },
    earningSection: {
        justifyContent:'space-evenly',
        alignItems: 'center',
        height: 150,
        width: Metrics.screenWidth * 0.9,
        marginTop: 30,
    },
});
