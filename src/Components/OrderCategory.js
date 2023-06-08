import React from "react";
import "../styles/categories.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function OrderCategory() {
  return (
    <section className="categories-section_order">
      <div className="order-types">
        <NavLink to={"deliveryOrder"} className="order-type">
          Delivery
        </NavLink>
        <NavLink to={"pickupOrder"} className="order-type">
          Pickup
        </NavLink>
        <NavLink to={"bulkOrder"} className="order-type">
          Bulk Order
        </NavLink>
      </div>
    <Outlet/>
    </section>
  );
}

export default OrderCategory;
