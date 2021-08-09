import * as actions from "./constant";

const initialState = {
  error: false,
  loading: false,
  message: false,
  floor: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_FLOOR_LIST_INITIATED:
      return {
        ...state,
        message: false,
        error: false,
        loading: true,
      };
    case actions.GET_FLOOR_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        floor: action.payload.data,
      };
    case actions.GET_FLOOR_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.error,
      };
    default:
      return state;
  }
};
