import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { createStackNavigator } from "react-navigation";

import RssReaderMobileApp from "RssReaderMobileApp";
import FeedItem, { FeedItemConstants } from "feed/FeedItem";
import FeedItemContentNavigator, {
  FeedItemContentConstants
} from "feed/FeedItemContentNavigator";
import AppReducer from "AppReducer";

class HomeScreen extends React.Component {
  store = createStore(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <View style={styles.container}>
          <RssReaderMobileApp />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const HomeConstants = {
  ROUTE_NAME: "Home"
};

// TODO: Should this live somewhere else? It knows about all of the routes/components.
const App = createStackNavigator({
  [HomeConstants.ROUTE_NAME]: HomeScreen,
  [FeedItemConstants.ROUTE_NAME]: FeedItem,
  [FeedItemContentConstants.ROUTE_NAME]: FeedItemContentNavigator
});

export default App;
