import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import request from './Request/reducer';

const rootReducer = (history) =>
  combineReducers({
    request,
    router: connectRouter(history),
  });
export default rootReducer;
