import React from 'react';
import { View, StyleSheet, Text, StatusBar, Platform } from 'react-native';
import { Icon } from 'expo';
export default class AppHeader extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Icon.Ionicons
                    name='md-menu'
                    size={35}
                    style={styles.menuIcon}
                    color='white'
                />
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        </View>
    );
  }
  
}
const styles = StyleSheet.create({
    container: {
      height: Platform.OS ? 70 : 60,
      backgroundColor: '#2699fb',
      alignItems: 'center',
    },
    innerContainer : {
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      paddingTop:  Platform.OS ? 15 : StatusBar.currentHeight
    },
    title : {
      fontSize: 20,
      color: 'white',
      textAlign: "center"
    },
    menuIcon : {
        justifyContent: 'center', alignItems: 'center',
        top: 24, left: 20, right: 0, bottom: 0,
      position: 'absolute',

    }
})

export { AppHeader };