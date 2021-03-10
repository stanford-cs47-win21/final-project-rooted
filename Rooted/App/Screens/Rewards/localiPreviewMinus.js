import React from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ImageBackground } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function localiPreviewMinus({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.descripView}>
                <Text style={styles.descrip}>Cash in your balance for gift cards at our favorite sustainable shops</Text>
            </View>
            <View style={styles.backgroundView}>
                <ImageBackground source={Images.blurBackground} resizeMode= 'contain' style={ [ styles.backgroundBlurView, { height: Metrics.screenHeight * 0.65, width: Metrics.screenWidth } ]}>
                    <View style={styles.localiCardView}>

                        <Image source={Images.locali3} style={styles.localiImage}></Image>

                        <Text style={{ fontSize: 30, fontWeight: 'bold'}}>loCALI</Text>

                        <View style={styles.middleDescrip}>
                            <View style={styles.middleDescripTextView}>
                                <Text style={styles.middleDescripText}>Fast casual vegetarian with locally grown produce</Text>
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
                            <View style={styles.editButton}>
                                <Entypo name="minus" size={40} color="black"/>
                            </View>
                            <View style={styles.balance}>
                                <Text style={{ fontSize: 30, fontWeight: 'bold'}}>$0.47</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('localiPreview')}>
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