import React from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ImageBackground, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';


export default function Dashboard() {
    return (
        <View style={styles.container}>
            <Text>Dashboard!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 569,
        height: 346,
    },
});