import React, { Component } from 'react';
//import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { ENTRIES } from '../shared/entries'
import Entry from './EntryComponent';

/*
const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'gray'
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                color: 'white'
            }
        }
    }
)

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator }
    },
    {
        drawerBackgroundColor: 'gray'
    }
)
*/

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: ENTRIES
        };
    }
    render() {
        return (
            <View>
                <Text>This is a test text.</Text>
                <Entry entries={this.state.entries} />
            </View>
        );
    }
}

export default Main;