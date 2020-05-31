import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { View, Text } from 'react-native';

function Entry(props) {

    const renderEntryItem = ({ item }) => {
        return (
            <ListItem
                title={item.date}
                subtitle={item.entry}
            />
        );
    };

    return (
        <View>
            <Text>Today's Date is:</Text>
            <FlatList
                data={props.entries}
                renderItem={renderEntryItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

export default Entry;