import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import {history} from '../history'
const middleware = [thunk];
const initialState = {};
export default createStore(
  rootReducer(history),
  initialState,
  applyMiddleware(...middleware)
);

