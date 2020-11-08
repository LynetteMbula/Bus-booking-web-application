import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Payment from "./Payment";

class Header extends Component {
  render() {
    return (
      //This is the area where you paste your HTML codes

      <header>
        <section class="navigation">
          <div class="nav-container">
            <div class="brand">
              <Link to="/">LOGO</Link>
            </div>
            <nav>
              <div class="nav-mobile">
                <a id="nav-toggle" href="#!">
                  <span></span>
                </a>
              </div>

              <ul class="nav-list">
                <Link to="">
                  <li>Home</li>
                  {""}
                </Link>
                <Link to="aboutus">
                  <li>About </li>
                </Link>
                <Link to="contactus">
                  <li>Contact</li>
                </Link>
                <Link to="/makepayment">
                  <li>Make Payment</li>
                </Link>
                <Link to="/busbook">
                  <li>Book a Bus</li>
                </Link>
              </ul>
            </nav>
          </div>
        </section>
      </header>
    );
  }
}
export default Header;
