import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { verification } from '../screens/Login/verification';
import { verified } from '../screens/Login/verified';
import { TabNavigator } from './tabNavigator';
import { EditProfile } from '../screens/Profile/Edit';
import { Feed } from '../screens/Feeds/feed';
import { CustomMarker } from '../assets/Imgs/components/CustomMarker';
import { Incident } from '../screens/Feeds/Incident';
import  Camera  from '../screens/Add/camera';
import  AddIncident  from '../screens/Add/AddIncident';
import { Emoticon } from '../screens/Feeds/emoticons';
import Phone from '../screens/Login/phone';
const Stack = createStackNavigator();
export const MainNavigator = () => (
  <Stack.Navigator
    initialRouteName="Phone" screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Phone" component={Phone} />
    <Stack.Screen name="verification" component={verification} />
    <Stack.Screen name="verified" component={verified} />
    <Stack.Screen name="tabs" component={TabNavigator} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
    <Stack.Screen name="Feed" component={Feed} />
    <Stack.Screen name="Custom" component={CustomMarker} />
    <Stack.Screen name="Incident" component={Incident} />
    <Stack.Screen name="AddIncident" component={AddIncident} />
    <Stack.Screen name="Camera" component={Camera} />
    <Stack.Screen name="Emoticon" component={Emoticon} />
  </Stack.Navigator>
)