import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { Metrics, Images } from '../../Themes';

import OnboardingComponent from '../../Components/OnboardingComponent';

export default function OnboardingScreen({ setOnboarded }) {
    const [num, setNum] = useState(1);
    const [screen, setScreen] = useState(Images.welcome1);

    const incremementScreen = () => {
        let newNum = parseFloat(num) + 1;
        

        if (newNum === 2) {
            setScreen(Images.welcome2);
        } else if (newNum === 3) {
            setScreen(Images.welcome3);
        } else if (newNum === 4) {
            setScreen(Images.welcome4);
        } else if (newNum === 5) {
            setScreen(Images.welcome5);
        } else if (newNum === 6) {
            setOnboarded(true);
        }
        setNum(newNum);
    };

    return (
        <View style={styles.container}>
            <View style={styles.imgView}>
                <TouchableOpacity onPress={() => incremementScreen()}>
                    <OnboardingComponent image={screen} />
                </TouchableOpacity>
            </View>
            
        </View>
            
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        height: Metrics.screenHeight,
        width: Metrics.screenWidth,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imgView: {
        height: 500,
        width: Metrics.screenWidth,
        alignItems: 'center',
        marginTop: 250,
    }
});