import React, {useState} from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, SafeAreaView, View, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

import FeedItem from '../../Components/FeedItem';



export default function Feed() {
    const [updatingVar, setUpdatingVar] = useState(0);
    global.updateFeed = () => {
        setUpdatingVar(updatingVar+1);
    }
    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                data={actionsCompleted}
                renderItem={({ item }) => FeedItem(item)}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
});