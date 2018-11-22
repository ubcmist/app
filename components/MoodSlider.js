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
          style={styles.sliderBar}
        />
        <View  style={styles.textContainer}>
          <Text style={styles.sliderText}>
            {this.props.left}
          </Text>
          <Text style={styles.sliderText}>
            {this.props.right}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5,
    marginTop: 5,
    alignItems: "stretch",
    justifyContent: "center",
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  sliderText: {
    fontSize: 15,
    color: '#2699fb'
  },

  sliderBar: {
    marginBottom: -10
  }
});

export { MoodSlider };