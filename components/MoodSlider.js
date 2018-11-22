import React from "react";
import Slider from "react-native-slider";
import { StyleSheet, View, Text } from "react-native";

export default class MoodSlider extends React.Component {
  state = {
    value: 0.5
  };

  render() {
    return (
      <View style={styles.container}>
        <Slider 
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
          minimumTrackTintColor='#2699fb'
          maximumTrackTintColor='#bce0fd'
          thumbTintColor='#2699fb'
        />
        <View  style={styles.textContainer}>
          <Text style={styles.sliderText}>
            Very Anxious
          </Text>
          <Text style={styles.sliderText}>
            Totally Relaxed
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  sliderText: {
    fontSize: 20,
    color: '#2699fb'
  }
});

export { MoodSlider };