import React from 'react';
import {View, Text} from 'react-native';

import Header from '../components/Header';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Text>Home</Text>
      </View>
    );
  }
}