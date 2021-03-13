import React from 'react';
import { Colors, Metrics, Images } from '../Themes';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

// title, subline, image

export default function JoinTeamComponent(props) {
    return (
        <View style={styles.container}>
            <View style={styles.toplineView}>
                <View style={styles.lineOne}>
                    <Text style={styles.titleText}>{props.title}</Text>
                    <Text style={styles.seeAllText}>See All</Text>
                </View>
                <Text style={styles.sublineText}>{props.subline}</Text>
            </View>

            <View style={styles.featuredTeamView}>
                <Image source={props.photo} style={styles.featuredTeamImage}></Image>
                <View style={styles.featuredDescripContainer}>
                    <View style={styles.featuredNameImgContainer}>
                        <Text style={styles.featuredTeamName}>{props.featuredTeamName}</Text>
                        <Image source={props.featuredFriendsImg} style={styles.featuredFriendsImg}></Image>
                    </View>
                    <Text style={[ styles.featuredTeamDescrip, {marginLeft: 10} ]}>{props.featuredDescrip}</Text>
                    <View style={styles. buttonContainer}>
                        <View style={styles.joinFeaturedButton}>
                            <Text style={styles.buttonText}>REQUEST TO JOIN TEAM</Text>
                        </View>
                    </View>
                </View>
            </View>

            
            <View style={styles.listContainer}>
                {/* Listing 1 */}
                <View style={styles.listingContainer}>
                    <Image source={props.listImgOne} style={styles.listingImg}></Image>
                    <View style={styles.listingDescripContainer}>
                        <Text style={styles.featuredTeamName}>{props.listNameOne}</Text>
                        <Text style={styles.featuredTeamDescrip}>{props.listDescripOne}</Text>
                    </View>
                    <View style={styles.joinButton}>
                        <Text style={styles.buttonText}>REQUEST</Text>
                    </View>
                </View>

                {/* Listing 2 */}
                <View style={styles.listingContainer}>
                    <Image source={props.listImgTwo} style={styles.listingImg}></Image>
                    <View style={styles.listingDescripContainer}>
                        <Text style={styles.featuredTeamName}>{props.listNameTwo}</Text>
                        <Text style={styles.featuredTeamDescrip}>{props.listDescripTwo}</Text>
                    </View>
                    <View style={styles.joinButton}>
                        <Text style={styles.buttonText}>REQUEST</Text>
                    </View>
                </View>

                {/* Listing 3 */}
                <View style={styles.listingContainer}>
                    <Image source={props.listImgThree} style={styles.listingImg}></Image>
                    <View style={styles.listingDescripContainer}>
                        <Text style={styles.featuredTeamName}>{props.listNameThree}</Text>
                        <Text style={styles.featuredTeamDescrip}>{props.listDescripThree}</Text>
                    </View>
                    <View style={styles.joinButton}>
                        <Text style={styles.buttonText}>REQUEST</Text>
                    </View>
                </View>
            </View>
            <View style={styles.seeAllButton}>
                <Text style={styles.buttonText}>SEE ALL</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        height: 600,
        width: Metrics.screenWidth * 0.9,
        alignItems: 'center',
    },
    toplineView: {
        height: 50,
        width: Metrics.screenWidth * 0.9,
        alignItems: 'flex-start',
    },
    lineOne: {
        height: 24,
        width: Metrics.screenWidth * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    seeAllText: {
        fontSize: 14,
        color: Colors.mediumGrey,
    },
    sublineText: {
        fontSize: 14,
        color: Colors.mediumGrey,
    },
    featuredTeamView: {
        height: 280,
        width: Metrics.screenWidth * 0.9,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 10
    },
    featuredTeamImage: {
        width: Metrics.screenWidth * 0.9,
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    featuredDescripContainer: {
        width: Metrics.screenWidth * 0.9,
        height: 120, 
        justifyContent: 'flex-start',
        paddingBottom: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 0.5,
        borderColor: Colors.lightGrey,
        backgroundColor: 'white',
    },
    featuredNameImgContainer: {
        marginTop: 3,
        marginLeft: 10,
        height: 35,
        width: Metrics.screenWidth * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    featuredTeamName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    featuredFriendsImg: {
        width: 30,
        resizeMode: 'contain',
        marginLeft: 5
    },
    featuredTeamDescrip: {
        fontSize: 12,
        color: Colors.mediumGrey,
    },
    buttonContainer: {
        alignItems: 'center'
    },
    joinFeaturedButton: {
        height: 32,
        width: 295,
        borderRadius: 10,
        backgroundColor: Colors.grassGreen,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    buttonText: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 12
    },
    listContainer: {
        height: 202,
        width: Metrics.screenWidth * 0.9,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    listingContainer: {
        height: 60,
        width: Metrics.screenWidth * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    listingDescripContainer: {
        width: 210,
    },
    listingImg: {
        width: 50,
        resizeMode: 'contain',
    },
    joinButton: {
        width: 65,
        height: 32,
        borderRadius: 10,
        backgroundColor: Colors.grassGreen,
        justifyContent: 'center',
        alignItems: 'center',
    },
    seeAllButton: {
        height: 32,
        width: Metrics.screenWidth * 0.9,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.lightGrass,
        marginTop: 10
    }
});