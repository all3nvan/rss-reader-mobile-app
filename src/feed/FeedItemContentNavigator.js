import React from "react";

import FeedItemContent from "feed/FeedItemContent";

class FeedItemContentNavigator extends React.Component {
  render() {
    return (
      <FeedItemContent
        link={this.props.navigation.getParam(
          FeedItemContentConstants.LINK_PARAM
        )}
      />
    );
  }
}

const FeedItemContentConstants = {
  ROUTE_NAME: "FeedItemContentNavigator",
  LINK_PARAM: "link"
};

export { FeedItemContentConstants };
export default FeedItemContentNavigator;
