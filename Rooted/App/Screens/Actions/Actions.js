import React from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Action( {navigation} ) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Action Center</Text>
                    </View>
                    <View style={styles.percentageView}>
                        <View style={styles.percentageCard}>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.mediumBlue}}>1</Text>
                            <Text style={{ textAlign: 'center', color: Colors.mediumBlue }}>Challenge in Progress</Text>
                        </View>
                        <View style={styles.percentageCard}>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.grassGreen}}>50</Text>
                            <Text style={{ textAlign: 'center', color: Colors.grassGreen }}>Points to Next Reward</Text>
                        </View>
                        <View style={styles.percentageCard}>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.darkGreen}}>6</Text>
                            <Text style={{ textAlign: 'center', color: Colors.darkGreen }}>Challenges Completed</Text>
                        </View>
                    </View>
                    <View style={styles.actionsProgressOverview}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Actions in Progress</Text>
                    </View>
                    
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('Stores')}>
                <View style={styles.customButton}>
                    <Text style={styles.customButtonText}>CREATE CUSTOM ACTION</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
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
        height: 200,
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
    customButton: {
        width: 308,
        height: 48,
        borderRadius: 20,
        backgroundColor: Colors.darkGreen,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: -300,
        right: (Metrics.screenWidth - 348)/2,
    },
    customButtonText: {
        color: 'white',
        fontSize: 20,
    },
});