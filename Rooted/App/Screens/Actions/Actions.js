import React, {useState} from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';

export default function Action( {navigation} ) {
    const [varRan, setVarRan] = useState(0);
    global.updateActionCenter = () => {
        setVarRan(varRan+1);
    }
    return (
            
        <View style={styles.container}>
            <View style={styles.pointsToLead}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Points to Take the Lead</Text>
            </View>
            <View style={styles.percentageView}>
                <View style={styles.percentageCard} >
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: Colors.mediumBlue }}>Stanford Eco Week</Text>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.mediumBlue}}>273</Text>
                    <Text style={{ textAlign: 'center', color: Colors.mediumBlue }}>points</Text>
                </View>
                <View style={styles.percentageCard}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: Colors.grassGreen }}>Energy Marathon</Text>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.grassGreen}}>50</Text>
                    <Text style={{ textAlign: 'center', color: Colors.grassGreen }}>points</Text>
                </View>
                <View style={styles.percentageCard}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: Colors.darkGreen }}>Green Revolution</Text>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.darkGreen}}>35</Text>
                    <Text style={{ textAlign: 'center', color: Colors.darkGreen }}>points</Text>
                </View>
            </View>
            
            <View style={styles.actionsProgressOverview}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Actions in Progress</Text>
            </View>
            <ScrollView>
                <View style={styles.tasks}>
                    {global.actionsInProgress.map( (action, index) => (
                    <TouchableOpacity key={index} onPress={() => {
                        action.index = index;
                        navigation.navigate('Complete Action', action);
                    }}>
                        <View style={styles.taskView}>
                            <Image source={Images[action.image]} style={styles.taskPhoto}></Image>
                            <View style={styles.bodyTextView}>
                                <Text style={styles.titleText}>{action.title}</Text>
                                <Text style={styles.ptsText}>{action.pts + " points"}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    ))}
                </View>
            
            </ScrollView>
            <View style={styles.customButtonBox}>
                <TouchableOpacity onPress={() => {
                                console.log("Pressed");
                                global.activitiesList = ["Hello!"];
                    navigation.navigate('Custom Action');
                }}>
                    <View style={styles.customButton}>
                        <Text style={styles.customButtonText}>CREATE CUSTOM ACTION</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                                console.log("Pressed");
                                global.activitiesList = ["Hello!"];
                    navigation.navigate('Browse Actions');
                }}>
                    <View style={styles.customButton}>
                        <Text style={styles.customButtonText}>BROWSE FOR ACTIONS</Text>
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
        height: Metrics.screenHeight * .68
    },
    title: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
        height: 40,
        marginTop: 25,
        marginBottom: 10,
    },
    pointsToLead: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 10,
        marginTop: 15,
        width: Metrics.screenWidth * 0.9,
    },
    actionsProgressOverview: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 10,
        width: Metrics.screenWidth * 0.9,
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
        borderRadius: 15,
        padding: 5,
    },
    tasks: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskView: {
        flexDirection: 'row',
        height: Metrics.screenHeight * 0.08,
        width: Metrics.screenWidth * .9,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 15,
        margin: 5,
        backgroundColor: Colors.lightBlue,
    },
    taskPhoto: {
        height: Metrics.screenHeight * 0.07,
        width: Metrics.screenHeight * 0.07,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5
    },
    bodyTextView: {
        width: 250,
    },
    titleText: {
        fontSize: 15,
    },
    ptsText: {
        fontSize: 12,
        color: Colors.darkGrey,
        marginTop: 5,
    },
    customButtonBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Metrics.screenWidth * 0.9,
    },
    customButton: {
        width: 155,
        height: 45,
        borderRadius: 160/2,
        backgroundColor: Colors.grassGreen,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    },
});