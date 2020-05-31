import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { ENTRIES } from '../shared/entries'
import EntrySnippet from './EntrySnippetComponent';
import EntryInfo from './EntryInfoComponent';
import { createStackNavigator } from 'react-navigation';

const DirectoryNavigator = createStackNavigator(
    {
        EntrySnippet: { screen: EntrySnippet },
        EntryInfo: { screen: EntryInfo }
    },
    {
        initialRouteName: 'EntrySnippet',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#d1d3d3'
            },
            headerTintColor: '#7b7c7c',
            headerTitleStyle: {
                color: '#000000'
            }
        }
    }
)

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
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <DirectoryNavigator />
            </View>
        );
    }
}

export default Main;