import React from 'react';
import { Colors, Metrics, Images } from '../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ImageBackground, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

export default function Feed() {
    return (
        <View style={styles.itemView}>
            <Text>Hello, world!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemView: {
        height: 569,
        height: 346,
    },
});