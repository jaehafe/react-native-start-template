import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import Today from './Today';
import Completed from './Completed';
import Categories from './Categories';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 70,
        },
        // tabBarIcon: {
        //   Home:
        // },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Today" component={Today} />
      <Tab.Screen name="Completed" component={Completed} />
      <Tab.Screen name="Categories" component={Categories} />
    </Tab.Navigator>
  );
};

export default BottomTab;
