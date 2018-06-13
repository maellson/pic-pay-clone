import React from 'react';
import {View, Text} from 'react-native';

import Header from '../components/Header';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Header />
        <Text>Home!</Text>
      </View>
    );
  }
}