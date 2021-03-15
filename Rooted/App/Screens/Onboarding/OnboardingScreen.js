import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Metrics, Images } from '../../Themes';

import OnboardingComponent from '../../Components/OnboardingComponent';

export default function OnboardingScreen({navigation}) {
    const [num, setNum] = useState(1);
    const [screen, setScreen] = useState(Images.welcome1);

    const incremementScreen = () => {
        let newNum = parseFloat(num) + 1;
        setNum(newNum);

        if (num === 2) {
            setScreen(Images.welcome2);
        } else if (num === 3) {
            setScreen(Images.welcome3);
        } else if (num === 4) {
            setScreen(Images.welcome4);
        } else if (num === 5) {
            setScreen(Images.welcome5);
        } else if (num === 6) {
            navigation.navigate('Actions')
        }
    };

    return (
        <TouchableOpacity onPress={() => incremementScreen()}>
            <OnboardingComponent image={screen}/>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    container: {
        height: Metrics.screenHeight,
        width: Metrics.screenWidth,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});