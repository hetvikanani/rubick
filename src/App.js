import "./App.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
// import SideMenu from "./Components/SideMenu";
// import  MyLayout from "./Components/Layout/Layout"
// import Test from "./Page/Test"
// import AcceptMob from "./Page/Accept_Mobile";
import Farm from "./Page/Farm/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <SideMenu/> */}
        {/* <MyLayout/> */}
        {/* <Test></Test> */}
        {/* <AcceptMob/> */}
        <Farm/>
      </div>
    </Provider>
  );
}

export default App;
// import Floor from "./Page/Floor/index";
// import Request from "./Page/Request/index";
// import Dashboard from './Page/Dashboard';
// import Login from './Page/Login/index';
// import KdEmployee from './Page/KD/index';
// import DashEmp from "./Page/DashEmp";

{
        {/* <DashEmp/> */}

  /* <Request /> */
}
{
  /* <Login/> */
}
{
  /* <Dashboard/> */
}
{
  /* <KdEmployee/> */
}
// <Floor/>
