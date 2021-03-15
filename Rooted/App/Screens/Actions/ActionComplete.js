import React from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

export default function ActionComplete( {route, navigation} ) {
    var action = route.params
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center', margin: 20}}>{"Action Created!"}</Text>
            <View >
                <Image source={Images[action.image]} style={styles.image}></Image>
                <Text style={{fontSize: 30, textAlign: 'center', margin: 15}}>{action.title}</Text>
                <Text style={{fontSize: 22, textAlign: 'center', color: Colors.grassGreen }}>{action.pts + " points"}</Text>
            </View>
            <TouchableOpacity onPress={() => {
                                global.actionsInProgress.unshift(action);
                                console.log(global.actionsInProgress)
                                global.updateActionCenter();
                                navigation.navigate('Action Center')
                            }}>
                <View style={styles.customButton}><Text style={styles.customButtonText}>DONE</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: Metrics.screenHeight*.72
    },
    title: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
        height: 40,
        marginTop: 20,
        marginBottom: 10,
    },
    customButtonBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    customButton: {
        width: 175,
        height: 50,
        borderRadius: 175/2,
        backgroundColor: Colors.grassGreen,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    image: {
        height: Metrics.screenHeight * 0.35,
        width: Metrics.screenHeight * 0.35,
        borderRadius: 15,
        margin: 20,
    },
});