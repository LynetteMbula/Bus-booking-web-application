import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class Header extends Component {
    render() {
        return (
        //This is the area where you paste your HTML codes
        <header>
			<section class="navigation">
				<div class="nav-container">
				  <div class="brand">
					<Link to = '/' >LOGO</Link>
				  </div>
				  <nav>
					<div class="nav-mobile">
					  <a id="nav-toggle" href="#!"><span></span></a>
					</div>
					<ul class="nav-list">
					  
					  <li><a href="index.html">Home</a></li>
					  <li><a href="#">About Us</a></li>
					  <li><a href="#">Contact Us</a></li>
					</ul>
				  </nav>
				</div>
			  </section>
		  </header>
)
    }
}
export default Header;