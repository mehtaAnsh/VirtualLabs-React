import React from 'react';
import FlareComponent from 'flare-react';
import '../../static/Simulator.css';

/*
    exp1 is starting water part
    animation name : 
        bowl
        Seeds
        water1 
        water2
        water3
        waterflow1
        waterflow2
        waterflow3 

    daynight is day change and last observation part
    animation name:
        daynightswitch
        growth 
*/

class Simulator extends React.Component {
	state = {
		animationName: 'bowl',
		fileName: 'Exp1',
		type: 'moong',
		count: '',
		message: 'Select a seed (either Gram or Moong).',
		waterMessage: '',
		active: {
			gram: false,
			moong: false,
			add_seeds: true,
			water: true,
			soak: true,
			remove: true,
			cover: true,
		},
		countInt: 1,
		end: false,
	};

	changeAnimation = animationName => {
		console.log(animationName);

		switch (animationName) {
			case 'gram':
			case 'moong':
				this.setState({
					type: animationName,
					message: 'Seed selected, now add seeds.',
					active: {
						gram: true,
						moong: true,
						add_seeds: false,
						water: true,
						soak: true,
						remove: true,
						cover: true,
					},
				});
				break;

			case 'Seeds':
				this.setState({
					animationName,
					message: 'Soak 20-25 seeds in a Petri dish or a container filled with water.',
					active: {
						gram: true,
						moong: true,
						add_seeds: true,
						water: false,
						soak: true,
						remove: true,
						cover: true,
					},
				});
				break;

			case 'water':
				if (this.state.count === '') this.setState({ count: 0 });
				var temp = Number(this.state.count);
				temp++;

				if (temp < 2) this.setState({ waterMessage: 'Move ahead? (Atleast 400ml is suggested.)' });
				else this.setState({ waterMessage: 'Well done, recommended water is added.' });

				new Promise(resolve => {
					setTimeout(() => {
						this.setState({
							animationName: 'waterflow',
							count: temp,
							active: {
								gram: true,
								moong: true,
								add_seeds: true,
								water: false,
								soak: false,
								remove: true,
								cover: true,
							},
						});
					}, 3000);
					resolve();
				}).then(() => {
					this.setState({ animationName: 'water', count: temp, countInt: temp });
				});

				if (temp === 3)
					this.setState({
						count: '',
						message: 'Soak the seeds overnight.',
						countInt: 0,
						active: {
							gram: true,
							moong: true,
							add_seeds: true,
							water: true,
							soak: false,
							remove: true,
							cover: true,
						},
					});
				break;

			case 'daynightswitch':
				this.setState({
					animationName,
					message: 'Next day, drain the excess water and cover the seeds with wet cotton cloth.',
					waterMessage: '',
					count: 0,
					active: {
						gram: true,
						moong: true,
						add_seeds: true,
						water: true,
						soak: true,
						remove: false,
						cover: true,
					},
				});

				document.getElementById('sim').style.display = 'none';
				document.getElementById('daynight').style.display = 'block';
				this.renderDayNight(this.state.animationName);

				break;
			case 'remove':
				this.setState({
					animationName,
					message: 'Cover the seeds.',
					active: {
						gram: true,
						moong: true,
						add_seeds: true,
						water: true,
						soak: true,
						remove: true,
						cover: false,
					},
				});
				document.getElementById('daynight').style.display = 'none';
				document.getElementById('remove').style.display = 'block';
				this.renderRemoveWater(this.state.animationName);

				break;
			case 'cover':
				this.setState({
					animationName,
					active: {
						gram: true,
						moong: true,
						add_seeds: true,
						water: true,
						soak: true,
						remove: true,
						cover: true,
					},
				});

				document.getElementById('remove').style.display = 'none';
				document.getElementById('cover').style.display = 'block';
				document.getElementById('observe').style.display = 'block';
				this.renderCoverSeeds(this.state.animationName);

				break;
			case 'day':
				this.setState({ animationName });
				if (this.state.count === 0)
					this.setState({ countInt: 1, count: 123, message: 'Little sprouts coming out' });
				else {
					this.setState({ countInt: this.state.countInt + 1 });
					if (this.state.countInt === 2) this.setState({ message: 'Sprouts become visible.' });
					else if (this.state.countInt === 3)
						this.setState({
							message: 'Note: If you want to replay the animation, refresh the webpage.',
							waterMessage: 'Congratulations on completing the experiment virtually!',
							end: true,
						});
				}

				document.getElementById('cover').style.display = 'none';
				document.getElementById('daynight').style.display = 'block';
				this.renderDayNight(this.state.animationName);
				break;
			default:
				break;
		}

		if (
			animationName.localeCompare('daynightswitch') !== 0 &&
			animationName.localeCompare('cover') !== 0 &&
			animationName.localeCompare('remove') !== 0 &&
			animationName.localeCompare('day') !== 0
		)
			this.renderSimulator();
	};

	renderDayNight(value) {
		if (value.localeCompare('daynightswitch') === 0) {
			console.log('in renderdaynight');
			return (
				<FlareComponent
					file={`../rive_files/daynight_${this.state.type}.flr`}
					animationName={`daynightswitch`}
					width={600}
					height={450}
					transparent={true}
					style={{ marginLeft: '-10%', marginTop: '10%' }}
				/>
			);
		} else {
			console.log('in renderobserveday');
			return (
				<FlareComponent
					file={`../rive_files/daynight_${this.state.type}.flr`}
					animationName={`day${this.state.countInt}`}
					width={600}
					height={450}
					transparent={true}
					style={{ marginLeft: '-10%', marginTop: '10%' }}
				/>
			);
		}
	}

	renderCoverSeeds(value) {
		if (value.localeCompare('cover') === 0) {
			console.log('in rendercoverseeds');
			return (
				<FlareComponent
					file={`../rive_files/Coverseeds_new_${this.state.type}.flr`}
					animationName={`cover`}
					width={600}
					height={450}
					transparent={true}
					style={{ marginLeft: '-10%' }}
				/>
			);
		}
	}

	renderRemoveWater(value) {
		if (value.localeCompare('remove') === 0) {
			console.log('in renderremovewater');
			return (
				<FlareComponent
					file={`../rive_files/remove_water_new_${this.state.type}.flr`}
					animationName={`drainwater${this.state.countInt}`}
					width={600}
					height={450}
					transparent={true}
					style={{ marginLeft: '-10%' }}
				/>
			);
		}
	}

	renderSimulator() {
		console.log('Filename: ' + this.state.fileName + this.state.type);
		console.log('animation name: ' + this.state.animationName);
		return (
			<FlareComponent
				file={`../rive_files/${this.state.fileName}${this.state.type}.flr`}
				animationName={`${this.state.animationName}${this.state.count}`}
				width={600}
				height={450}
				transparent={true}
				style={{ marginLeft: '-10%' }}
			/>
		);
	}

	renderLayout() {
		return (
			<div>
				<div className="container" style={{ marginLeft: '10%' }}>
					<div className="row justify-content-center pt-3">
						<div className="col-md-6 mt-5">
							<div className="sim-border" style={{ width: '600px', height: '500px' }}>
								<div className="mt-3 ml-5 justify-content-center texts">
									<h5>{this.state.message}</h5>
								</div>
								<br />
								<div style={{ marginTop: '-10%' }}>
									<div id="sim">{this.renderSimulator()}</div>
									<div id="daynight" style={{ display: 'none' }}>
										{this.renderDayNight(this.state.animationName)}
									</div>
									<div id="remove" style={{ display: 'none' }}>
										{this.renderRemoveWater(this.state.animationName)}
									</div>
									<div id="cover" style={{ display: 'none' }}>
										{this.renderCoverSeeds(this.state.animationName)}
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 mt-5">
							<div
								className="btn-group"
								role="group"
								aria-label="Basic example"
								style={{ maxWidth: '300px' }}
							>
								<button
									type="button"
									className="btn btn-secondary"
									onClick={() => this.changeAnimation('gram')}
									disabled={this.state.active.gram}
								>
									Gram
								</button>
								<button
									type="button"
									className="btn btn-secondary"
									onClick={() => this.changeAnimation('moong')}
									disabled={this.state.active.moong}
								>
									Moong
								</button>
							</div>
							<br />
							<br />
							<button
								className="btn btn-green"
								onClick={() => this.changeAnimation('Seeds')}
								disabled={this.state.active.add_seeds}
							>
								Add Seeds
							</button>
							<br />
							<br />
							<button
								className="btn btn-yellow"
								onClick={() => this.changeAnimation('water')}
								disabled={this.state.active.water}
							>
								Add Water
							</button>
							<br />
							<br />
							<button
								className="btn btn-purple"
								onClick={() => this.changeAnimation('daynightswitch')}
								disabled={this.state.active.soak}
							>
								Soak Overnight
							</button>
							<br />
							<br />
							<button
								className="btn btn-pink"
								onClick={() => this.changeAnimation('remove')}
								disabled={this.state.active.remove}
							>
								Drain Water
							</button>

							<br />
							<br />
							<button
								className="btn btn-blue"
								onClick={() => this.changeAnimation('cover')}
								disabled={this.state.active.cover}
							>
								Cover Seeds
							</button>
							<br />
							<br />
							<button
								className="btn btn-purple"
								id="observe"
								onClick={() => this.changeAnimation('day')}
								style={{ display: 'none' }}
								disabled={this.state.end}
							>
								Observe the next day
							</button>
							<div className="texts">{this.state.waterMessage}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return <div>{this.renderLayout()}</div>;
	}
}

export default Simulator;
