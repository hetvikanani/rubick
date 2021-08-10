import { push } from "connected-react-router";
import { message } from "antd";

import { axiosAuthGet, axiosPost } from "../../modules/Axios";
import { loader } from "../app/actions";
import { apiConstant } from "../../modules/config";
import * as actions from "./constant";

export const login = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.LOGIN_INITIATED });
    let response = await axiosPost(apiConstant.AUTH_LOGIN, payload);
    if (response.status || response.code === "200") {
      await dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: response,
      });
      let data = response.data;
      if (data.role === "PORTER") {
        message.warning("Sorry, not allowed to access as porter");
      } else {
        message.success(response.message);
        localStorage.setItem(
          "auth",
          JSON.stringify({
            prj: "kd",
            userId: data.userid,
            userName: data.name,
            role: data.role,
            email: data.email,
            number: data.number,
            sessionId: data.sessionid,
            logtime: new Date(),
          })
        );
        dispatch(push("/"));
        window.location.reload();
      }
    } else
      dispatch({
        type: actions.LOGIN_ERROR,
        error: response.message,
      });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.LOGIN_ERROR,
      error: "Network Error",
    });
  }
};
export const setAuth = (payload) => (dispatch) => {
  dispatch({
    type: actions.SET_AUTH,
    payload,
  });
};
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: actions.LOGOUT_INITIATED });
    dispatch(loader(true));
    localStorage.removeItem("auth");
    dispatch({ type: actions.LOGOUT });
    dispatch(loader(false));
    // await axiosLogout(session_id + "/" + user_Id, token);
    window.location.pathname !== "/login" && dispatch(push("/login"));
  } catch (error) {
    dispatch(loader(false));
    console.log(error, "Logout Error");
  }
};
export const CheckSession = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.CHECK_SESSION_INITIATED });
    let response = await axiosAuthGet(apiConstant.CHECK_SESSION + payload);
    if (!response) {
      dispatch({ type: actions.CHECK_SESSION_ERROR });
      dispatch(logout());
    } else {
      await dispatch({ type: actions.CHECK_SESSION_SUCCESS });
    }
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.CHECK_SESSION_ERROR,
      error: "Network Error",
    });
  }
};
