import React from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function CongratsBalance({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <Text style={styles.header}>Congrats!</Text>
            </View>
            <View style={styles.balanceSection}>
                <Text style={styles.bodyText}>New balance:</Text>
                <Text style={[ styles.header, {color: Colors.grassGreen} ]}>$1.47</Text>
            </View>
            <View style={styles.buttonSection}>
                <TouchableOpacity onPress={() => navigation.navigate('Stores')}>
                    <View style={styles.redeemButton}>
                        <Text style={styles.redeemText}>REDEEM</Text>
                    </View>
                </TouchableOpacity>

                {/* Will navigate to feed */}
                <TouchableOpacity> 
                    <View style={styles.exitButton}>
                        <Text style={styles.exitText}>EXIT</Text>
                    </View>
                </TouchableOpacity>
                
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
    buttonSection: {
        justifyContent:'space-evenly',
        alignItems: 'center',
        height: 180,
        width: Metrics.screenWidth * 0.9,
        marginTop: 20,
    },
    redeemButton: {
        width: 212,
        height: 62,
        backgroundColor: Colors.grassGreen,
        borderRadius: 125,
        justifyContent: 'center',
        alignItems: 'center',
    },
    redeemText: {
        fontSize: 30,
        color: 'white',
    },
    exitButton: {
        width: 120,
        height: 39,
        backgroundColor: Colors.lightGrass,
        borderRadius: 125,
        justifyContent: 'center',
        alignItems: 'center',
    },
    exitText: {
        fontSize: 20,
        color: 'white',
    },
    bodyText: {
        fontSize: 30,
    },
    balanceSection: {
        justifyContent:'space-evenly',
        alignItems: 'center',
        height: 150,
        width: Metrics.screenWidth * 0.9,
    },
});
