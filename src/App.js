import "./App.css";

import Request from "./Page/Request/index";
import "antd/dist/antd.css";

import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      
        <Request />
      </div>
    </Provider>
  );
}

export default App;


// import Dashboard from './Page/Dashboard';
// import Login from './Page/Login/index';
// import KdEmployee from './Page/KD/index';


  {/* <Login/> */}
  {/* <Dashboard/> */}
  {/* <KdEmployee/> */}