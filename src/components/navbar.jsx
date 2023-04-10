import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Storefront } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="linksshop">
        <Link to="/">
          <Storefront size={40} />
        </Link>
      </div>
        <Link id="navtitle" to="/"><h1>RohanShop.com</h1></Link>
      <div className="linkscart">
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
