import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
  return (
    <View>
      <Text> {props.d.title} </Text>
    </View>
    );
};

export default AlbumDetail;
