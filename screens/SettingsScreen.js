import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View>
          <AppHeader title='Settings'></AppHeader>
          <ScrollView>
            <ExpoConfigView/>
          </ScrollView>
      </View>
    );
  }
}
