// // import NewPassword from "./components/NewPassword";
import Homepage from "./pages/Homepage";



import DeliveryOrder from "./pages/DeliveryOrder";
import BulkOrder from "./pages/BulkOrder";
// import OrderCategory from "./components/OrderCategory";
import PickUpOrder from "./pages/PickUpOrder";
// import Login from "./components/Login"
import LandingPage from "./pages/LandingPage";
import RestuarantMenu from "./pages/RestuarantMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {loader as DeliveryRestaurantLoader} from "./pages/DeliveryOrder"
import {loader as PickUpOrderLoader} from "./pages/PickUpOrder"
import {loader as BulkOrderLoader} from "./pages/BulkOrder"
import Layout from "./utilities/Layout";
import Checkout from "./pages/Checkout"



const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {path:"checkout",element:<Checkout/>},
  {
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Homepage />,
        children: [
          { path: "deliveryOrder", element: <DeliveryOrder />,loader:DeliveryRestaurantLoader },
          { path: "bulkOrder", element: <BulkOrder />,loader:BulkOrderLoader},
          { path: "pickupOrder", element: <PickUpOrder />, loader:PickUpOrderLoader },

        ],
      },
      { path: "menu/", element: <RestuarantMenu /> },
    ],
  },
  {path:"menu/checkout",element:<Checkout/>}
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
