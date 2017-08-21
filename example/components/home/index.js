import {h, Component} from 'preact';
import './style.less';
import Flex from 'src/flex';
import Button from 'src/button';

export default class Home extends Component {
	render() {
		return (
			<div class="home">
				<h1>flex</h1>
				<Flex>
					<Flex.Item className="bg-gary">1111</Flex.Item>
					<Flex.Item className="bg-gary">2222</Flex.Item>
					<Flex.Item className="bg-gary">3333</Flex.Item>
					<Flex.Item className="bg-gary">4444</Flex.Item>
				</Flex>
				<h1>wrap</h1>
				<Flex wrap="wrap">
					<div className="bg-gary inline">1111</div>
					<div className="bg-gary inline">2222</div>
					<div className="bg-gary inline">3333</div>
					<div className="bg-gary inline">4444</div>
					<div className="bg-gary inline">5555</div>
					<div className="bg-gary inline">6666</div>
					<div className="bg-gary inline">7777</div>
				</Flex>

				<h1>轴对齐方式</h1>
				<h3>center</h3>
				<Flex justify="center">
					<div className="bg-gary inline">1111</div>
					<div className="bg-gary inline">2222</div>
					<div className="bg-gary inline">3333</div>
				</Flex>
				<h3>end</h3>
				<Flex justify="end">
					<div className="bg-gary inline">1111</div>
					<div className="bg-gary inline">2222</div>
					<div className="bg-gary inline">3333</div>
				</Flex>
				<h3>between</h3>
				<Flex justify="between">
					<div className="bg-gary inline">1111</div>
					<div className="bg-gary inline">2222</div>
					<div className="bg-gary inline">3333</div>
				</Flex>

				<h3>start</h3>
				<Flex align="start">
					<Flex.Item className="bg-gary inline">1111</Flex.Item>
					<Flex.Item className="bg-gary inline small">2222</Flex.Item>
					<Flex.Item className="bg-gary inline">3333</Flex.Item>
				</Flex>
				<h3>end</h3>
				<Flex align="end">
					<Flex.Item className="bg-gary inline">1111</Flex.Item>
					<Flex.Item className="bg-gary inline small">2222</Flex.Item>
					<Flex.Item className="bg-gary inline">3333</Flex.Item>
				</Flex>
				<h3>baseline</h3>
				<Flex align="baseline">
					<Flex.Item className="bg-gary inline">1111</Flex.Item>
					<Flex.Item className="bg-gary inline small">2222</Flex.Item>
					<Flex.Item className="bg-gary inline">3333</Flex.Item>
				</Flex>

				<Button>默认</Button>
				<Button bordered>默认</Button>
				<Button size="lg" color="primary">默认</Button>
				<Button color="primary">默认</Button>
				<Button color="primary" bordered>默认</Button>
				<Button size="sm" color="primary">默认</Button>
				<Button size="full" color="primary">默认</Button>
			</div>
		);
	}
}
