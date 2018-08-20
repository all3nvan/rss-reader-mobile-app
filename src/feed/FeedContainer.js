import React from "react";
import { connect } from "react-redux";

import Feed from "feed/Feed";

const mapStateToProps = state => {
  return {
    // I guess this needs to know the shape of the state?
    feedItems: state.feed.items
  };
};

const FeedContainer = connect(mapStateToProps)(Feed);

export default FeedContainer;
