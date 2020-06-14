import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Theory from './Theory';
import Simulator from './Simulator';
import Video from './Video';
import '../../static/Activity.css';

export default class Experiment extends React.Component {
	state = { t: '', s: '', v: '' };

	handleClick = str => {
		if (str === 't') this.setState({ t: 'active', s: '', v: '' });
		else if (str === 's') this.setState({ t: '', s: 'active', v: '' });
		else this.setState({ t: '', s: '', v: 'active' });
	};

	render() {
		return (
			<div className="container main-container">
				<center>
					<div className="theme-title">
						<h4 style={{ padding: '10px' }}>1. Germinate seeds to observe how plants grow from seeds.</h4>
					</div>
				</center>
				<div className="card main-card">
					<BrowserRouter>
						<div className="btn-group">
							<Link to="/food/1/theory" className="options">
								<button type="button" className={`btn btn-lg options ${this.state.t}`} onClick={() => this.handleClick('t')}>
									Theory
								</button>
							</Link>
							<Link to="/food/1" className="options">
								<button type="button" className={`btn btn-lg options ${this.state.s}`} onClick={() => this.handleClick('s')}>
									Simulator
								</button>
							</Link>
							<Link to="/food/1/video" className="options">
								<button type="button" className={`btn btn-lg options ${this.state.v}`} onClick={() => this.handleClick('v')}>
									Video
								</button>
							</Link>
						</div>
						<div className="content">
							<Route path="/food/1/theory" exact component={Theory} />
							<Route path="/food/1" exact component={Simulator} />
							<Route path="/food/1/video" exact component={Video} />
						</div>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}
