import React, { Component } from 'react';
import Home from './HomeComponent';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { ENTRIES } from '../shared/entries'
import EntrySnippet from './EntrySnippetComponent';
import EntryInfo from './EntryInfoComponent';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

const DirectoryNavigator = createStackNavigator(
    {
        EntrySnippet: {
            screen: EntrySnippet,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <Icon
                    name='pencil-square-o'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
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
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerStyle: {
                backgroundColor: '#d1d3d3'
            },
            headerTintColor: '#7b7c7c',
            headerTitleStyle: {
                color: '#000000'
            }
        })
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

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;