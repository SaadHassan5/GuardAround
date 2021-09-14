import * as React from 'react';
import { Image, Settings, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import { phone } from '../screens/Login/phone';
import { verification } from '../screens/Login/verification';
import { HP, WP } from '../config/screen-ratio';
import IconMap from 'react-native-vector-icons/Ionicons';
import IconCat from 'react-native-vector-icons/MaterialIcons';
import IconBell from 'react-native-vector-icons/FontAwesome';
import IconPlus from 'react-native-vector-icons/Entypo';
import IconPerson from 'react-native-vector-icons/Fontisto';
import { Feed } from '../screens/Feeds/feed';
import { palette } from '../config/colors';
import { Notification } from '../screens/Notification/notification';
import { Profile } from '../screens/Profile/Profile';
import { Location } from '../screens/Location/location';
import { TABSVGS } from '../assets';
import { FeedIcon } from '../assets/Imgs/components/feedIcon';
import { LocationIcon } from '../assets/Imgs/components/locationIcon';
import { AddIcon } from '../assets/Imgs/components/addIcon';
import { NotiIcon } from '../assets/Imgs/components/notiIcon';
import { UserIcon } from '../assets/Imgs/components/userIcon';
import  AddIncident  from '../screens/Add/AddIncident';
export function TabNavigator({ navigation }) {
  return (
    // <Tab.Navigator
    //   barStyle={{ marginHorizontal:WP(1),backgroundColor: '#ffff',height:HP(7),borderTopWidth:0,borderTopLeftRadius:WP(10),borderTopRightRadius:WP(10)}}
    //   tabBarLabel={false}
    //   initialRouteName="HOME"
    //   screenOptions={({ route }) => ({
    //     headerShown: false,
    //     // tabBarActiveTintColor:palette.lightGrey,
    //     // tabBarInactiveTintColor:palette.black,
    //     // tabBarLabel: route.name === 'Home' ? 'Home' :route.name === 'Tools':,
    //     tabBarIcon: ({ focused, color, size }) => {
    //       let icon = <User fill={focused?palette.primary:palette.tab_fill}/>;
    //       let iconName, tint;
    //       if (route.name === 'Discover') {
    //         icon = <Map fill={focused?palette.primary:palette.tab_fill}/>;
    //         tint = palette.primary;
    //       } else if (route.name === 'LikeProfile') {
    //         icon = <Like fill={focused?palette.primary:palette.tab_fill}/>;
    //         tint = palette.primary;
    //       } else if (route.name === 'Offers') {
    //         icon = <Offer fill={focused?palette.primary:palette.tab_fill}/>;
    //         tint = palette.primary;
    //       } else if (route.name === 'Chats') {
    //         icon = <Chat fill={focused?palette.primary:palette.tab_fill}/>;
    //         tint = palette.primary;
    //       }
    //       return (
    //         icon
    //       );
    //     },
    //   })}
    // >


    <Tab.Navigator
      barStyle={{
        backgroundColor: 'white', 
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        //  borderWidth: 1,
        //  borderColor: palette.svgGrayColor,
        // paddingLeft: 20, paddingRight: 20, 
        height: HP(9), 
        // padding: HP(1),
        // paddingBottom:HP(0)
      }}>
      <Tab.Screen name="Location" component={Location}
        options={{
          tabBarLabel: false,

          tabBarIcon: ({ color, size, focused }) => (

            <View style={{ backgroundColor: focused ? '#2fd3ca' : 'white',padding:WP(3),borderRadius:WP(9),marginBottom:WP(0) }}>
              {/* <TABSVGS.feedtab /> */}
              <LocationIcon fill={focused?palette.white:'#2fd3ca'} />
            </View>
          )

        }}
      />
      <Tab.Screen name="Feeds" component={Feed}
        options={{
          tabBarLabel: false,

          tabBarIcon: ({ color, size, focused }) => (

            <View style={{ backgroundColor: focused ? '#2fd3ca' : 'white',padding:WP(3),borderRadius:WP(9),marginBottom:WP(0) }}>
              {/* <TABSVGS.feedtab /> */}
              <FeedIcon fill={focused?palette.white:'#2fd3ca'} />
            </View>
          )

        }} />
      <Tab.Screen name="AddIncident" component={AddIncident}
        options={{
          tabBarLabel: false,

          tabBarIcon: ({ color, size, focused }) => (

            <View style={{ backgroundColor: focused ? '#2fd3ca' : 'white',padding:WP(3),borderRadius:WP(9),marginBottom:WP(0) }}>
              {/* <TABSVGS.feedtab /> */}
              <AddIcon fill={focused?palette.white:'#2fd3ca'} />
            </View>
          )

        }} />
      <Tab.Screen name="Notification" component={Notification}
        options={{
          tabBarLabel: false,

          tabBarIcon: ({ color, size, focused }) => (
            
            <View style={{ 
              padding:WP(3),
              borderRadius:WP(9),
              marginBottom:WP(0),
              backgroundColor: focused ? '#2fd3ca' : palette.white, }}>
              {/* <TABSVGS.feedtab /> */}
              <NotiIcon fill={focused?palette.white:'#2fd3ca'} />
            </View>
          )

        }} />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: false,

          tabBarIcon: ({ color, size, focused }) => (
            
            <View style={{ backgroundColor: focused ? '#2fd3ca' : 'white',padding:WP(3),borderRadius:WP(9) }}>
              {/* <TABSVGS.feedtab /> */}
              <UserIcon fill={focused?palette.white:'#2fd3ca'} />
            </View>
          )

        }} />
      {/* <Tab.Screen name="LikeProfile" component={LikeProfile} />
      <Tab.Screen name="Offers" component={DaterSlider} />
      <Tab.Screen name="Chats" component={AllChats} />
      <Tab.Screen name="Profile" component={Profile} /> */}
      {/* <Tab.Screen name="Tools" component={Tools} />
      <Tab.Screen name="Sales" component={Sales} />
      <Tab.Screen name="Payment" component={Payment} /> */}
    </Tab.Navigator>
  );
}
