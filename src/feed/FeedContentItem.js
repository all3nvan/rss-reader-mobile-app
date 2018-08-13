import React from "react";
import { StyleSheet, Text, View } from "react-native";

class FeedContentItem extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.title}>{this.props.item.title}</Text>
        </View>
        <View>
          <Text>{this.props.item.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold"
  }
});

export default FeedContentItem;
