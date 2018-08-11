import React from "react";
import { connect } from "react-redux";

import FeedContent from "feed/FeedContent";

const mapStateToProps = state => {
  return {
    feedItems: [
      "https://www.seattletimes.com/sports/seahawks/seahawks-waive-lb-warren-long-re-sign-former-bellevue-high-star-marcus-henry/?utm_source=RSS&utm_medium=Referral&utm_campaign=RSS_all",
      "https://www.seattletimes.com/nation-world/nation-politics/rain-pouring-trump-rages-on-twitter-and-hangs-with-bikers/?utm_source=RSS&utm_medium=Referral&utm_campaign=RSS_all"
    ]
  };
};

const FeedContentContainer = connect(mapStateToProps)(FeedContent);

export default FeedContentContainer;
