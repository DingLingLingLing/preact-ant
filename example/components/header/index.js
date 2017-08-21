import { h, Component } from 'preact';
import { Link } from 'preact-router';
import './style.less';

export default class Header extends Component {
	render() {
		return (
			<header class="header">
				<h1>Preact App</h1>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/form">Form</Link>
				</nav>
			</header>
		);
	}
}
