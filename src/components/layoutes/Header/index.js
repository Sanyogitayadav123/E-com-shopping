import React from 'react'

import { NavLink } from 'react-router-dom';
// import SwiperCore, { Navigation, Autoplay } from "swiper/core";

const Header = () => {

  return (
    <>
       <div className="header-area">
    <div className="container">
      {/* <div className="row">
        <div className="col-md-8">
          <div className="user-menu">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-user" /> My Account
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-heart" /> Wishlist
                </a>
              </li>
              <li>
                <a href="cart.html">
                  <i className="fa fa-user" /> My Cart
                </a>
              </li>
              <li>
                <a href="checkout.html">
                  <i className="fa fa-user" /> Checkout
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-user" /> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="header-right">
            <ul className="list-unstyled list-inline">
              <li className="dropdown dropdown-small">
                <a
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  className="dropdown-toggle"
                  href="#"
                >
                  <span className="key">currency :</span>
                  <span className="value">USD </span>
                  <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">USD</a>
                  </li>
                  <li>
                    <a href="#">INR</a>
                  </li>
                  <li>
                    <a href="#">GBP</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-small">
                <a
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  className="dropdown-toggle"
                  href="#"
                >
                  <span className="key">language :</span>
                  <span className="value">English </span>
                  <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">French</a>
                  </li>
                  <li>
                    <a href="#">German</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  </div>

    {/* <div className="site-branding-area">
  <div className="container">
    <div className="row">
      <div className="col-sm-6">
        <div className="logo">
          <h1>
            <a href="./">
              <img src="img/logo.png" />
            </a>
          </h1>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="shopping-item">
          <a href="cart.html">
            Cart - <span className="cart-amunt">$100</span>{" "}
            <i className="fa fa-shopping-cart" />{" "}
            <span className="product-count">5</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div> */}

<div
  id="undefined-sticky-wrapper"
  className="sticky-wrapper"
  style={{ height: 60 }}
>
  <div className="mainmenu-area" style={{}}>
    <div className="container">
      <div className="row">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            {/* <li className="active">
              <a href="index.html">Home</a>
            </li> */}
            <li>
              <NavLink to="/shop">Shop page</NavLink>
            </li>
            {/* <li>
              <a href="single-product.html">Single product</a>
            </li> */}
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            {/* <li>
              <a href="checkout.html">Checkout</a>
            </li>
            <li>
              <a href="#">Category</a>
            </li>
            <li>
              <a href="#">Others</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
 
  
  )
}

export default Header