import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MainNavigator } from './app/navigators/mainNavigator';
import { Provider } from 'react-redux';
import { store } from './root/store';
// import {MainNavigator} from './app/navigators';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
      </Provider>
  );
};
export default App;
