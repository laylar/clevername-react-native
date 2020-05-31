import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

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
        <FlatList
            data={props.entries}
            renderItem={renderEntryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Entry;