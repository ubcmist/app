import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Home =  { 
  screen : HomeScreen,
  navigationOptions : {
    drawerLabel: 'Home',
    drawerIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  }
}

const Links =  {
  screen: LinksScreen,
  navigationOptions : {
    drawerLabel: 'Links',
    header: props => <AppHeader {...props} />,
    drawerIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
      />
    ),
  }
}

const Settings = {
  screen: SettingsScreen,
  navigationOptions  : {
    drawerLabel: 'Settings',
    header: props => <AppHeader {...props} />,
    drawerIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
      />
    ),
  }
}

export default createDrawerNavigator({
  Home,
  Links,
  Settings,
},
{
  drawerWidth: 225
});
