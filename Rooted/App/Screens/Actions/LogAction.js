import React, {useState} from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';

var imageAdded = true;
var description = '';
var disabled = true;


export default function LogAction( {route, navigation} ) {
    var action = route.params;
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [disabled, setDisabled] = useState(true);
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <View style={styles.title}>
                    <Text style={{ fontSize: 32, textAlign: 'center' }}>{action.title}</Text>
                </View>
                <View style={styles.title}>
                    <Text style={{ fontSize: 24, textAlign: 'center', color: Colors.grassGreen }}>{action.pts}</Text>
                </View>
                <View style={styles.title}>
                    <Text style={{ fontSize: 18, fontStyle: 'italic', textAlign: 'center' }}>{action.description}</Text>
                </View>
                <View style={styles.description}>
                    <TextInput
                        onChangeText={ (text) => {
                            description = text;
                            if (text !== '' && imageAdded) {
                                setDisabled(false);
                            }
                        }}
                        multiline={true}
                        placeholder={"Caption your action"}
                        style={styles.descriptionInput}>
                    </TextInput>
                </View>
                <View>
                    <Text style={{ fontSize: 18}}>Add Points to this Challenge:</Text>
                    <Picker
                        selectedValue={selectedLanguage ? selectedLanguage : 'energyMarathon'}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Stanford Eco Week" value="stanfordEcoWeek" />
                        <Picker.Item label="Energy Marathon" value="energyMarathon" />
                        <Picker.Item label="Green Revolution" value="greenRevolution" />
                    </Picker>
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                                if (description !== '' && photoCompleted) {
                                    console.log("Pressed");
                                    global.activitiesList = ["Hello!"];
                                    navigation.navigate('Custom Action');
                                } else if (description === '') {
                                    Alert.alert('Please add a description')
                                } else  {
                                    Alert.alert('Please add a photo')
                                }
                                
                }}>
                    <View style={disabled ? styles.customButtonDisabled : styles.customButton}>
                        <Text style={styles.customButtonText}>COMPLETE</Text>
                    </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    infoContainer : {
        height : Metrics.screenHeight * .72,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    description : {
        height: Metrics.screenHeight * .1,
        alignContent: "center",
        justifyContent: 'center',   
     
    },
    descriptionInput : {
        backgroundColor: Colors.lightGrey,
        height: Metrics.screenHeight * .1,
        width: Metrics.screenWidth  * .85,
        borderRadius: 20,
        borderLeftWidth: 10,
        borderTopWidth: 5,
        borderRightWidth: 10,
        borderColor: Colors.lightGrey
    },
    customButtonBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    customButton: {
        width: 190,
        height: 60,
        borderRadius: 20,
        backgroundColor: Colors.darkGreen,
        margin: 0,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonDisabled: {
        width: 190,
        height: 60,
        borderRadius: 20,
        backgroundColor: Colors.lightGrey,
        margin: 0,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    title : {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: Metrics.screenWidth * 0.9,
    },
})