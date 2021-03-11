import React from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ImageBackground, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';


export default function Actions() {
    return (
        <View style={styles.container}>
            <Text>Actions!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 569,
        height: 346,
    },
});