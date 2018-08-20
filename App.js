import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createStackNavigator } from "react-navigation";
import thunkMiddleware from "redux-thunk";

import RssReaderMobileApp from "RssReaderMobileApp";
import FeedItem, { FeedItemConstants } from "feed/FeedItem";
import FeedItemContentNavigator, {
  FeedItemContentConstants
} from "feed/FeedItemContentNavigator";
import appReducer from "appReducer";
import { fetchFeed } from "actions";

class HomeScreen extends React.Component {
  store = createStore(appReducer, applyMiddleware(thunkMiddleware));

  componentDidMount() {
    this.store.dispatch(fetchFeed());
  }

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
