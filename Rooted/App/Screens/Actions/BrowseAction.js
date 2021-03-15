import React, {useState} from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function BrowseAction( {navigation} ) {
    const [varRan2, setVarRan2] = useState(0);

    return (
            
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'left', marginTop: 10}}>Browse Actions</Text>
            </View>
            

            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.tasks}>
                                {global.actionsAvailable.map( (action, index) => (
                        <TouchableOpacity key={index} onPress={() => {
                                    global.actionsInProgress.unshift(action);
                                    console.log(global.actionsInProgress)
                                    global.updateActionCenter();
                                    global.actionsAvailable.splice(index, 1);
                                    setVarRan2(varRan2 + 1);
                                }}>
                            <View style={styles.taskView}>
                                <Image source={Images[action.image]} style={styles.taskPhoto}></Image>
                                <View style={styles.bodyTextView}>
                                    <Text style={styles.titleText}>{action.title}</Text>
                                    <Text style={styles.ptsText}>{action.pts + " points"}</Text>
                                </View>
                                <AntDesign name="pluscircleo" size={34} color={Colors.darkGrey} style={{marginLeft: 10, marginRight: 10}}/>
                            </View>
                        </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
        
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: Metrics.screenWidth* 0.9,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
    },
    title: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
        height: 40,
        marginTop: 25,
        marginBottom: 10,
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
        borderRadius: 15,
        margin: 5,
        padding: 5,
        backgroundColor: Colors.lightBlue,
    },
    bodyTextView: {
        width: 200,
    },
    titleText: {
        fontSize: 15,
    },
    ptsText: {
        fontSize: 12,
        color: Colors.darkGrey,
    },
    taskPhoto: {
        height: Metrics.screenHeight * 0.07,
        width: Metrics.screenHeight * 0.07,
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
    }
});