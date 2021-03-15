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
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: "right"}}>Post to</Text></View>
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }
                        style={styles.picker}
                        itemStyle={{height: 80}}>
                        <Picker.Item label="Public" value="Public" />
                        <Picker.Item label="Friends" value="Friends" />
                    </Picker>
            </View>
            <View style={styles.customButtonBox}>
                <Text style={{fontSize: 15 }}>Is this action ready to post?</Text>
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
    customButtonBox: {
        alignItems: 'center',
        marginTop: 5
    },
    customButton: {
        width: 150,
        height: 30,
        borderRadius: 90,
        backgroundColor: Colors.grassGreen,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customBackButton: {
        width: 115,
        height: 30,
        borderRadius: 90,
        backgroundColor: Colors.darkGrey,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonText: {
        color: 'white',
        fontSize: 15,
    },
    picker : {
        width : Metrics.screenWidth * .5,
        marginRight: 100,
    },
    post : {
        width : Metrics.screenWidth * .4,
        justifyContent: 'center',
        alignContent: 'flex-end',
        marginRight: 65
    },
    challengePick : {
        flexDirection : 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    }
});