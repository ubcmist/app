import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions,TaskManager } from 'expo';


class ExpoLocation extends Component {
 constructor(props) {
     super(props);
 }

  


  componentDidMount = async() =>{
    await Location.startLocationUpdatesAsync('firstTask', {
        accuracy: Location.Accuracy.Balanced,
    });

  }

  render() {
    return null;
  }
}


TaskManager.defineTask('firstTask', ({ data, error }) => {
    if (error) {
      // Error occurred - check `error.message` for more details.
      return;
    }
    if (data) {
      const { locations } = data;
      console.log("locations", locations);
      // do something with the locations captured in the background
    }
  });
  







export default ExpoLocation
