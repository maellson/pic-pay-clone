import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

import Colors from '../colors/colors';

import Icon from 'react-native-vector-icons/Ionicons';


class ItemFeed extends React.Component {
  render() {
    return (
      <View style={styles.viewItemFeed}>

        <View style={styles.viewHeaderItemFeed}>
          <View>
            <Image style={styles.imageUser} source={{uri: 'https://avatars0.githubusercontent.com/u/16847836?s=460&v=4'}} />
          </View>
          <View style={styles.infoUser}>
            <Text>
              <Text style={styles.bold}>@alexalannunes</Text>
              &nbsp;pagou a&nbsp;
              <Text style={styles.bold}>@alexalannunes</Text>
            </Text>
          </View>
        </View>

        <View style={styles.viewBodyItemFeed}>
          <Text style={{fontSize: 15}}>pagando a #internet da minha humilde casinha</Text>
        </View>

        <View style={styles.viewFooterItemFeed}>
          <View style={{flexDirection:'row'}}>
            <Icon name="md-people" size={20} color={Colors.grayLight} />
            <Text style={styles.textCountIcon}>13 horas atrás</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Icon name="ios-chatboxes-outline" size={20} color={Colors.grayLight} />
            <Text style={styles.textCountIcon}>3</Text>
            <Icon name="md-heart-outline" size={20} color={Colors.grayLight} />
            <Text style={styles.textCountIcon}>0</Text>
          </View>
        </View>

      </View>
    );
  }
}

export default class ActivitiesFeed extends React.Component {
  state = {
    list: [28727,812787,8178278,17817827,82787878,1,237,87817,8783,7,84,78782,32873,1232837,2837,823]
  }
  render() {
    return (
      <View style={styles.viewActivitiesFeed}>
        {
          this.state.list.map(list => <ItemFeed key={list} />)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewActivitiesFeed: {
    marginHorizontal: 10,
  },
  viewItemFeed: {
    flexDirection: 'column',
    backgroundColor: Colors.light,
    borderRadius: 10,
    borderColor: Colors.grayDark,
    padding: 20,
    marginBottom: 10,
  },
  viewHeaderItemFeed: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoUser: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imageUser: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 13,
    borderColor: Colors.gray,
    borderWidth: 1,
  },
  bold: {
    fontWeight: 'bold'
  },
  viewBodyItemFeed: {
    flexWrap: 'wrap',
    paddingTop: 15,
  },
  viewFooterItemFeed: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  textCountIcon: {
    color: Colors.grayLight, 
    marginRight: 8, 
    marginLeft:8
  }

});