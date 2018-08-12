import React from "react";
import { FlatList } from "react-native";

import FeedContentItem from "feed/FeedContentItem";

class FeedContent extends React.Component {
  render() {
    return this.props.feedItems.map(item => (
      <FeedContentItem key={item} item={item} />
    ));
  }
}

export default FeedContent;
