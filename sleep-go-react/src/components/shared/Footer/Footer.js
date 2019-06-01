import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <section id="footer">
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr></hr>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p> lorem ipsum </p>
					<p className="h6">copy All right Reversed.<a className="text-green ml-2" href="#home" target="_blank">SleepGo</a></p>
				</div>
				<hr></hr>
			</div>
		</div>
	</section>
  );
}

export default Footer;