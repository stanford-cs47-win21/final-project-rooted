import React from 'react';
import { Colors, Metrics, Images } from '../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ImageBackground, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';

export default function FeedItem(item) {
    return (
        <View style={styles.itemView}>
            <View style={styles.head}>
                <Image source={Images[item.profilePic]} style={styles.profilePic}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>{item.name}</Text>
                    <Text style={styles.text1}>{item.challenge}</Text>
                    <Text style={styles.text2}>now</Text>
                </View>
                <Entypo name="dots-three-horizontal" size={24} color={Colors.mediumGrey} />
            </View>
            <View style={styles.captionContainer}>
                    <Text >{item.caption}</Text>
                    <Text style={styles.text2}>Points<Text style={styles.text3}>  +{item.points}</Text></Text>
            </View>
            <Image source={Images[item.image]} style={styles.image}></Image>
            <View style={styles.engagementContainer}>
                <View style={styles.engagementItem}>
                    <AntDesign name="hearto" size={20}/>
                    <Text style={{marginRight: 5}}>{item.likes}</Text>
                </View>
                <View style={styles.engagementItem}>
                    <FontAwesome name="comment-o" size={20}/>
                    <Text style={{marginRight: 5}}>{item.comments}</Text>
                </View>
                <Entypo name="share-alternative" size={20}/>
            </View>
            <Text style={[styles.text4, {marginTop: 10 }]}>View all comments</Text>
            <View style={styles.addCommentContainer}>
                <Image source={Images[item.profilePic]} style={styles.profilePic2}></Image>
                <View style={styles.addCommentView}>
                    <Text style={styles.text2}>Comment</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemView: {
        height: 500,
        width: Metrics.screenWidth * 0.9,
    },
    head: {
        width: Metrics.screenWidth * 0.9,
        height: 62,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePic: {
        height: 42,
        width: 42,
        borderRadius: 21,
    },
    textContainer: {
        height: 50,
        width: 247,
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    text2: {
        fontSize: 12,
        color: Colors.mediumGrey,
    },
    captionContainer: {
        height: 75,
        width: Metrics.screenWidth * 0.9,
    },
    text3: {
        fontSize: 20,
        color: Colors.grassGreen,
        fontWeight: 'bold'
    },
    image: {
        height: 236,
        width: Metrics.screenWidth * 0.9,
        borderRadius: 10,
    },
    engagementContainer: {
        flexDirection: 'row',
        height: 21,
        width: Metrics.screenWidth * 0.9,
        alignItems: 'center',
        marginTop: 10,
    },
    engagementItem: {
        height: 21,
        width: 49,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
    },
    text4: {
        fontSize: 14,
        color: Colors.mediumGrey,
        fontWeight: 'bold',
    },
    addCommentContainer: {
        height: 40,
        width: Metrics.screenWidth * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    profilePic2: {
        height: 30,
        width: 30, 
        borderRadius: 15,
    },
    addCommentView: {
        height: 40,
        width: 295,
        borderRadius: 10,
        backgroundColor: Colors.lightGrey,
        justifyContent: 'center',
        padding: 10,
        marginLeft: 10,
    }
});