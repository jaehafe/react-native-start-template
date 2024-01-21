import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Status from '@/screens/Status';
import BottomTab from './src/screens/BottomTab';
import {Provider} from '@ant-design/react-native';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Bottom" component={BottomTab} />
          <Stack.Screen name="Status" component={Status} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
