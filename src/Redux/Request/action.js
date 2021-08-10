import * as actions from "./constant";
import {axiosAuthGet} from "../../modules/Axios"
import { floorConstant } from "../../modules/config";
export const getFloorList = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_FLOOR_LIST_INITIATED });
    let response = await axiosAuthGet(floorConstant.GET_FLOOR );
    if (response.status || response.code === "200") {
      await dispatch({
        type: actions.GET_FLOOR_LIST_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_FLOOR_LIST_ERROR,
        error: "Network Error",
      });
    }
    console.log('response',response);
  } catch (error) {
    dispatch({
      type: actions.GET_FLOOR_LIST_ERROR,
      error: "Network Error",
    });
  }
};

