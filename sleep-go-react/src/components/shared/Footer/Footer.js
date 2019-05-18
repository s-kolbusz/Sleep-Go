import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <section id="footer">
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</a></li>
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</a></li>
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
						<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
						<li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right"></i>Imprint</a></li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr></hr>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u><a href="#home"></a></u> lorem ipsum </p>
					<p className="h6">copy All right Reversed.<a className="text-green ml-2" href="#home" target="_blank">SleepGo</a></p>
				</div>
				<hr></hr>
			</div>	
		</div>
	</section>
  );
}

export default Footer;