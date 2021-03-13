import React, { useState } from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

import JoinTeamComponent from '../../Components/JoinTeamComponent';

export default function joinTeamScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <JoinTeamComponent title="Suggested for You" 
                subline="Teams you might be interested in."
                photo={Images.cyclingTogether}
                featuredTeamName="Cycling Together"
                featuredDescrip="5 members - Recycling - 3.5 mi away"
                listImgOne={Images.shine}
                listNameOne="Let it shine"
                listDescripOne="10 members - Energy - 10 mi away"
                listImgTwo={Images.haute}
                listNameTwo="Haute Couture"
                listDescripTwo="8 members - Energy - 12.8 mi away"
                listImgThree={Images.munchies}
                listNameThree="Munchies"
                listDescripThree="6 members - Energy - 19 mi away"
                />

                <JoinTeamComponent title="Friend's Teams" 
                subline="Teams your friends are in."
                photo={Images.farmFriends}
                featuredTeamName="Farm Friends"
                featuredFriendsImg={Images.featuredFriendsGroup}
                featuredDescrip="5 members - Planting - 3.5 mi away"
                listImgOne={Images.lit}
                listNameOne="It's Lit"
                listDescripOne="15 members - Energy - 4 mi away"
                listImgTwo={Images.upcycled}
                listNameTwo="Upcycled"
                listDescripTwo="7 members - Energy - 14 mi away"
                listImgThree={Images.vegOut}
                listNameThree="VegOut"
                listDescripThree="4 members - Food - 11 mi away"
                />
            </View>
            <View style={styles.toplineView}>
                <Text style={styles.titleText}>Categories</Text>
                <Text style={styles.sublineText}>Find a group by browsing top categories.</Text>
            </View>
            <ScrollView horizontal={true}>
                <View style={styles.categoriesContainer}>
                    <Image source={Images.energy} style={styles.categoryImg}></Image>
                    <Image source={Images.food} style={styles.categoryImg}></Image>
                    <Image source={Images.fashion} style={styles.categoryImg}></Image>
                </View>
            </ScrollView>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    categoriesContainer: {
        width: 420,
        height: 140,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
    },
    toplineView: {
        height: 50,
        width: 350,
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    sublineText: {
        fontSize: 14,
        color: Colors.mediumGrey,
    },
    categoryImg: {
        borderRadius: 10,
        height: 121,
        width: 121,
    }
});