import React from "react";
import { WebView } from "react-native";

class FeedItemContent extends React.Component {
  render() {
    return (
      <WebView source={{ uri: this.props.url }} startInLoadingState={true} />
    );
  }
}

export default FeedItemContent;
