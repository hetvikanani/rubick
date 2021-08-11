import "./App.css";

import Floor from "./Page/Floor/index";
import "antd/dist/antd.css";

import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Floor/>
      </div>
    </Provider>
  );
}

export default App;

// import Request from "./Page/Request/index";
// import Dashboard from './Page/Dashboard';
// import Login from './Page/Login/index';
// import KdEmployee from './Page/KD/index';

{/* <Request /> */}
  {/* <Login/> */}
  {/* <Dashboard/> */}
  {/* <KdEmployee/> */}