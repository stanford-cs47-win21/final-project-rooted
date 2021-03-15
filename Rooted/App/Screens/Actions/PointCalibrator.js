import React, {useState} from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ProgressBar from 'react-native-progress/Bar';

export default function PointCalibrator( {route, navigation} ) {
    var actionInfo = route.params
    var presetDifficulties  = [20, 50, 100];
    var action = {
        title : actionInfo.actionTitle,
        description : actionInfo.description,
        pts : presetDifficulties[actionInfo.difficulty],
        image : actionInfo.image
    }
    const [progressAmt, setProgressAmt] = useState(.3);
    const [comparingAction, setComparingAction] = useState(global.actionsAvailable[0]);
    const [points, setPoints] = useState(action.pts);
    const [numCompares, setNumCompares] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={{fontSize:18, marginBottom: 5}}>{"Which is harder?"}</Text>
            <TouchableOpacity onPress={ () => {
                console.log(points);
                if (numCompares >= 1) {
                    action.pts = points + comparingAction.pts / 2;
                    navigation.navigate('Action Created', action)
                } else {
                    setPoints(points + comparingAction.pts / 2);
                    setNumCompares(numCompares + 1);
                    setProgressAmt(.7)
                    setComparingAction(global.actionsAvailable[1])
                }
            }
            }>
                <Image source={Images[action.image]} style={styles.image}></Image>
                <Text style={{fontSize: 22, textAlign: 'center'}}>{action.title}</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 36}}>vs:</Text>
            <TouchableOpacity onPress={ () => {
                console.log(points);
                if (numCompares >= 1) {
                    if (points < comparingAction.pts) {
                        action.pts = points;
                    } else {
                        var newPoints = comparingAction.pts  - points / 2
                        newPoints = newPoints < 10 ? 10 : newPoints;
                        action.pts = newPoints;
                    }
                    navigation.navigate('Action Created', action)
                } else {
                    if (points < comparingAction.pts) {
                        setPoints(points);
                    } else {
                        var newPoints = comparingAction.pts  - points / 2
                        newPoints = newPoints < 10 ? 10 : newPoints
                        setPoints(newPoints);
                    }
                    setNumCompares(numCompares + 1);
                    setProgressAmt(.7)
                    setComparingAction(global.actionsAvailable[1])
                }
            }
            }>
                <Image source={Images[comparingAction.image]} style={styles.image}></Image>
                <Text style={{fontSize: 22, textAlign: 'center'}}>{comparingAction.title}</Text>
            </TouchableOpacity>
            <View style={styles.progressBar}>
                <Text style={{fontSize:22}}>Calibrating...</Text>
                <ProgressBar progress={progressAmt} width={200} height={20} color={Colors.lightGrass}></ProgressBar>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20
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
        backgroundColor: Colors.lightBlue,
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
    customButtonBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    customButton: {
        width: 175,
        height: 60,
        borderRadius: 20,
        backgroundColor: Colors.darkGreen,
        margin: 0,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
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
    tasks: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskView: {
        flexDirection: 'row',
        height: Metrics.screenHeight * 0.085,
        width: Metrics.screenWidth * .9,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 20,
        margin: 5,
        borderWidth: 2,
        borderColor: Colors.lightGrey,
    },
    bodyTextView: {
        width: 200,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    ptsText: {
        fontSize: 12,
    },
    image: {
        height: Metrics.screenHeight * 0.25,
        width: Metrics.screenHeight * 0.25,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5
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
    progressBar : {
        margin : 50
    }
});