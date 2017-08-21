import {h, Component} from 'preact';
import classNames from 'classnames';

export default class Form extends Component {
    render({horizontal, children, style, className, inline, ...props}) {
        let classes = classNames({
            'u-form': true,
            'u-form-inline': inline,
            'u-form-horizontal': horizontal
        }, className);
        return (
            <form
                style={ style }
                class={classes}
                {...props}
            >
                {children}
            </form>
        )
    }
}