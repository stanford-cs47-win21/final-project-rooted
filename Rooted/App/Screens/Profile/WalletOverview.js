import React from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';

export default function WalletOverview({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.wallet}>
                        <View style={{ alignItems: 'flex-start', width: Metrics.screenWidth * 0.9 }}>
                            <Text style={styles.header}>Gift Cards</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('WalletLocali')}>
                            <Image source={Images.giftcards} style={styles.giftcards}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.additionalBalance}>
                        <View style={{ alignItems: 'flex-start', width: Metrics.screenWidth * 0.9 }}>
                                <Text style={styles.header}>Additional Balance</Text>
                        </View>
                        <Text style={styles.balance}>$1.47</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Stores')}>
                            <View style={styles.redeemButton}>
                                <Text style={styles.redeemText}>REDEEM</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    wallet: {
        width: Metrics.screenWidth * 0.9,
        height: 350,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 20,
    },
    giftcards: {
        width: Metrics.screenWidth,
        height: 300,
        resizeMode: 'contain',
    },
    additionalBalance: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 200,
        width: Metrics.screenWidth,
    },
    balance: {
        fontSize: 50,
        marginTop: 20, 
        color: Colors.grassGreen,
    },
    redeemButton: {
        width: 148.9,
        height: 38.24,
        borderRadius: 20,
        backgroundColor: Colors.lightGrass,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    redeemText: {
        color: 'white',
        fontSize: 20,
    },
});