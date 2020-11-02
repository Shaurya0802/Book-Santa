import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
import db from '../config';
import {ListItem} from 'react-native-elements';

export default class MyReceivedBooksScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            receivedBooksList: []
        }

        this.requestRef = null;
    }

    getReceivedBooksList = () => {
        this.requestRef = db.collection('requested_books').where('user_id', '==', this.state.userId).where('book_status', '==', 'received').onSnapshot((snapshot) => {
            var receivedBooksList = snapshot.docs.map((doc) => doc.data());
            this.setState({
                receivedBooksList: receivedBooksList
            });
        });
    }

    componentDidMount() {
        this.getReceivedBooksList();
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({item,index}) =>{
        return (
            <ListItem
                key={index}
                title={item.book_name}
                titleStyle={{ color: 'black', fontWeight: 'bold' }}
                subtitle={item.book_status}
                bottomDivider
            />
        );
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MyHeader title="Received Books" navigation={this.props.navigation}/>
                <View style={{flex: 1}}>
                    {this.state.receivedBooksList.length === 0 ? (
                        <View style={styles.subContainer}>
                            <Text style={{fontSize: 20}}>List of all received books</Text>
                        </View>
                    ) : (
                        <FlatList 
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderItem}
                            data={this.state.receivedBooksList}
                        />
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    subContainer: {
        flex: 1,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});