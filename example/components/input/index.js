import {h, Component} from 'preact';
import classNames from 'classnames';

import './index.less';

export default class Input extends Component {
	render({
			   style,
			   className,
			   children,
			   labelStyle,
			   inputStyle,
			   type = 'text',
			   required,
			   defaultValue,
			   ...props
		   }) {

		let classes = classNames({
			'u-input': true
		});

		let inputClass = classNames({
			'u-input-item': true
		}, className);

		let labelClass = classNames({
			'u-input-label': true
		});


		return (
			<div
				class={classes}
				style={ style ? style : null}
			>
				{ children
					? (<label class={ labelClass } style={ labelStyle }>{children}</label>)
					: null
				}
				<input
					type={type}
					style={ inputStyle }
					class={ inputClass }
					value={defaultValue ? defaultValue : null}
					required={required ? required : null}
					{...props}
				/>

			</div>
		)
	}
}
