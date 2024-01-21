import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Provider} from '@ant-design/react-native';
import {ThemeProvider} from 'styled-components';
import {theme} from '@/styles/theme';

import Home from '@/screens/Home';
import Categories from '@/screens/Categories';
import Completed from '@/screens/Completed';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
      }}>
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          title: 'All Categories',
        }}
      />
      <Drawer.Screen name="Completed" component={Completed} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const BottomTab = createBottomTabNavigator();

  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <NavigationContainer>
          <BottomTab.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#3c0a6b'},
              headerTintColor: 'white',
              tabBarActiveTintColor: '#3c0a6b',
            }}>
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Drawer" component={DrawerNavigator} />
          </BottomTab.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
