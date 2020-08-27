import React from 'react';
import FlareComponent from 'flare-react';
import { Link } from 'react-router-dom';
import '../static/StartPage.css';

class StartPage extends React.Component {
	handleThemeClicked = val => {
		this.props.handleThemeClicked(val);
	};

	renderStartPage() {
		return (
			<div>
				<div className="container" id="main">
					<div className="row boxx">
						<div className="text">
							<img src="../assets/vl-text.png" style={{ maxWidth: '70%' }} alt="Virtual Labs" />
							<b>
								<p>
									is based on the idea that lab experiments <br />
									can be taught using the Internet, more efficiently and less
									<br />
									expensively. The labs can also made be more available to students <br />
									with no access to physical labs or where equipment <br />
									is not available owing to being scarce or costly.
								</p>
							</b>
						</div>
						<div className="img-fluid float-right">
							<FlareComponent
								file="rive_files/lab.flr"
								animationName="lab"
								transparent="true"
								width={600}
								height={350}
							/>
						</div>
					</div>
					<div className="row">
						<h1
							style={{
								marginLeft: '52%',
								marginBottom: '10px',
								backgroundColor: '#95aedd',
								borderRadius: '10px',
							}}
						>
							&nbsp; THEMES &nbsp;
						</h1>
					</div>
					<div className="container row" style={{ marginLeft: '-3%' }}>
						<div className="col-1 stds">
							<p style={{ paddingLeft: '30%', backgroundColor: '#fcabc2', borderRadius: '10px' }}>
								S<br />T<br />A<br />N<br />D<br />A<br />R<br />D<br />
							</p>
						</div>
						<div className="col-1">
							<div className="row levels" style={{ backgroundColor: '#bdd4ff' }}>
								<h4 className="text">VII</h4>
							</div>
							<div className="row levels">
								<h4 className="text">VIII</h4>
							</div>
							<div className="row levels">
								<h4 className="text">IX</h4>
							</div>
							<div className="row levels">
								<h4 className="text">X</h4>
							</div>
						</div>
						<div className="col-lg-10" style={{ marginRight: '-5%' }}>
							<div className="row">
								<div className="col-lg-5 card card-1">
									<Link to="/food" onClick={() => this.handleThemeClicked('food')}>
										<h2 className="sections">1. Food </h2>
										<div style={{ marginTop: '-20%', marginLeft: '60%' }}>
											<FlareComponent
												file="rive_files/plant.flr"
												animationName="plant"
												width={200}
												height={200}
												transparent={true}
											/>
										</div>
									</Link>
								</div>
								<div className="col-lg-5 card card-2">
									<h2 className="sections">2. Materials</h2>
									<div style={{ marginTop: '-15%', marginLeft: '60%' }}>
										<FlareComponent
											file="rive_files/Material.flr"
											animationName="Material"
											width={200}
											height={200}
											transparent={true}
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-5 card card-3">
									<h2 className="sections">
										3. The world of
										<br /> living
									</h2>
									<div style={{ marginTop: '-25%', marginLeft: '63%' }}>
										<FlareComponent
											file="rive_files/dewdrop.flr"
											animationName="dewdrop"
											width={200}
											height={200}
											transparent={true}
										/>
									</div>
								</div>
								<div className="col-lg-5 card card-4">
									<h2 className="sections">4. Some more content...</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return this.renderStartPage();
	}
}
export default StartPage;
