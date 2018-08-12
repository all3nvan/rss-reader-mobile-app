import React from "react";
import { FlatList } from "react-native";

import FeedContentItem from "feed/FeedContentItem";

class FeedContent extends React.Component {
  render() {
    const keyedFeedItems = this.props.feedItems.map(item => ({
      key: item.title,
      item: item
    }));

    return (
      <FlatList
        data={keyedFeedItems}
        renderItem={({ item }) => <FeedContentItem item={item.item} />}
      />
    );
  }
}

export default FeedContent;
