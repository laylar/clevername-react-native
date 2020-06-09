import React, { Component } from 'react';
import Home from './HomeComponent';
import { StyleSheet, Text, View, Platform, SafeAreaView, ScrollView, Image } from 'react-native';
import { ENTRIES } from '../shared/entries'
import EntrySnippet from './EntrySnippetComponent';
import EntryInfo from './EntryInfoComponent';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
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

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={{ flex: 1 }}>
                <Image source={require('./images/medlogoSouviengraydark.png')} style={styles.drawerImage} />
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>Remember</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                    />
                ),

            }
        },
        Entries: {
            screen: DirectoryNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='pencil-square-o'
                        type='font-awesome'
                        size={24}

                    />
                )
            }
        }
    },
    {
        drawerBackgroundColor: 'gray',
        contentComponent: CustomDrawerContentComponent
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
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#eaeaea',
        fontSize: 24,
    },
    drawerImage: {
        margin: 1,
        height: 88,
        width: 297
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;