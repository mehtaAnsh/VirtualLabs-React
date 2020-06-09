import React from 'react';

const Mobile = () => {
	return (
		<div>
			<div className="container" id="mobile">
				<img src="./assets/vl-logo.png" alt="Virtual Labs" style={{ maxHeight: '50%', maxWidth: '100%', marginLeft: '-5%' }} />
				<div style={{ marginLeft: '2%' }}>
					<h3>is available now on the Play Store and App Store!</h3>
					<h6>Click to download the app now.</h6>
				</div>

				<a href="/" id="play-store">
					<img src="./assets/play_store.svg" alt="Download from Play Store" width="275" height="100" />{' '}
				</a>
				<a href="/" id="app-store">
					<img src="./assets/app_store.svg" alt="Download from App Store" width="275" height="100" />{' '}
				</a>
			</div>
		</div>
	);
};
export default Mobile;
