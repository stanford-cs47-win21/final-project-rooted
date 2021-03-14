import React, {useState} from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function LogAction( {route, navigation} ) {
    var action = route.params;
    const [selectedLanguage, setSelectedLanguage] = useState('Energy Marathon');
    const [imageAdded, setImageAdded]=  useState(false);
    const [description, setDescription] = useState('');
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
                <TouchableOpacity style={styles.photo} onPress={()=>{
                    setImageAdded(true);
                }}>
                    {imageAdded ? <Image source={Images['recycle']} style={styles.photo}></Image>
                    : <MaterialCommunityIcons name="camera-plus-outline" size={110} color="black" />}
                </TouchableOpacity>
                <View style={styles.description}>
                    <TextInput
                        onChangeText={ (text) => {
                            setDescription(text);
                        }}
                        multiline={true}
                        placeholder={"Caption your action"}
                        style={styles.descriptionInput}>
                    </TextInput>
                </View>
                <View style={styles.challengePick}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Add Points to this Challenge:</Text>
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }
                        style={styles.picker}>
                        <Picker.Item label="Stanford Eco Week" value="Stanford EcoWeek" />
                        <Picker.Item label="Energy Marathon" value="Energy Marathon" />
                        <Picker.Item label="Green Revolution" value="Green Revolution" />
                    </Picker>
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                                if (description !== '' && imageAdded) {
                                    console.log("Pressed");
                                    var postInfo = {
                                        profile : 'Clara MacAvoy',
                                        challenge : selectedLanguage,
                                        timePosted : 'now',
                                        title : action.title,
                                        description : description,
                                        pts : action.pts,
                                        image : 'recycle',
                                        likes : 0,
                                        comments : []
                                    }
                                    navigation.navigate('Post Preview', postInfo);
                                } else if (description === '') {
                                    Alert.alert('Please add a description')
                                } else  {
                                    Alert.alert('Please add a photo')
                                }
                                
                }}>
                    <View style={!(description !== '' && imageAdded) ? styles.customButtonDisabled : styles.customButton}>
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
        marginBottom: 10
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
        marginTop: -20
    },
    challengePick : {
        marginTop: 10
    }
})