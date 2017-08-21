import {h, Component} from 'preact';
import classNames from '../../utils/classnames';

export default class Button extends Component {
    render({color, children, className, bordered, style, disabled, size, ...props}) {
        let clsPrefix = 'u-button';
        let classes = classNames({
            [`${clsPrefix}`]: true,
            [`${clsPrefix}-${size}`]: size,
            [`${clsPrefix}-disabled`]: disabled,
            [`${clsPrefix}-${color}`]: color,
            [`${clsPrefix}-bordered`]: bordered,
        }, className);

        return (
            <button
                class={classes}
                style={ style }
                disabled={ disabled ? 'disabled' : ''}
                {...props}
            >
                {children}
            </button>
        )
    }
}
