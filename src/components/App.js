import React from 'react';
import FlareComponent from 'flare-react';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import { BrowserRouter, Route } from 'react-router-dom';
import StartPage from './StartPage';
import Mobile from './Mobile';
import Navbar from './Navbar';
import Theme from './Theme';
import Activity from './Activity';

class App extends React.Component {
	state = { loading: true, themeVal: 'food', activityVal: '1' };

	componentDidMount() {
		this.onPageLoader().then(() => this.setState({ loading: false }));
	}

	onPageLoader() {
		if (window.location.href.indexOf('/food/1') === -1)
			return new Promise(resolve => setTimeout(() => resolve(), 5000));

		return new Promise(resolve => setTimeout(() => resolve(), 0));
	}

	handleThemeClicked = themeVal => {
		this.setState({ themeVal });
	};

	handleActivityClicked = activityVal => {
		this.setState({ activityVal });
	};

	renderComponents() {
		if (this.state.loading && !isMobile) {
			return (
				<div
					style={{
						marginTop: '-7.5%',
						marginLeft: '15%',
						overflowX: 'hidden',
					}}
				>
					<FlareComponent
						file="./rive_files/logo.flr"
						animationName="logo"
						width={1000}
						height={1000}
						transparent="true"
					/>
				</div>
			);
		}
		return (
			<div>
				<BrowserRouter>
					<BrowserView>
						<Navbar />
						<Route
							path="/"
							exact
							render={props => <StartPage {...props} handleThemeClicked={this.handleThemeClicked} />}
						/>
						<Route
							path={`/${this.state.themeVal}`}
							exact
							render={props => (
								<Theme
									{...props}
									handleActivityClicked={this.handleActivityClicked}
									themeVal={this.state.themeVal}
								/>
							)}
						/>
						<Route path={`/${this.state.themeVal}/${this.state.activityVal}`} exact component={Activity} />
					</BrowserView>
					<MobileView>
						<Mobile />
					</MobileView>
				</BrowserRouter>
			</div>
		);
	}

	render() {
		return this.renderComponents();
	}
}

export default App;
