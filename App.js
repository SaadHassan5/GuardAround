import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MainNavigator } from './app/navigators/mainNavigator';
// import {MainNavigator} from './app/navigators';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  );
};
export default App;
