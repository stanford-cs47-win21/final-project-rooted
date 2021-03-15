import React from 'react';
import { Colors, Metrics, Images } from '../Themes';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

export default function OnboardingComponent(props) {
    return (
        <Image source={props.image} style={styles.image}></Image>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 195,
        borderRadius: 15,
    },
});