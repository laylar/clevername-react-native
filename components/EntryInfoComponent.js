import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { ENTRIES } from '../shared/entries'

function RenderEntry({ entry }) {
    if (entry) {
        return (
            <Card featuredTitle={entry.date}>
                <Text>{entry.date} </Text>
                <Text style={{ margin: 10 }}>
                    {entry.entry}
                </Text>
            </Card>
        );
    }
    return <View>
        <Text>Some text</Text>
    </View>
}

class EntryInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: ENTRIES
        };
    }

    static navigationOptions = {
        title: 'Full Entry' //put the entry's date here?
    };
    render() {
        const entryId = this.props.navigation.getParam('entryId');
        const entry = this.state.entries.filter(entry => entry.id === entryId)[0];
        return <RenderEntry entry={entry} />
    }

}

export default EntryInfo;