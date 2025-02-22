import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

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
                keyExtractor={(item) => item.id.toString()}
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