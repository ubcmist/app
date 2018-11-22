import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createDrawerNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
});