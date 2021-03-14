import React, {useState} from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function CustomAction( {navigation} ) {
    const [selectedLanguage, setSelectedLanguage] = useState('Medium');
    const [imageAdded, setImageAdded]=  useState(false);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    return (
        <View style={styles.container}>
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
                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Estimated Difficulty:</Text>
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }
                        style={styles.picker}>
                        <Picker.Item label="Easy" value="Easy" />
                        <Picker.Item label="Medium" value="Medium" />
                        <Picker.Item label="Difficult" value="Difficult" />
                    </Picker>
                </View>
                <TouchableOpacity style={styles.photo} onPress={()=>{
                    setImageAdded(true);
                }}>
                    {imageAdded ? <Image source={Images['recycle']} style={styles.photo}></Image>
                    : <MaterialCommunityIcons name="camera-plus-outline" size={110} color="black" />}
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => {
                                if (description !== '' && imageAdded && title !== '') {
                                    console.log("Pressed");
                                    var postInfo = {
                                        profile : 'Clara MacAvoy',
                                        challenge : selectedLanguage,
                                        timePosted : 'now',
                                        description : description,
                                        image : 'recycle',
                                        likes : 0,
                                        comments : []
                                    }
                                    navigation.navigate('Point Calibrator', postInfo);
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
    title : {
        height: Metrics.screenHeight * .05,
        alignContent: "center",
        justifyContent: 'center',   
        margin: 10
    },
    description : {
        height: Metrics.screenHeight * .1,
        alignContent: "center",
        justifyContent: 'center',   
        margin: 10
    },
    descriptionInput : {
        backgroundColor: Colors.lightGrey,
        height: Metrics.screenHeight * .1,
        width: Metrics.screenWidth  * .85,
        borderRadius: 20,
        borderLeftWidth: 10,
        borderTopWidth: 5,
        borderRightWidth: 10,
        borderColor: Colors.lightGrey,
        fontSize: 16
    },
    titleInput : {
        backgroundColor: Colors.lightGrey,
        height: Metrics.screenHeight * .05,
        width: Metrics.screenWidth  * .85,
        borderRadius: 20,
        borderLeftWidth: 10,
        borderTopWidth: 5,
        borderRightWidth: 10,
        borderColor: Colors.lightGrey,
        fontSize: 24
    },
    customButtonBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    customButton: {
        width: 290,
        height: 60,
        borderRadius: 20,
        backgroundColor: Colors.darkGreen,
        margin: 0,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonDisabled: {
        width: 290,
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
    photo : {
        height: 175,
        width: 175,
        borderWidth: 4,
        borderColor: Colors.darkGrey,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    picker : {
        marginTop: -20,
        marginBottom: -20
    },
    challengePick : {
        marginTop: 10
    }
})