// // import NewPassword from "./components/NewPassword";
import Homepage from "./components/Homepage";

import RestuarantMenu from "./components/RestuarantMenu/RestuarantMenu";

import DeliveryOrder from "./components/DeliveryOrder";
import BulkOrder from "./components/BulkOrder";
// import OrderCategory from "./components/OrderCategory";
import PickUpOrder from "./components/PickUpOrder";
// import Login from "./components/Login"
import LandingPage from "./components/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {loader as DeliveryRestaurantLoader} from "./components/DeliveryOrder"

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
          { path: "deliveryOrder", element: <DeliveryOrder />,loader:DeliveryRestaurantLoader },
          { path: "bulkOrder", element: <BulkOrder /> },
          { path: "pickupOrder", element: <PickUpOrder /> },
        ],
      },
      { path: "menu", element: <RestuarantMenu /> },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
