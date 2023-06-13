import React from "react";
import mealy from "../images/MEALY.jpg";
import cart from "../images/cart.jpg";
import "../styles/LandingPage.css";
import Elipse from "../images/Group 203Elipse.png";
import About from "../images/Group 202AboutUs.jpg";
import Breakfast from "../images/BreakfastHub.jpg";
import Gory from "../images/Gory Cafe.jpg";
import Platter from "../images/Platters.png";
import br_sm from "../images/br-small.jpg";
import gory_sm from "../images/gory-small.png";
import pl_sm from "../images/platter-small.png";
import rating from "../images/rating.jpg";
import rating2 from "../images/rating2.png";
import rating3 from "../images/rating3.jpg";
import bike from "../images/Group 206bike.jpg";
import clock from "../images/Group 207clock.jpg";
import cutlery from "../images/Group 205cutlery.jpg";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <section>
      <div className="LandingPage">
        <div className="header">
          <div className="Logo">
            <img src={mealy} alt="Logo" />
          </div>

          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About Us </NavLink>
            <NavLink to="/">Contact Us</NavLink>
            <img src={cart} className="cart" alt="Cart" />
          </div>
        </div>
        <div className="hero">
          <div className="hero-text">
            <h2 className="heading">Delightful Eats</h2>
            <h2 className="heading">
              Delivered with <span className="highlight">Ease!</span>{" "}
            </h2>
            <p>
              Enjoy a hassle free dining experience <br /> as we bring the best
              restaurants and <br /> dishes right to your doorstep.
            </p>
            <button>Get Started</button>
          </div>

          <img
            src={Elipse}
            className="img1"
            alt="Pictures of different dishes"
          />
        </div>

        <div className="About">
          <div>
            <img src={About} alt="" />
          </div>
          <div className="About-text">
            <h2>
              About <span className="highlight">Us</span>
            </h2>
            <p>
              Our food delivery app brings your favorite <br /> dishes to your
              doorstep. From local to <br /> popular restaurants, we connect you
              with <br /> a wide selection of delicious meals.
            </p>
          </div>
        </div>

        <div className="popular">
          <h2>
            Most Popular <span className="highlight">Restaurant</span>{" "}
          </h2>

          <div className="food-grid">
            <div className="food-item">
              <h3 className="food-name">
                {" "}
                <span className="icon">
                  <img src={br_sm} alt="" />
                </span>
                Breakfast Hub
              </h3>
              <img src={Breakfast} alt="Food 1"></img>

              <p className="food-rating">
                <img src={rating} alt="" />
              </p>
            </div>
            <div className="food-item">
              <h3 className="food-name">
                {" "}
                <span className="icon">
                  <img src={gory_sm} alt="" />
                </span>
                Gory's Cafe
              </h3>
              <img src={Gory} alt="Food 2"></img>

              <p className="food-rating">
                <img src={rating2} alt="" />
              </p>
            </div>
            <div className="food-item">
              <h3 className="food-name">
                {" "}
                <span className="icon">
                  <img src={pl_sm} alt="" />
                </span>
                Platter's Couch
              </h3>
              <img src={Platter} alt="Food 3"></img>

              <p className="food-rating">
                <img src={rating3} alt="" />
              </p>
            </div>
          </div>
        </div>
        <div className="grid">
          <h2>
            Why <span className="highlight"> Choose</span> Us ?
          </h2>

          <div className="grid-container">
            <div className="grid-box">
              <img src={bike} alt="" />
              <h2>Fast Delivery </h2>
              <p>
                Enjoy fast and reliable <br /> delivery to every <br /> location{" "}
              </p>
            </div>
            <div className="grid-box">
              <img src={clock} alt="" />
              <h2>
                24/7 Delivery <br />
                Services
              </h2>{" "}
              <p>
                Craving a deliciousmeal at <br /> any hour? Mealy has <br /> got
                you covered!
              </p>
            </div>
            <div className="grid-box">
              <img src={cutlery} alt="" />
              <h2>Quality Food</h2>{" "}
              <p>
                Good food, good <br /> mood we take this <br /> as a top
                priority
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default LandingPage;
