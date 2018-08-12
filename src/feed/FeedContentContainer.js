import React from "react";
import { connect } from "react-redux";

import FeedContent from "feed/FeedContent";
import { feedItems } from "test-data/TestData";

const mapStateToProps = state => {
  return {
    feedItems: feedItems
  };
};

const FeedContentContainer = connect(mapStateToProps)(FeedContent);

export default FeedContentContainer;
