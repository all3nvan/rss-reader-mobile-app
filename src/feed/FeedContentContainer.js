import React from 'react';
import { connect } from 'react-redux';

import FeedContent from 'feed/FeedContent';

const mapStateToProps = state => {
  return {
    feed: 'www.google.com'
  }
}

const FeedContentContainer = connect(
  mapStateToProps
)(FeedContent);

export default FeedContentContainer;
