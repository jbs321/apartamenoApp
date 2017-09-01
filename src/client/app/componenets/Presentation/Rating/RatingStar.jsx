import React from 'react';
import Star from 'material-ui/svg-icons/toggle/star';
import IconButton from 'material-ui/IconButton';
import StarEmpty from 'material-ui/svg-icons/toggle/star-border';
import {
    STAR_COLOR,
    ICON_STYLE,
} from '../../Variables/RatingVariables';


export default class RatingStar extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //TODO:: uncomment this
        // if(this.props.readOnly) {
        //     return;
        // }

        if(this.props.handleClick !== undefined) {
            this.props.handleClick(this);
        }
    }

    render() {
        let star = (this.props.active)

            ? (<Star style={ICON_STYLE} color={STAR_COLOR}/>)
            : (<StarEmpty style={ICON_STYLE} color={STAR_COLOR}/>);

        return (
            <IconButton touch={true}
                        tooltip={this.props.tooltip}
                        tooltipPosition={this.props.tooltipPosition}
                        key={this.props.index}
                        onTouchTap={this.handleClick}>
                {star}
            </IconButton>
        );
    }
}