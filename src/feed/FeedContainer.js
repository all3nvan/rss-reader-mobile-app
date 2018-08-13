import React from "react";
import { connect } from "react-redux";

import Feed from "feed/Feed";
import { feedItems } from "test-data/TestData";

const mapStateToProps = state => {
  return {
    feedItems: feedItems
  };
};

const FeedContainer = connect(mapStateToProps)(Feed);

export default FeedContainer;
