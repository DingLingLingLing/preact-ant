import {h, Component} from 'preact';
import classNames from '../../utils/classnames';


export default class FlexItem extends Component {
    render({children, className, style, ...props}) {

        const classes = classNames({
            [`u-flex-item`]: true
        }, className);
        return (
            <div
                class={classes}
                style={style}
                {...props}>
                {children}
            </div>
        );
    }
}
