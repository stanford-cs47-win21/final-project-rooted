import React, { useState } from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';


export default function DashboardTeamsOverview( { navigation }) {
    const [button, setButton] = useState(Images.plusButton);

    const joinTeam = () => {
        if (button === Images.plusButton) {
            setButton(Images.expandedButton);
        } else {
            navigation.navigate('joinTeamScreen');
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
                    <View style={styles.teamsButton}>
                        <Text style={[ styles.buttonText, { fontWeight: 'bold' } ]}>TEAMS</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ChallengesOverview')}>
                        <View style={styles.challengeButton}>
                            <Text style={[ styles.buttonText, { color: Colors.darkGrey } ]}>CHALLENGES</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.centerView}>
                    <View style={styles.allTeams}>

                        <TouchableOpacity onPress={() => navigation.navigate('TeamScreen')}>
                            <View style={styles.teamView}>
                                <Text style={{ fontWeight: 'bold'}}>1</Text>
                                <Image source={Images.sustainabiliTeam} style={styles.teamPhoto}></Image>
                                <View style={styles.bodyTextView}>
                                    <Text style={styles.bodyText}>SustainabiliTeam</Text>
                                </View>
                                <Image source={Images.goButton} style={styles.goButton}></Image>
                            </View>
                        </TouchableOpacity>
                        

                        <View style={styles.teamView}>
                            <Text style={{ fontWeight: 'bold'}}>2</Text>
                            <Image source={Images.ecobros} style={styles.teamPhoto}></Image>
                            <View style={styles.bodyTextView}>
                                <Text style={styles.bodyText}>Eco Bros</Text>
                            </View>
                            <Image source={Images.goButton} style={styles.goButton}></Image>
                        </View>

                        <View style={styles.teamView}>
                            <Text style={{ fontWeight: 'bold'}}>3</Text>
                            <Image source={Images.teamSunflower} style={styles.teamPhoto}></Image>
                            <View style={styles.bodyTextView}>
                                <Text style={styles.bodyText}>Team Sunflower</Text>
                            </View>
                            <Image source={Images.goButton} style={styles.goButton}></Image>
                        </View>

                        <View style={styles.teamView}>
                            <Text style={{ fontWeight: 'bold'}}>4</Text>
                            <Image source={Images.powerRangers} style={styles.teamPhoto}></Image>
                            <View style={styles.bodyTextView}>
                                <Text style={styles.bodyText}>Power Rangers</Text>
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
        // shadowOffset: {
        //     width: 1,
        //     height: 1,
        // },
        // shadowOpacity: 0.15,
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
    allTeams: {
        width: 320,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    teamView: {
        width: 290,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    bodyTextView: {
        width: 130,
    },
    bodyText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    teamPhoto: {
        height: 40,
        width: 40,
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
    }
});