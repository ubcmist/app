import React from 'react';
import { View, StyleSheet, Text, StatusBar, Platform, NativeModules  } from 'react-native';
import { Icon } from 'expo';


export default class AppHeader extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={{ flex: 1, paddingLeft: 20 }}>
                <Icon.Ionicons
                  name='md-menu'
                  size={35}
                  style={styles.menuIcon}
                  color='white'
                />
              </View>
              <View style={{ flex: 6, paddingRight: 10 }}>
                <Text style={styles.title}>{this.props.title}</Text>
              </View>
              <View
                style={{ flex: 1, paddingRight: 10 }}>
              </View>
              
                
                
            </View>
        </View>
    );
  }
  
}

const { StatusBarManager } = NativeModules;

const styles = StyleSheet.create({
    container: {
      height: 80,
      backgroundColor: '#2699fb',
    },
    innerContainer : {
      flex: 1,
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
      width: '100%',
      paddingTop: Platform.OS === 'ios' ? 18 : StatusBarManager.HEIGHT
    },
    title : {
      fontSize: 20,
      color: 'white',
      textAlign: "center"
    },
    menuIcon : {
       

    }
})

export { AppHeader };