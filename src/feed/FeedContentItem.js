import React from "react";
import { Text } from "react-native";

class FeedContentItem extends React.Component {
  render() {
    return <Text>{this.props.item}</Text>;
  }
}

export default FeedContentItem;
