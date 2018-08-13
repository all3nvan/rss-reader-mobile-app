import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import RssReaderMobileApp from "RssReaderMobileApp";
import AppReducer from "AppReducer";

export default class App extends React.Component {
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
    justifyContent: "center",
    marginTop: 22
  }
});
