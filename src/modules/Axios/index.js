import axios from "axios";
import store from "redux/store";
import { configVar } from "../config";
// import { errorHandler, errorEmpty, redirectLogin } from "redux/app/actions";
import { getAuthToken } from "../helper";
// import { logout } from "redux/login/actions";

export const axiosPost = async (url, data) => {
  try {
    let { data: response } = await axios.post(configVar.BASE_URL + url, data);
    if (!response.status || response.code !== "200") {
      store.dispatch(errorHandler(response));
    }
    store.dispatch(errorEmpty());
    return response;
  } catch (error) {
    store.dispatch(errorHandler("Network Error"));
    console.log(error);
  }
};
export const axiosGet = async (url) => { 
  try {
    let { data: response } = await axios.get(configVar.BASE_URL + url);
    if (response.responseCode !== "200") store.dispatch(errorHandler(response));
    store.dispatch(errorEmpty());
    return response;
  } catch (error) {
    store.dispatch(errorHandler("Network Error"));
    console.log(error);
  }
};
export const axiosAuthGet = async (url) => {
  try { 
    let { data: response } = await axios.get(configVar.BASE_URL + url);
    if (!response || !response.status || response.code !== "200") {
      store.dispatch(errorHandler(response));
    }
    store.dispatch(errorEmpty());
    return response;
  } catch (error) {
    let res = error.response;
    if (res && res.status === 401 && res.statusText === "Unauthorized") {
      store.dispatch(logout());
    }
    error && console.log(error);
  }
};
export const axiosAuthPost = async (url, payload) => {
  try { 
     
    let { data: response } = await axios.post(
      configVar.BASE_URL + url,
      payload
    );
    if (!response || !response.status || response.code !== "200") {
      store.dispatch(errorHandler(response));
    }
    store.dispatch(errorEmpty());
    return response;
  } catch (error) {
    console.log(error);
  }
};
