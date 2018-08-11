import React from 'react';
import { Text } from 'react-native';

class FeedContent extends React.Component {
  render() {
    return (
      <Text>{this.props.feed}</Text>
    );
  }
}

export default FeedContent;
