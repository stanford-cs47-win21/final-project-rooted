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
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
});