import React from 'react';
import { Link } from 'react-router-dom';
import '../static/Navbar.css';

class Navbar extends React.Component {
	renderNavbar() {
		const dot = './';

		return (
			<div id="navbar">
				<nav className="navbar navbar-collapse navbar-expand-sm navbar-light">
					<div className="navbar-brand">
						<Link to="/">
							<img src={`${dot}assets/vl-logo.png`} className="navbar-logo" alt="Virtual Labs" />
						</Link>
					</div>

					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collpase navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto links">
							<li className="nav-item">
								<a className="nav-link" href="./index.html">
									HOME
								</a>{' '}
								&nbsp; &nbsp;
							</li>
							<li className="nav-item">
								<a className="nav-link" href="./about.html">
									ABOUT
								</a>{' '}
								&nbsp; &nbsp;
							</li>
							<li className="nav-item">
								<a className="nav-link" href="./contact-us.html">
									CONTACT
								</a>{' '}
								&nbsp; &nbsp;
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}

	render() {
		return this.renderNavbar();
	}
}

export default Navbar;
