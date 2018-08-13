import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import FeedContentItem from "feed/FeedContentItem";

class FeedContent extends React.Component {
  render() {
    return (
      <FlatList
        data={this.props.feedItems}
        renderItem={({ item }) => <FeedContentItem item={item} />}
        keyExtractor={item => item.link}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }

  renderSeparator() {
    return <View style={styles.separator} />;
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: "black"
  }
});

export default FeedContent;
