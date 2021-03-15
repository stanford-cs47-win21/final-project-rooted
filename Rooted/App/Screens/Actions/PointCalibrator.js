import React from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function PointCalibrator( {route, navigation} ) {
    var actionInfo = route.params
    var presetDifficulties  = [20, 50, 100];
    var action = {
        title : actionInfo.title,
        description : actionInfo,
        pts : presetDifficulties[actionInfo.difficulty],
        image : actionInfo.image
    }
    return (
        <View><Text>{"Default Points: " + action.pts}</Text></View>
    );
}