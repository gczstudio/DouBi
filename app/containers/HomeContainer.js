
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <View style={styles.container}>
          <Text>首页</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

