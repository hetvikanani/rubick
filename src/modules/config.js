export const configVar = {
  BASE_URL: "https:/porterapi.naapbooks.com/",
};

export const apiConstant = {
  AUTH_LOGIN: "api/Account/Login",
  AUTH_LOGOUT: "api/Account/Logout/",
  CHECK_SESSION: "api/Account/CheckSession/",
  //  AUTH_REGISTER: "/api/Chat/Registration",
  //  FORGET_PASSWORD: "/api/Chat/ForgotPassword/",
  //  CHANGE_PASSWORD: "/api/Chat/ChangePassword",
  //  GET_ALL_USER: "/api/User/GetAllUsers",
};
export const floorConstant = {
  ADD_FLOOR: "api/Master/SaveFloor",
  DELETE_FLOOR: "api/Master/DeleteFloor/",
  GET_FLOOR: "api/Master/GetFloorList/",
  GET_FLOOR_DETAIL: "api/Master/GetFloorDetail/",
  ENABLE_FLOOR: "api/Master/EnableDisableFloor/",
  GET_FLOOR_DROP: "api/Master/GetFloorDropdown",
};

export const locationConstant = {
  ADD_LOCATION: "api/Master/SaveLocation",
  DELETE_LOCATION: "api/Master/DeleteLocation/",
  GET_LOCATION: "api/Master/GetLocationList",
  GET_LOCATION_DETAIL: "api/Master/GetLocationDetail/",
  ENABLE_LOCATION: "api/Master/EnableDisableLocation/",
  GET_LOCATION_DROP: "api/Master/GetLocationDropdown/",
};

export const employeeConstant = {
  ADD_EMPLOYEE: "api/Master/SaveEmployee",
  DELETE_EMPLOYEE: "api/Master/DeleteEmployee/",
  GET_EMPLOYEE: "api/Master/GetEmployeeList",
  GET_EMPLOYEE_DETAIL: "api/Master/GetEmployeeDetail/",
  ENABLE_EMPLOYEE: "api/Master/EnableDisableEmployee/",
  GET_EMPLOYEE_LOCATION: "api/Master/GetEmployeeLocation/",
};

export const porterConstant = {
  ADD_PORTER: "api/Master/SavePorter",
  DELETE_PORTER: "api/Master/DeletePorter/",
  GET_PORTER: "api/Master/GetPorterList",
  GET_PORTER_DETAIL: "api/Master/GetPorterDetail/",
  ENABLE_PORTER: "api/Master/EnableDisablePorter/",

};
export const requestConstant = {
  SAVE_REQUEST: "api/Employee/SaveRequest",
  DELETE_REQUEST: "api/Employee/DeleteRequest/",
  GET_REQUEST: "api/Employee/GetRequestList/",
  GET_REQUEST_DETAIL: "api/Employee/GetRequestDetail/",
  COMPLETE_REQUEST: "api/Employee/CompleteRequest/",
  INITIATED_REQUEST: "api/Employee/InitiatedRequestDetails/",
};
