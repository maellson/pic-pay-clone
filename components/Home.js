import React from 'react';
import {View, Text} from 'react-native';

// comps
import Header from '../components/Header';
import ScrollUsers from '../components/ScrollUsers';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header />
        <ScrollUsers />
      </View>
    );
  }
}