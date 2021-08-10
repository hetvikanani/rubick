import * as actions from "./constant";
import { axiosAuthGet } from "../../modules/Axios";
import { floorConstant } from "../../modules/config";
import axios from "axios";
export const getFloorList = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_FLOOR_LIST_INITIATED });
    // let response = await axiosAuthGet(floorConstant.GET_FLOOR);
    let response = await axios.get(
      "https:/porterapi.naapbooks.com/" + floorConstant.GET_FLOOR
    );
    console.log(response);
    if (response.data.status || response.data.code === "200") {
      await dispatch({
        type: actions.GET_FLOOR_LIST_SUCCESS,
        payload: response.data,
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
