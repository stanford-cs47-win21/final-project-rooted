import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import FeedItem from '../../Components/FeedItem';



export default function Feed() {
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