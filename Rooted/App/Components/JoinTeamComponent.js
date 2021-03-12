import React from 'react';
import { Colors, Metrics, Images } from '../Themes';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

// title, subline, image

export default function JoinTeamComponent(props) {
    return (
        <View style={styles.container}>
            <View style={styles.toplineViewView}>
                <View style={styles.toplineView}>
                    <Text style={styles.titleText}>{props.title}</Text>
                    <Text style={styles.seeAllText}>See All</Text>
                </View>
                <Text style={styles.sublineText}>{props.subline}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 600,
        width: 329,
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    toplineViewView: {
        height: 50,
        width: 329,
        alignItems: 'flex-start',
        backgroundColor: 'green'
    },
    toplineView: {
        height: 24,
        width: 329,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    seeAllText: {
        fontSize: 14,
        color: Colors.lightGrey,
    },
    sublineText: {
        fontSize: 14,
        color: Colors.mediumGrey,
    },
    featuredTeamView: {
        height: 272,
        width: 328,
        borderRadius: 10,
    },
    featuredTeamImage: {
        height: 200,
        width: 328,
        resizeMode: 'contain',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    featuredTeamDescrip: {
        height: 272 - 234,

    },
});