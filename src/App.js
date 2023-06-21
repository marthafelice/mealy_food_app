// // import NewPassword from "./components/NewPassword";
import Homepage from "./components/Homepage";
// import SignUp from "./components/SignUp";
// import ForgotPassword from "./components/ForgotPassword";
// import Activation from "./components/Activation";
// import DeliveryAddress from "./components/DeliveryAddress";

import Cart from "./components/CartModal";
// import { Route, Routes } from "react-router";
import DeliveryOrder from "./components/DeliveryOrder";
import BulkOrder from "./components/BulkOrder";
// import OrderCategory from "./components/OrderCategory";
import PickUpOrder from "./components/PickUpOrder";
// import Login from "./components/Login"
import LandingPage from "./components/LandingPage";
import RestuarantMenu from "./components/RestuarantMenu/RestuarantMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./utilities/Layout";
import CartModal from "./components/CartModal";
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
  { path: "menu", element: <RestuarantMenu /> },
  { path: "live", element: <CartModal /> },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
