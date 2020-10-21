import React, { Component } from 'react';
 
class Footer extends Component {
    render() {
        return (
        //This is the area where you paste your HTML codes
        <section id="myFooter">
	<section>Footer </section>
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Bus Booking Company</h3>

				<p class="footer-links">
					<a href="#">Home</a>
					·
					<a href="#">Pricing</a>
					·
					<a href="#">About</a>
					·
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">Bus Booking Company  © 2020</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

			<div class="footer-right">

				<p>Contact Us</p>

				<form action="#" method="post">

					<input type="text" name="email" placeholder="Email" />
					<textarea name="message" placeholder="Message"></textarea>
					<button>Send</button>

				</form>

			</div>

        </footer>
        </section>


)
    }
}
export default Footer;