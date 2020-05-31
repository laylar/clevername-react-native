import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderEntry({ entry }) {
    if (entry) {
        return (
            <Card>
                <Text>{entry.date}</Text>
                <Text style={{ margin: 10 }}>
                    {entry.entry}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function EntryInfo(props) {
    return <RenderEntry entry={props.entry} />;
}

export default EntryInfo;