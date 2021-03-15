import React, { useState } from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ImageBackground, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';


export default function ReformationPreview() {
    const [balance, setBalance] = useState(1.47);

    const minusBalance = () => {
        let min = 0;
        let newBalance = parseFloat(balance) - 0.1;
        if (newBalance <= min) {
            newBalance = 0;
            newBalance = newBalance.toFixed(2)
            setBalance(newBalance);
        } else {
            newBalance = newBalance.toFixed(2);
            setBalance(newBalance);
        }
        return balance;
    }

    const plusBalance = () => {
        let max = 1.47;
        let newBalance = parseFloat(balance) + 0.1;
        if (newBalance >= max) {
            setBalance(1.47);
        } else {
            newBalance = newBalance.toFixed(2);
            setBalance(newBalance);
        }
        return balance;
    }

    return (
        <View style={styles.container}>
            <View style={styles.descripView}>
                <Text style={styles.descrip}>Cash in your balance for gift cards at our favorite sustainable shops</Text>
            </View>
            <View style={styles.backgroundView}>
                <ImageBackground source={Images.blurBackground} resizeMode= 'contain' style={ [ styles.backgroundBlurView, { height: Metrics.screenHeight * 0.65, width: Metrics.screenWidth } ]}>
                    <View style={styles.localiCardView}>

                        <Image source={Images.reformation} style={styles.localiImage}></Image>

                        <Text style={{ fontSize: 30, fontWeight: 'bold'}}>Ref</Text>

                        <View style={styles.middleDescrip}>
                            <View style={styles.middleDescripTextView}>
                                <Text style={styles.middleDescripText}>Bringing sustainable fashion to everyone.</Text>
                            </View>
                            <View style={styles.locationTextView}>
                                <View style={styles.locationLine}>
                                    <Text style={styles.locationText}>In store</Text>
                                    <AntDesign name="check" size={10} color={Colors.grassGreen} />
                                </View>
                                <View style={styles.locationLine}>
                                    <Text style={styles.locationText}>Online</Text>
                                    <AntDesign name="check" size={10} color={Colors.grassGreen} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.buttonView}>
                            <TouchableOpacity onPress={() => minusBalance()}>
                                <View style={styles.editButton}>
                                    <Entypo name="minus" size={40} color="black"/>
                                </View>
                            </TouchableOpacity>
                            
                            <View style={styles.balance}>
                                <Text style={{ fontSize: 30, fontWeight: 'bold'}}>${balance}</Text>
                            </View>
                            <TouchableOpacity onPress={() => plusBalance()}>
                                <View style={styles.editButton}>
                                    <Entypo name="plus" size={40} color="black"/>
                                </View>
                            </TouchableOpacity>
                            
                        </View>

                        <View style={styles.slideToRedeemView}>
                            <View style={styles.slide}>
                                <AntDesign name="right" size={30} color="black"/>
                            </View>
                            <Text style={styles.slideText}>Slide to redeem</Text>
                        </View>

                    </View>
                </ImageBackground>
            </View>
            
        </View>
    );   
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    descripView: {
        height: 40,
        width: Metrics.screenWidth * 0.9,
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 10,
    },
    descrip: {
        fontSize: 15,
        flex: 1,
        flexWrap: 'wrap',
    },
    backgroundView: {
        marginTop: 10,
        height: Metrics.screenHeight * 0.9 - 40,
        width: Metrics.screenWidth * 0.9,
        alignItems: 'center',
    },
    backgroundBlurView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    localiCardView: {
        width: 320,
        height: 470,
        borderRadius: 15,
        backgroundColor: Colors.lightBlue,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    localiImage: {
        width: 287,
        height: 150,
        borderRadius: 15,
    },
    middleDescrip: {
        flexDirection: 'row',
        width: 320,
        height: 40,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 10,
    },
    middleDescripTextView: {
        height: 38,
        width: 190,
        flexDirection: 'row',
    },
    middleDescripText: {
        fontSize: 15,
        flex: 1,
        flexWrap: 'wrap',
    },
    locationTextView: {
        height: 30,
        width: 60, 
        justifyContent: 'space-between',
    },
    locationText: {
        fontSize: 11.21,
    },
    locationLine: {
        height: 15,
        width: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonView: {
        height: 38,
        width: 300,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
    },
    editButton: {
        height: 50,
        width: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightGrey,
    },
    balance: {
        height: 64,
        width: 108,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.mediumGrey,
    },
    slideToRedeemView: {
        marginTop: 10,
        width: 287,
        height: 54,
        borderRadius: 15,
        backgroundColor: Colors.lightGrey,
        flexDirection: 'row',
        alignItems: 'center',
    },
    slide: {
        height: 54,
        width: 54,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightGrass,
    },
    slideText: {
        fontSize: 20,
        color: Colors.darkGrey,
        marginLeft: 30,
    },
});