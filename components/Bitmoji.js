import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default class Bitmoji extends React.Component {

  render() {
    return (
      <View style={styles.container}>
         <Image
          style={{width: 200, height: 200, borderRadius:100, borderWidth:5, borderColor:"#bce0fd"}}
          source={require('../assets/images/bitmojiPlaceholder.png')}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  }
});

export { Bitmoji };