import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// comps
import Header from '../components/Header';
import ScrollUsers from '../components/ScrollUsers';
import ActivitiesFeed from '../components/ActivitiesFeed';
import TitlesHomeTab from '../components/TitlesHomeTab';

import Colors from '../colors/colors';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <ScrollView>
          <Header />
          <ScrollUsers />
          <TitlesHomeTab />
          <ActivitiesFeed />
        </ScrollView>
      </View>
    );
  }
}