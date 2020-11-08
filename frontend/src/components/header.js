import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Payment from "./Payment";

class Header extends Component {
  render() {
    return (
      //This is the area where you paste your HTML codes

      <header>
        <section className="navigation">
          <div className="nav-container">
            <div className="brand">
              <Link to="/">LOGO</Link>
            </div>
            <nav>
              <div className="nav-mobile">
                <a id="nav-toggle" href="#!">
                  <span></span>
                </a>
              </div>

              <ul className="nav-list">
                <Link to="">
                  <li>Home</li>
                  {""}
                </Link>
                <Link to="aboutus">
                  <li>About </li>
                </Link>
                <Link to="/contact">
                  <li>Contact</li>
                </Link>
                <Link to="/makepayment">
                  <li>Make Payment</li>
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
