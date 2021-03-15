import React, {useState} from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FeedItemPreview from '../../Components/FeedItemPreview';



export default function CustomAction( {route, navigation} ) {
    var action = route.params;
    const [selectedLanguage, setSelectedLanguage] = useState('Public');
    return (
        <View style={styles.container}>
            <View>{FeedItemPreview(action)}</View>
            <View style={styles.challengePick}>
                    <View style={styles.post}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: "right"}}>Post to:</Text></View>
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }
                        style={styles.picker}>
                        <Picker.Item label="Public" value="Public" />
                        <Picker.Item label="Friends" value="Friends" />
                    </Picker>
            </View>
            <View style={styles.customButtonBox}>
                <Text style={{fontSize: 15}}>Is this action ready to post?</Text>
                <TouchableOpacity onPress={() => {
                                action.id = global.actionsCompleted.length + 1;
                                global.actionsCompleted.unshift(action);
                                if (global.updateFeed) {
                                    global.updateFeed();
                                }
                                global.actionsInProgress.splice(action.index, 1);
                                global.updateActionCenter();
                                navigation.popToTop();
                                navigation.navigate('Feed')
                                
                }}>
                    <View style={styles.customButton}>
                        <Text style={styles.customButtonText}>YES, POST</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                                navigation.goBack();
                                
                }}>
                    <View style={styles.customBackButton}>
                        <Text style={styles.customButtonText}>NO, GO BACK</Text>
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
        height: Metrics.screenHeight*.7
    },
    title: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
        height: 40,
        marginTop: 25,
        marginBottom: 10,
    },
    actionsProgressOverview: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 200,
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
        backgroundColor: Colors.lightGrey,
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
        alignItems: 'center',
        marginTop: 20
    },
    customButton: {
        width: 200,
        height: 48,
        borderRadius: 20,
        backgroundColor: Colors.darkGreen,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customBackButton: {
        width: 200,
        height: 48,
        borderRadius: 20,
        backgroundColor: Colors.darkGrey,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonText: {
        color: 'white',
        fontSize: 20,
    },
    picker : {
        marginTop: -60,
        width : Metrics.screenWidth * .5,
        marginRight: 100,
        marginBottom: -60
    },
    post : {
        width : Metrics.screenWidth * .4,
        justifyContent: 'center',
        alignContent: 'flex-end',
        marginRight: 50
    },
    challengePick : {
        marginTop: 10,
        flexDirection : 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    }
});