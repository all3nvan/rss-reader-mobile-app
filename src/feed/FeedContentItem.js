import React from "react";
import { StyleSheet, WebView } from "react-native";

class FeedContentItem extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: this.props.item }}
        style={styles.contentItem}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  contentItem: {
    marginTop: 20,
    width: 320,
    flex: 1
  }
});

export default FeedContentItem;
