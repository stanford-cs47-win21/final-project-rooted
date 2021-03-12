import React, { useState } from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ImageBackground, TouchableOpacity } from 'react-native';

import JoinTeamComponent from '../../Components/JoinTeamComponent';

export default function joinTeamScreen() {
    return (
        <JoinTeamComponent title="Suggested for You" 
        subline="Teams you might be interested in."/>
    );
}