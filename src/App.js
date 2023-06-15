// // import NewPassword from "./components/NewPassword";
import Homepage from "./components/Homepage";
// import SignUp from "./components/SignUp";
// import ForgotPassword from "./components/ForgotPassword";
// import Activation from "./components/Activation";
// import DeliveryAddress from "./components/DeliveryAddress";
import RestuarantMenu from "./components/RestuarantMenu/RestuarantMenu";

import Cart from "./components/Cart";
// import { Route, Routes } from "react-router";
import DeliveryOrder from "./components/DeliveryOrder";
import BulkOrder from "./components/BulkOrder";
// import OrderCategory from "./components/OrderCategory";
import PickUpOrder from "./components/PickUpOrder";
// import Login from "./components/Login"
import LandingPage from "./components/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./utilities/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Homepage />,
        children: [
          { path: "deliveryOrder", element: <DeliveryOrder /> },
          { path: "bulkOrder", element: <BulkOrder /> },
          { path: "pickupOrder", element: <PickUpOrder /> },
        ],
      },
      { path: "menu", element: <RestuarantMenu /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
