import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from './home';
import Profile from './profile';

export default class App extends Component {

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/form/" />
				</Router>
			</div>
		);
	}
}
