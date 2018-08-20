import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import FeedItem from "feed/FeedItem";

class Feed extends React.Component {
  render() {
    // TODO: handle loading logic here and show spinner?
    return (
      <FlatList
        data={this.props.feedItems}
        renderItem={({ item }) => <FeedItem item={item} />}
        keyExtractor={item => item.url}
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

export default Feed;
