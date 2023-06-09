import "./App.css";
// import NewPassword from "./components/NewPassword";
import Homepage from "./components/Homepage";
// import SignUp from "./components/SignUp";
// import ForgotPassword from "./components/ForgotPassword";
// import Activation from "./components/Activation";
// import DeliveryAddress from "./components/DeliveryAddress";

import "./styles/activation.css";
import { Route, Routes } from "react-router";
import DeliveryOrder from "./components/DeliveryOrder";
import BulkOrder from "./components/BulkOrder";
// import OrderCategory from "./components/OrderCategory";
import PickUpOrder from "./components/PickUpOrder";
// import Login from "./components/Login"

function App() {
  return (
    <div className="app">
       {/* <NewPassword /> */}
      {/* <SignUp/> */}
      {/* <Homepage /> */}
      {/* <ForgotPassword/> */}
      {/* <DeliveryAddress /> */}
      {/* <Activation /> */}
      {/* <p>{value}</p>
      <button onClick={incrementValue}>increment</button> */}
      {/* <DeliveryAddress /> */}
      {/* <Login/> */}
      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="deliveryOrder" element={<DeliveryOrder />} />
          <Route path="bulkOrder" element={<BulkOrder />} />
          <Route path="pickupOrder" element={<PickUpOrder />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;






