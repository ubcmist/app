import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions,TaskManager } from 'expo';
export const BACKGROUND_LOCATION_UPDATES_TASK = 'background-location-updates'
TaskManager.defineTask(BACKGROUND_LOCATION_UPDATES_TASK, handleLocationUpdate)


class ExpoLocation extends Component {
  state = {
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Does not work!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    let text = '';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    console.log(text);


  };

  render() {
    
    return null;
  }
}



export async function handleLocationUpdate({ data, error }) {
    console.log('location update')
    const loc = "hubby";
    if (error) {
		return
	}
     if (data) {
        try {
            
            //console.log('locations',location)
        } catch (error) {
            console.log('the error',error)
        }
    }
}

export async function initializeBackgroundLocation(){
    let isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_LOCATION_UPDATES_TASK)
    if (!isRegistered) await Location.startLocationUpdatesAsync(BACKGROUND_LOCATION_UPDATES_TASK, {
        accuracy: Location.Accuracy.High,
        /* after edit */
        timeInterval: 2500,
        distanceInterval: 5,
    })
}



export default ExpoLocation
