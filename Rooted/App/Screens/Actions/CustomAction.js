import React, {useState} from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, View, TouchableOpacity, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function CustomAction( {navigation} ) {
    const [selectedLanguage, setSelectedLanguage] = useState('1');
    const [imageAdded, setImageAdded]=  useState(false);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'left', marginTop: 10}}>Create Custom Action</Text>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.title}>
                    <TextInput
                        onChangeText={ (text) => {
                            setTitle(text);
                        }}
                        multiline={false}
                        placeholder={"Action Name"}
                        style={styles.titleInput}>
                    </TextInput>
                </View>
                <View style={styles.description}>
                    <TextInput
                        onChangeText={ (text) => {
                            setDescription(text);
                        }}
                        multiline={true}
                        placeholder={"Description"}
                        style={styles.descriptionInput}>
                    </TextInput>
                </View>
                <View style={styles.challengePick}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Estimated Difficulty</Text>
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }
                        style={styles.picker}
                        itemStyle={{height: 100}}>
                        <Picker.Item label="Easy" value="0" />
                        <Picker.Item label="Medium" value="1" />
                        <Picker.Item label="Difficult" value="2" />
                    </Picker>
                </View>
                <TouchableOpacity style={styles.photo} onPress={()=>{
                    setImageAdded(true);
                }}>
                    {imageAdded ? <Image source={Images['recycle']} style={[styles.photo, {borderWidth: 0} ]}></Image>
                    : <MaterialCommunityIcons name="camera-plus-outline" size={110} color="black" />}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                                if (description !== '' && imageAdded && title !== '') {
                                    console.log("Pressed");
                                    var actionInfo = {
                                        actionTitle : title,
                                        difficulty : parseInt(selectedLanguage),
                                        actionDescription : description,
                                        image : 'recycle',
                                    }
                                    navigation.navigate('Point Calibrator', actionInfo);
                                } else if (description === '') {
                                    Alert.alert('Please add a description')
                                } else if (title === ''){
                                    Alert.alert('Please add a title')
                                } else {
                                    Alert.alert('Please add a photo')
                                }
                                
                }}>
                    <View style={!(description !== '' && imageAdded && title !== '') ? styles.customButtonDisabled : styles.customButton}>
                        <Text style={styles.customButtonText}>CALIBRATE POINTS</Text>
                    </View>
            </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headerContainer: {
        width: Metrics.screenWidth* 0.9,
    },
    infoContainer : {
        height : Metrics.screenHeight * .72,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title : {
        height: Metrics.screenHeight * .05,
        alignContent: "center",
        justifyContent: 'center',   
        margin: 10,
        width: Metrics.screenWidth * 0.9,
    },
    description : {
        height: Metrics.screenHeight * .1,
        alignContent: "center",
        justifyContent: 'center',   
        margin: 20
    },
    
    titleInput : {
        backgroundColor: Colors.lightGrey,
        height: Metrics.screenHeight * .05,
        width: Metrics.screenWidth  * .9,
        borderRadius: 15,
        borderLeftWidth: 10,
        borderTopWidth: 5,
        borderRightWidth: 10,
        borderColor: Colors.lightGrey,
        fontSize: 20,
        marginTop: 20,
    },
    descriptionInput : {
        backgroundColor: Colors.lightGrey,
        height: Metrics.screenHeight * .1,
        width: Metrics.screenWidth  * .9,
        borderRadius: 15,
        borderLeftWidth: 10,
        borderTopWidth: 5,
        borderRightWidth: 10,
        borderColor: Colors.lightGrey,
        fontSize: 16
    },
    picker : {
        marginTop: 10,
    },
    challengePick : {
        marginTop: 20,
    },
    photo : {
        height: 175,
        width: 175,
        borderWidth: 1,
        borderColor: Colors.mediumGrey,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButton: {
        width: 250,
        height: 50,
        borderRadius: 125,
        backgroundColor: Colors.darkGreen,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonDisabled: {
        width: 250,
        height: 50,
        borderRadius: 125,
        backgroundColor: Colors.lightGrey,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
})