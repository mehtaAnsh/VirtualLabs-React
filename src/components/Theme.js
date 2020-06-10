import React from 'react';
import { Link } from 'react-router-dom';
import '../static/Theme.css';

class Theme extends React.Component {
	handleActivity = activityVal => {
		this.props.handleActivityClicked(activityVal);
		//console.log('In theme: ' + this.props.themeVal);
	};

	renderTheme() {
		return (
			<div>
				<div className="container">
					<br />
					<center>
						<div className="box-theme">
							<h3 className="text-center py-3 px-5">Food</h3>
						</div>
					</center>
					<br />
					<div className="row justify-content-center">
						<div className="menu p-4">
							<div className="row justify-content-center pb-4">
								<div className="col-md-6">
									<Link to="/food/1" onClick={() => this.handleActivity('1')} style={{ textDecoration: 'none', color: 'black' }}>
										<div className="theme-card-1">
											<h5 className="text-center p-2">Germinate seeds to observe how plants grow from seeds.</h5>
										</div>
									</Link>
								</div>
								<div className="col-md-6">
									<div className="theme-card-2">
										<h5 className="text-center p-2">Test the presence of carbohydrates, proteins and fats in food items.</h5>
									</div>
								</div>
							</div>
							<div className="row justify-content-center pb-4">
								<div className="col-md-6">
									<div className="theme-card-3">
										<h5 className="text-center p-2">
											Observe stomata in leaves. <br />
											<br />
										</h5>
									</div>
								</div>
								<div className="col-md-6">
									<div className="theme-card-4">
										<h5 className="text-center p-2">Study that leaves prepare starch by the process of photosynthesis.</h5>
									</div>
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-md-6">
									<div className="theme-card-5">
										<h5 className="text-center p-2">
											Study how insect pests spoil food grains. <br />
											<br />
										</h5>
									</div>
								</div>
								<div className="col-md-6">
									<div className="theme-card-6">
										<h5 className="text-center p-2">Observation of pond water for presence of micro-organisms.</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return this.renderTheme();
	}
}

export default Theme;
