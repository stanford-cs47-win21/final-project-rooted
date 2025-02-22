import React, { useState } from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';


export default function ChallengesOverview( { navigation }) {
    const [button, setButton] = useState(Images.plusButton);

    const joinTeam = () => {
        if (button === Images.plusButton) {
            setButton(Images.expandedButton);
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
            source={Images.dashboardBackground} 
            resizeMode='contain' 
            style={ [ styles.dashBack, { 
                height: Metrics.screenHeight, 
                width: Metrics.screenWidth 
                } 
            ]}
            >
                <View style={styles.combinedButtonsView}>
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                        <View style={styles.teamsButton}>
                            <Text style={[ styles.buttonText, { color: Colors.darkGrey } ]}>TEAMS</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <View style={styles.challengeButton}>
                        <Text style={[ styles.buttonText, { fontWeight: 'bold' } ]}>CHALLENGES</Text>
                    </View>
                </View>

                <View style={styles.centerView}>
                    <View style={styles.allChall}>

                        <TouchableOpacity onPress={() => navigation.navigate('Leaderboard')}>
                            <View style={styles.challView}>
                                <Text style={{ fontWeight: 'bold'}}>1</Text>
                                <Image source={Images.ecoweek} style={styles.challPhoto}></Image>
                                <View style={styles.listingDescripContainer}>
                                    <Text style={styles.currChallName}>Stanford Eco Week</Text>
                                    <Text style={styles.currChallDescrip}>5 days 1:21:33 left</Text>
                                </View>
                                <Image source={Images.goButton} style={styles.goButton}></Image>
                            </View>
                        </TouchableOpacity>
                        
                        <View style={styles.challView}>
                            <Text style={{ fontWeight: 'bold'}}>2</Text>
                            <Image source={Images.energyMarathon} style={styles.challPhoto}></Image>
                            <View style={styles.listingDescripContainer}>
                                <Text style={styles.currChallName}>Energy Marathon</Text>
                                <Text style={styles.currChallDescrip}>0 days 23:10:04 left</Text>
                            </View>
                            <Image source={Images.goButton} style={styles.goButton}></Image>
                        </View>
  
                    </View>
                    <TouchableOpacity onPress={() => joinTeam()}>
                        <Image source={button} style={styles.plusButton}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Metrics.screenHeight,
        width: Metrics.screenWidth,
    },
    dashBack: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    combinedButtonsView: {
        height: 45,
        width: 316,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 22.5,
        marginTop: 50,
        marginBottom: 30, 
    },
    teamsButton: {
        height: 45,
        width: 316/2,
        borderTopLeftRadius: 22.5,
        borderBottomLeftRadius: 22.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
        borderRightColor: Colors.lightGrey,
        backgroundColor: 'white',
        borderLeftWidth: 0.5,
        borderLeftColor: Colors.lightGrey,
        borderTopWidth: 0.5,
        borderTopColor: Colors.lightGrey,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.lightGrey,
    },
    challengeButton: {
        height: 45,
        width: 316/2,
        borderTopRightRadius: 22.5,
        borderBottomRightRadius: 22.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 0.5,
        borderColor: Colors.lightGrey,
        backgroundColor: 'white',
        borderRightWidth: 0.5,
        borderRightColor: Colors.lightGrey,
        borderTopWidth: 0.5,
        borderTopColor: Colors.lightGrey,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.lightGrey,
    },
    buttonText: {
        fontSize: 14,
    },
    centerView: {
        width: 319,
        height: 500,
        borderRadius: 10,
        backgroundColor: Colors.lightBlue,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    allChall: {
        width: 320,
        height: 250,
        alignItems: 'center',
        paddingTop: 10,
    },
    challView: {
        width: 290,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    challPhoto: {
        width: 50,
        resizeMode: 'contain',
    },
    goButton: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    plusButton: {
        height: 62,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    listingDescripContainer: {
        width: 150,
    },
    currChallName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    currChallDescrip: {
        fontSize: 12,
        color: Colors.mediumGrey,
    },
});