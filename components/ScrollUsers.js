import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

import Colors from '../colors/colors';

import Icon from 'react-native-vector-icons/Ionicons';


class ItemUsers extends React.Component {
  render() {
    return (
      <View style={styles.itemScrollUsers}>
        <Image style={styles.imageScrollUsers} source={{uri: 'https://avatars0.githubusercontent.com/u/16847836?s=460&v=4'}} />
        <Text style={{flexWrap: 'wrap', color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>
          Alex Alan Nunes
        </Text>
      </View>
    )
  }
}

export default class Header extends React.Component {
  state = {
    users: [76,3,276,327,627,6267,36,723,6732673,672673,267328,73827,328732]
  }
  render() {
    return (
      <View style={styles.scrollUsers}>
        <Text style={styles.titleScrollUsers}>Sugestôes para você</Text>
        <ScrollView horizontal={true}>
          <View style={styles.viewScrollUsers}>
            {
              this.state.users.map(user => <ItemUsers key={user} />)
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollUsers: {
    height: 200,
    backgroundColor: Colors.primary,
  },
  titleScrollUsers: {
    fontWeight: 'bold',
    paddingHorizontal: 20,
    fontSize: 17,
    marginTop: 17,
    color: Colors.light
  },
  imageScrollUsers: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  itemScrollUsers: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    width: 100
  },
  viewScrollUsers: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});