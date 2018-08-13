import React from "react";

import FeedItemContent from "feed/FeedItemContent";

class FeedItemContentNavigator extends React.Component {
  render() {
    return (
      <FeedItemContent
        url={this.props.navigation.getParam(FeedItemContentConstants.URL_PARAM)}
      />
    );
  }
}

const FeedItemContentConstants = {
  ROUTE_NAME: "FeedItemContentNavigator",
  URL_PARAM: "url"
};

export { FeedItemContentConstants };
export default FeedItemContentNavigator;
