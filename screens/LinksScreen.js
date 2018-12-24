import React from 'react';
import { ScrollView, StyleSheet, View, ActivityIndicator, FlatList, Text } from 'react-native';
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
//https://jsonplaceholder.typicode.com/todos/1
componentDidMount(){
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });
}

  render() {
    console.log(this.state.isLoading);
    if(this.state.isLoading){
      return(
        <View>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
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
