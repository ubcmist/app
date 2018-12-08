import React from 'react';
import { ScrollView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import AppHeader from '../components/AppHeader';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount (){
    return fetch().then((response) => response.json("https://jsonplaceholder.typicode.com/todos"))
    .then((jsonresp) => {

        this.setState = ({
            isLoading: false,
            dataSource: jsonresp.title,
        })
      });
  }

  render() {
    
    if(this.state.isLoading){
      return(
        <View>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View>
        loaded.
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
