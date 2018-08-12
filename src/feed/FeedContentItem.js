import React from "react";
import { StyleSheet, Text } from "react-native";

class FeedContentItem extends React.Component {
  render() {
    return (
      <Text>
        <Text>{this.props.item.title}</Text>
        <Text>{this.props.item.link}</Text>
        <Text>{this.props.item.description}</Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  contentItem: {
    marginTop: 20,
    width: 320,
    flex: 1
  }
});

export default FeedContentItem;
