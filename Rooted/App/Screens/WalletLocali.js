import React from 'react';
import { Colors, Metrics, Images } from '../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function WalletOverview() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.wallet}>
                        <View style={{ alignItems: 'flex-start', width: Metrics.screenWidth * 0.9 }}>
                            <Text style={styles.header}>Gift Cards</Text>
                        </View>
                        <Image source={Images.locali} style={styles.giftcards}></Image>
                    </View>
                    <View style={styles.hotItemSection}>
                        <Text style={styles.header2}>Hot Items</Text>
                        <View style={styles.hotItemListing}>
                                <Image source={Images.burger} style={{ width: 120, height: 120}}></Image>
                                <View style={styles.itemDetails}>
                                    <Text style={{ fontSize: 18 }}>Meatless Burger</Text>
                                    <Image source={Images.stars} style={{ width: 80, height: 20, resizeMode: 'contain' }}></Image>
                                    <Text>$6.99</Text>
                                    <View style={styles.orderButton}>
                                        <Text>Order Now</Text>
                                    </View>
                                </View>
                        </View>
                    </View>
                    <View style={styles.wallet}>
                        <Image source={Images.cycles} style={styles.giftcards}></Image>
                    </View>
                    <View style={styles.additionalBalance}>
                        <View style={{ alignItems: 'flex-start', width: Metrics.screenWidth * 0.9 }}>
                                <Text style={styles.header}>Additional Balance</Text>
                        </View>
                        <Text style={styles.balance}>$1.47</Text>
                        <View style={styles.redeemButton}>
                            <Text style={styles.redeemText}>REDEEM</Text>
                        </View>
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
        marginTop: 20,
    },
    wallet: {
        width: Metrics.screenWidth * 0.9,
        height: 300,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    giftcards: {
        width: Metrics.screenWidth * 0.9,
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
        color: Colors.lightGrass,
    },
    redeemButton: {
        width: Metrics.screenWidth * 0.4,
        height: 35,
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
    hotItemSection: {
        height: 150,
        width: Metrics.screenWidth * 0.9,
        marginTop: 30,
        marginBottom: 10,
    },
    header2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    hotItemListing: {
        flexDirection: 'row',
        height: 120,
        width: Metrics.screenWidth * 0.9,
        backgroundColor: 'white',
    },
    itemDetails: {
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginLeft: 15, 
    },
    orderButton: {
        width: 100,
        height: 25,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.mediumGrey,
        alignItems: 'center',
        justifyContent: 'center',
    },
});