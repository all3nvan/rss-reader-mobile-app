import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { withNavigation } from "react-navigation";

import { FeedItemContentConstants } from "feed/FeedItemContentNavigator";

class FeedItem extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.navigation.navigate.bind(
          this,
          FeedItemContentConstants.ROUTE_NAME,
          {
            [FeedItemContentConstants.LINK_PARAM]: this.props.item.link
          }
        )}
      >
        <View>
          <View>
            <Text style={styles.title}>{this.props.item.title}</Text>
          </View>
          <View>
            <Text>{this.props.item.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold"
  }
});

const FeedItemConstants = {
  ROUTE_NAME: "FeedItem"
};

export { FeedItemConstants };
// TODO: Should the navigation wrapped component be its own component?
export default withNavigation(FeedItem);
