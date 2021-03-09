import React from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ProfileScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.userSection}>
                        <Image source={Images.Clara} style={{ width: 117, height: 118, borderRadius: 100 }}></Image>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Clara MacAvoy</Text>
                    </View>
                    <View style={styles.statsOverviewSection}>
                        <View style={styles.pillView}>
                            <View style={[ styles.timePill, {borderColor: Colors.grassGreen, borderWidth: 1} ]}>
                                <Text style={styles.pillText}>Week</Text>
                            </View>
                            <View style={[ styles.timePill, {borderColor: Colors.grassGreen, borderWidth: 1} ]}>
                                <Text style={styles.pillText}>Month</Text>
                            </View>
                            <View style={[ styles.timePill, {
                                backgroundColor: Colors.lightBlue, 
                                borderColor: Colors.lightBlue, 
                                borderWidth: 1} 
                                ]}>
                                <Text style={styles.pillText}>Year</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sustainability Score</Text>
                        <Text style={{ fontSize: 75 }}>94</Text>
                        <Text style={{ fontSize: 15, color: Colors.darkGrey }}>up 5 points from last year</Text>
                    </View>
                    <View style={styles.percentageView}>
                        <View style={styles.percentageCard}>
                            <AntDesign name="arrowdown" size={40} color={Colors.mediumBlue} />
                            <Text style={{ fontSize: 30, color: Colors.mediumBlue}}>50%</Text>
                            <Text style={{ color: Colors.mediumBlue }}>Power Usage</Text>
                        </View>
                        <View style={styles.percentageCard}>
                            <AntDesign name="arrowup" size={40} color={Colors.grassGreen} />
                            <Text style={{ fontSize: 30, color: Colors.grassGreen}}>20%</Text>
                            <Text style={{ color: Colors.grassGreen }}>Recycling</Text>
                        </View>
                        <View style={styles.percentageCard}>
                            <AntDesign name="arrowdown" size={40} color={Colors.darkGreen} />
                            <Text style={{ fontSize: 30, color: Colors.darkGreen}}>35%</Text>
                            <Text style={{ color: Colors.darkGreen }}>Gardening</Text>
                        </View>
                    </View>
                    <View style={styles.walletSection}>
                        <Text style={{ fontSize: 30, textDecorationLine: 'underline' }}>Wallet</Text>
                        <Image source={Images.wallet} style={{ marginTop: 10, width: Metrics.screenWidth * 0.9, height: 200, resizeMode: 'contain' }}/>
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    userSection: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
        height: 160,
        marginTop: 20,
        marginBottom: 10,
    },
    statsOverviewSection: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 220,
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
        height: 220,
        width: Metrics.screenWidth * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    percentageCard: {
        height: 180,
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
});