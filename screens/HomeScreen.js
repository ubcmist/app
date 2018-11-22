import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { MoodSlider } from '../components/MoodSlider';
import { Bitmoji } from '../components/Bitmoji';
import { AppHeader } from '../components/AppHeader';

export default class HomeScreen extends React.Component {

  render() {

    return (
      
      <View style={styles.container}>
        <AppHeader title='Good Morning, Dominic' navigation={this.props.navigation}/>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text  style={styles.howDoYouFeelText}>How do you feel?</Text>
          <View style={styles.sliders}>
            <MoodSlider left='Very Anxious' right='Relaxed'/>
            <MoodSlider left='Very Tired' right='Energized'/>
          </View>
          <Bitmoji/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  sliders: {
    paddingBottom: 20
  }
});
