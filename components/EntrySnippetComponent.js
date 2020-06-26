import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { View, Text } from 'react-native';
import { ENTRIES } from '../shared/entries';
//import { connect } from 'react-redux';
//import { baseUrl } from '../shared/baseUrl';

// mapStateToProps = state => {
//     return {
//         entries: state.entries
//     }
// }

class EntrySnippet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: ENTRIES
        }
    }
    static navigationOptions = {
        title: 'Entry Snippets'
    }

    render() {
        const { navigate } = this.props.navigation;

        const renderEntryItem = ({ item }) => {
            return (
                <ListItem
                    title={item.date}
                    subtitle={item.snippet}
                    onPress={() => navigate('EntryInfo', { entryId: item.id })}
                />
            );
        }

        return (
            <View>
                <Text>Today's Date is:</Text>
                <FlatList
                    data={this.state.entries}
                    renderItem={renderEntryItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View >
        );
    }

}
export default EntrySnippet;
//export default connect(mapStateToProps)(EntrySnippet);