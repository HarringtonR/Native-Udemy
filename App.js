import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header headerText = {'Albums'}/>
        <AlbumList />
      </View>
    );
  }
}