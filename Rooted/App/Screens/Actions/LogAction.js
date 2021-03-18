import React, {useState} from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, View, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function LogAction( {route, navigation} ) {
    var action = route.params;
    const [selectedChallenge, setSelectedChallenge] = useState('Energy Marathon');
    const [imageAdded, setImageAdded]=  useState(false);
    const [description, setDescription] = useState('');
    return (
        <View style={styles.container}>
             <ImageBackground 
            source={Images.background2} 
            resizeMode='contain' 
            style={ [ { justifyContent: 'flex-start',
                alignItems: 'center',
                height: Metrics.screenHeight, 
                width: Metrics.screenWidth, 
                paddingTop: 10,
                } 
            ]}
            >
                <View style={styles.title}>
                    <Text style={{ fontSize: 32, textAlign: 'center' }}>{action.title}</Text>
                </View>
                <View style={styles.title}>
                    <Text style={{ fontSize: 24, textAlign: 'center', color: Colors.grassGreen }}>{action.pts + " points"}</Text>
                </View>
                <View style={styles.title}>
                    <Text style={{ fontSize: 15, textAlign: 'left', marginBottom: 10 }}>{action.description}</Text>
                </View>

                {/* Image */ }
                <TouchableOpacity style={styles.photo} onPress={()=>{
                    setImageAdded(true);
                }}>
                    {imageAdded ? <Image source={Images['recycle']} style={[styles.photo, {borderWidth: 0} ]}></Image>
                    : <MaterialCommunityIcons name="camera-plus-outline" size={110} color="black" />}
                </TouchableOpacity>

                {/* Caption */}
                <View style={styles.caption}>
                    <TextInput
                        onChangeText={ (text) => {
                            setDescription(text);
                        }}
                        placeholder={"Caption your action"}
                        style={styles.captionInput}>
                    </TextInput>
                </View>

                {/* Pick Challenge */}
                <View style={styles.challengePick}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Add Points to Challenge:</Text>
                    <Picker
                        selectedValue={selectedChallenge}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedChallenge(itemValue)
                        }
                        style={styles.picker}
                        itemStyle={{ height: 105 }}>
                        <Picker.Item label="Stanford Eco Week" value="Stanford EcoWeek"/>
                        <Picker.Item label="Energy Marathon" value="Energy Marathon" />
                        <Picker.Item label="Green Revolution" value="Green Revolution" />
                    </Picker>
                </View>
                <TouchableOpacity onPress={() => {
                                    if (description !== '' && imageAdded) {
                                        console.log("Pressed");
                                        var postInfo = {
                                            name : 'Clara MacAvoy',
                                            profilePic : 'Clara',
                                            challenge : selectedChallenge,
                                            timePosted : 'now',
                                            caption : description,
                                            points : action.pts.toString(),
                                            image : 'recycle',
                                            likes : 0,
                                            comments : 0,
                                            liked : false,
                                            index : action.index
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
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title : {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: Metrics.screenWidth * 0.9,
    },
    photo : {
        height: 170,
        width: 170,
        borderWidth: 1,
        borderColor: Colors.mediumGrey,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    caption : {
        height: Metrics.screenHeight * .1,   
        marginBottom: 10,
        backgroundColor: Colors.lightGrey,
        height: Metrics.screenHeight * .08,
        width: Metrics.screenWidth  * .85,
        borderRadius: 15,
    },
    captionInput : {
        backgroundColor: Colors.lightGrey,
        height: Metrics.screenHeight * .035,
        width: Metrics.screenWidth  * .85,
        borderRadius: 15,
        borderLeftWidth: 10,
        borderTopWidth: 5,
        borderRightWidth: 10,
        borderColor: Colors.lightGrey,
    },
    picker : {
        marginTop: 5,
    },
    challengePick : {
        marginTop: 5
    },
    customButton: {
        width: 190,
        height: 45,
        borderRadius: 190/2,
        backgroundColor: Colors.darkGreen,
        margin: 0,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonDisabled: {
        width: 190,
        height: 45,
        borderRadius: 190/2,
        backgroundColor: Colors.lightGrey,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
})