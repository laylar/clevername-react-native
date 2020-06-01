import React, { Component } from 'react';
import Home from './HomeComponent';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { ENTRIES } from '../shared/entries'
import EntrySnippet from './EntrySnippetComponent';
import EntryInfo from './EntryInfoComponent';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

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

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
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

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Entries: { screen: DirectoryNavigator }
    },
    {
        drawerBackgroundColor: 'gray'
    }


);

class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;