import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Navbar1 = () => {
  const items = useSelector(state=>state.cart)
  return (
    <div>
      <nav
        expand="lg"
        className="bg-body-tertiary fixed-top  bg-warning rounded-3 d-flex justify-content-between fs-3 p-3 "
      >
        <div>
          <Link className=" text-decoration-none text-dark" to="/Product-shop/home">
            Redux Store
          </Link>
        </div>
        
        <div className="  position-relative">
        <Link className=" text-decoration-none text-dark" to="/Product-shop/cart">
          <i className="fa-solid fa-cart-shopping fs-2"></i>
          </Link>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger p-1">
              {items.length}
              {/* <span className="visually-hidden">unread messages</span> */}
            </span>
          </div>
      </nav>
    </div>
  );
};

export default Navbar1;
{
  /* <Link to="/cart">cart</Link> */
}
{
  /* <Link to="/home">Product_List</Link> */
}
