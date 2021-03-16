import React, {useState} from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
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
            <View style={styles.headerContainer}>
                <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'left' }}>Which is harder?</Text>
            </View>

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
                <Text style={{fontSize: 20, textAlign: 'center', marginTop: 10 }}>{action.title}</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 36, marginTop: 10, marginBottom: 20}}>vs</Text>
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
                <View style={styles.compareImgBox}>
                    <Image source={Images[comparingAction.image]} style={styles.image}></Image>
                    <Text style={{fontSize: 20, textAlign: 'center', marginTop: 10}}>{comparingAction.title}</Text>
                </View>
                
            </TouchableOpacity>

            <View style={styles.progressBar}>
                <Text style={{ fontSize:22, fontWeight: 'bold', marginBottom: 10,}}>Calibrating...</Text>
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
    },
    compareImgBox: {
        alignItems: 'center',
    },  
    headerContainer: {
        width: Metrics.screenWidth* 0.9,
        margin: 20,
    },
    image: {
        height: Metrics.screenHeight * 0.2,
        width: Metrics.screenHeight * 0.2,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
    },
    progressBar : {
        margin : 30,
        width: Metrics.screenWidth * 0.9,
    }
});