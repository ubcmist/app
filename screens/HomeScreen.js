import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Slider,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { MoodSlider } from '../components/MoodSlider';
import { AppHeader } from '../components/AppHeader';
import HorizontalCarousel from '../components/Horizontal-carousel';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  howDoYouFeelText: {
    fontSize: 25,
    color: '#707070',
    lineHeight: 28,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  recommendedExercisesText: {
    fontSize: 20,
    color: '#707070',
    lineHeight: 20,
    textAlign: 'center',
    paddingTop: 3,
    paddingBottom: 1,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius:100,
    borderWidth: 1,
    borderColor:"#bce0fd",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 100,
    marginVertical: 10,
  },
  sliders: {
    width: 400,
    paddingBottom: 10
  },
  exerciseCarousel: {
    width: 100,
    height: 100,
    borderWidth: 2,
  }
});


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.howDoYouFeelText}>How are you today?</Text>
          <Image style={styles.avatar} source={require('../assets/images/bitmojiPlaceholder.png')} />
          <View style={styles.sliders}>
            <MoodSlider left='Very Stressed' right='Not Stressed'/>
            <MoodSlider left='Very Anxious' right='Relaxed'/>
            <MoodSlider left='Very Tired' right='Energized'/>
          </View>
          <Text style={styles.recommendedExercisesText} >Recommended Exercises</Text>
          <HorizontalCarousel style={styles.exerciseCarousel} ></HorizontalCarousel>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}