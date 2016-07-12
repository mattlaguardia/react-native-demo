/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    let pic = {
      uri: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/10374869_10208481316098374_6121496179416948413_n.jpg?oh=d7de46f2d1239f887877658bd21aaae4&oe=582D8261'
    };
    return (
      <View style={styles.container}>
      <View style={{width: 400, height: 50, backgroundColor: 'powderblue'}}></View>
        <Text style={styles.welcome}>
          Hello World! We are writing our First React Native App!
        </Text>
        <Text style={styles.instructions}>
          This is just a static page I was experimenting with!
        </Text>
        <Text style={styles.instructions}>
          Hello Ben!
        </Text>
        <Image source={pic} style={{width: 300, height: 210}}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
