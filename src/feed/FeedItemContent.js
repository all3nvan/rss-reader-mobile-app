import React from "react";
import { Text } from "react-native";

class FeedItemContent extends React.Component {
  render() {
    return <Text>{this.props.link}</Text>;
  }
}

export default FeedItemContent;
