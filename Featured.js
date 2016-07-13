'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  Image,
  View
} from 'react-native';

var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 75
  }
});

const books = [
  {title: "Benny and the jets..", imageUrl: "http://bit.ly/29xjEN2"},
  {title: "Catch me if you Ben..", imageUrl: "http://bit.ly/29xjEN2"},
  {title: "As I lay Benning..", imageUrl:"http://bit.ly/29xjEN2"},
  {title: "As I lay Benning..", imageUrl:"http://bit.ly/29xjEN2"},
  {title: "As I lay Benning..", imageUrl:"http://bit.ly/29xjEN2"},
  {title: "As I lay Benning..", imageUrl:"http://bit.ly/29xjEN2"}
]
let pic = {
    uri: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/1974992_10152322387475638_6189239035836845621_n.jpg?oh=3d645909b5025ff4db08acd5fed95a0d&oe=57F2B495'
  }

class Featured extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      booksDataSource: ds.cloneWithRows(books)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Featured Books Tab
        </Text>
        <ListView
            dataSource={this.state.booksDataSource}
            renderRow={(book) => {return this._renderBookRow(book)}}/>
      </View>
    );
  }
  _renderBookRow(book) {
    return (
      <View style={styles.container}>
        <Text>{book.title}</Text>
        <Image source={pic} style={{width: 150, height: 70}}/>
      </View>
    )
  }
}

module.exports = Featured;
