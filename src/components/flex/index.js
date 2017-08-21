import {h, Component} from 'preact';
import classNames from '../../utils/classnames';
import FlexItem from './FlexItem';

class Flex extends Component {


    render({direction, wrap, justify, align, alignContent, className, children, style, ...props}) {

        let clsPrefix = 'u-flex';

        const classes = classNames({
            [`${clsPrefix}`]: true,
            [`${clsPrefix}-dir-row`]: direction === 'row',
            [`${clsPrefix}-dir-row-reverse`]: direction === 'row-reverse',
            [`${clsPrefix}-dir-column`]: direction === 'column',
            [`${clsPrefix}-dir-column-reverse`]: direction === 'column-reverse',

            [`${clsPrefix}-nowrap`]: wrap === 'nowrap',
            [`${clsPrefix}-wrap`]: wrap === 'wrap',
            [`${clsPrefix}-wrap-reverse`]: wrap === 'wrap-reverse',

            [`${clsPrefix}-justify-start`]: justify === 'start',
            [`${clsPrefix}-justify-end`]: justify === 'end',
            [`${clsPrefix}-justify-center`]: justify === 'center',
            [`${clsPrefix}-justify-between`]: justify === 'between',
            [`${clsPrefix}-justify-around`]: justify === 'around',

            [`${clsPrefix}-align-top`]: align === 'top' || align === 'start',
            [`${clsPrefix}-align-middle`]: align === 'middle' || align === 'center',
            [`${clsPrefix}-align-bottom`]: align === 'bottom' || align === 'end',
            [`${clsPrefix}-align-baseline`]: align === 'baseline',
            [`${clsPrefix}-align-stretch`]: align === 'stretch',

            [`${clsPrefix}-align-content-start`]: alignContent === 'start',
            [`${clsPrefix}-align-content-end`]: alignContent === 'end',
            [`${clsPrefix}-align-content-center`]: alignContent === 'center',
            [`${clsPrefix}-align-content-between`]: alignContent === 'between',
            [`${clsPrefix}-align-content-around`]: alignContent === 'around',
            [`${clsPrefix}-align-content-stretch`]: alignContent === 'stretch',

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

Flex.Item = FlexItem;

export default Flex;