import { combineReducers } from "redux";

import { REQUEST_FEED, RECEIVE_FEED } from "actions";

const feed = (state = { isFetching: false, items: [] }, action) => {
  switch (action.type) {
    case REQUEST_FEED:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_FEED:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.feedItems
      });
    default:
      return state;
  }
};

const appReducer = combineReducers({ feed });

export default appReducer;
