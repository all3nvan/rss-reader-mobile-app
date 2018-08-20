import { feedItems } from "test-data/testData";

export const LOAD_FEED = "LOAD_FEED";
export const loadFeed = () => {
  return {
    type: LOAD_FEED
  };
};

export const REQUEST_FEED = "REQUEST_FEED";
const requestFeed = () => {
  return {
    type: REQUEST_FEED
  };
};

export const RECEIVE_FEED = "RECEIVE_FEED";
const receiveFeed = feedJson => {
  return {
    type: RECEIVE_FEED,
    feedItems: feedJson
  };
};

export const fetchFeed = () => {
  return dispatch => {
    dispatch(requestFeed());

    return new Promise((resolve, reject) => {
      // TODO: call server for data
      setTimeout(resolve, 2000, feedItems);
    }).then(json => {
      dispatch(receiveFeed(json));
    });
  };
};
