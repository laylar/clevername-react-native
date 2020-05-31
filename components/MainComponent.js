import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ENTRIES } from '../shared/entries'
import EntrySnippet from './EntrySnippetComponent';
import EntryInfo from './EntryInfoComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: ENTRIES,
            selectedEntry: null
        };
    }

    onEntrySelect(entryId) {
        this.setState({ selectedEntry: entryId });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>This is a test text in MainComponent.</Text>
                <EntryInfo entry={this.state.entries.filter(entry => entry.id === this.state.selectedEntry)[0]} />
                {/*A text entry box should go here if display is today's date*/}
                <EntrySnippet entries={this.state.entries} onPress={entryId => this.onEntrySelect(entryId)} />

            </View>
        );
    }
}

export default Main;