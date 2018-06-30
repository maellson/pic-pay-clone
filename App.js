import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';


import Icon from 'react-native-vector-icons/Ionicons';

// components
import Home from './components/Home';
import Settings from './components/Settings';

export default createBottomTabNavigator(
  {
    'Início': Home,
    'Ajustes': Settings,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Início') {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
        } 
        else if (routeName === 'Ajustes') {
          iconName = focused ? 'ios-settings' : 'ios-settings-outline';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#555',
      inactiveTintColor: '#ccc',
      style: {
        /* backgroundColor: '#08C' */
      }
    },
    swipeEnabled: true,
  }
);