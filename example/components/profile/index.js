import { h, Component } from 'preact';
import './style.less';
import Form from '../form';
import Input from '../input';

export default class Profile extends Component {

	render() {
		return (
			<div class="profile">
				<h1>Form</h1>
				<Form>
					<Input>姓名</Input>
				</Form>
			</div>
		);
	}
}
