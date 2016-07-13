'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  Text,
  StyleSheet,
  ListView,
  View
} from 'react-native';

import Featured from './Featured'
import Search from './Search'

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'search'
    };
  }
  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          style={styles.tab}
          selected={this.state.selectedTab === 'featured'}
          title={'Featured'}
          iconName="fa-heart-o"
          onPress={() => {
            this.setState({
              selectedTab: 'featured'
            });
          }}>
          <Featured/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'search'}
          title={'Search'}
          iconName="fa-search"
          onPress={() => {
            this.setState({
              selectedTab: 'search'
            });
          }}>
          <Search/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
};
var styles = StyleSheet.create({
  tab: {

  }
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
