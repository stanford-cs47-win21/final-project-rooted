import React from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

export default function Stores({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={styles.descripView}>
                <Text style={styles.descrip}>Cash in your balance for gift cards at our favorite sustainable shops</Text>
            </View>

            
            <View style={styles.storeView}>
                <Image source={Images.locali2} style={styles.storeImage}></Image>
                <View style={styles.storeDescripView}>
                    <Text style={styles.storeTitle}>loCali</Text>
                    <View style={styles.storeDescripTextView}>
                        <Text style={styles.storeDescripText}>California vegetarian</Text>
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
            </View>
            
            
            <TouchableOpacity onPress={() => navigation.navigate('ReformationPreview')}>
                <View style={styles.storeView}>
                    <Image source={Images.reformation} style={styles.storeImage}></Image>
                    <View style={styles.storeDescripView}>
                        <Text style={styles.storeTitle}>Ref</Text>
                        <View style={styles.storeDescripTextView}>
                            <Text style={styles.storeDescripText}>Sustainable fashion</Text>
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
                </View>
            </TouchableOpacity>
            
            <View style={styles.storeView}>
                <Image source={Images.ecoroots} style={styles.storeImage}></Image>
                <View style={styles.storeDescripView}>
                    <Text style={styles.storeTitle}>Eco Roots</Text>
                    <View style={styles.storeDescripTextView}>
                        <Text style={styles.storeDescripText}>Plastic-free everyday-use products</Text>
                    </View>
                    <View style={styles.locationTextView}>
                        <View style={styles.locationLine}>
                            <Text style={styles.locationText}>In store</Text>
                            <Entypo name="cross" size={10} color="red" />
                        </View>
                        <View style={styles.locationLine}>
                            <Text style={styles.locationText}>Online</Text>
                            <AntDesign name="check" size={10} color={Colors.grassGreen} />
                        </View>
                    </View>
                </View>
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
    storeView: {
        width: Metrics.screenWidth * 0.9,
        height: 161,
        borderRadius: 14.01,
        backgroundColor: Colors.lightBlue,
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
    },
    storeImage: {
        width: 140.14,
        height: 140.14,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderRadius: 14.01,
        marginLeft: 10,
    },
    storeDescripView: {
        width: Metrics.screenWidth * 0.9 - 180,
        height: 140.14,
        marginLeft: 20,
        justifyContent: 'space-evenly',
    },
    storeTitle: {
        fontSize: 22,
    },
    storeDescripTextView: {
        flexDirection: 'row',
        height: 40,
        width: Metrics.screenWidth * 0.9 - 250,
    },
    storeDescripText: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 14.01,
    },
    locationTextView: {
        height: 30,
        width: 100, 
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
});