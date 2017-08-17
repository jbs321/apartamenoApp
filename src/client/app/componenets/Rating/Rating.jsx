import React from 'react';
import IconButton from 'material-ui/IconButton';
import Star from 'material-ui/svg-icons/toggle/star';
import StarEmpty from 'material-ui/svg-icons/toggle/star-border';
import {
    TOOLTIP_CONVERSION,
    STAR_COLOR,
    AMOUNT_OF_STARS,
    ICON_STYLE,
    TOOLTIP_POSITION
} from './Variables';

export default class Rating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: this.props.rating,
            rating_id: this.props.rating_id,
            label: this.props.label,
            readOnly: true,
        };
    }

    handleClick(index) {
        if (!this.state.readOnly) {
            this.setState({
                rating: index + 1
            });
        }
    }

    componentDidMount() {
        if (this.props.rating !== undefined) {
            this.state.rating = this.props.rating;
            this.state.label = this.props.label;
            this.state.rating_id = this.props.rating_id;
        }
    }

    render() {
        let stars = [];

        for (let i = 0; i < AMOUNT_OF_STARS; i++) {

            //Set Star shape based on rating
            let icon = (this.state.rating <= i)
                ? (<StarEmpty style={ICON_STYLE} color={STAR_COLOR}/>)
                : (<Star style={ICON_STYLE} color={STAR_COLOR}/>);


            //Get tooltip text
            let tooltip = TOOLTIP_CONVERSION[i + 1];

            //push star to stars array
            stars.push(<IconButton touch={true}
                                   tooltip={tooltip}
                                   onTouchTap={this.handleClick.bind(this, i)}
                                   tooltipPosition={TOOLTIP_POSITION}
                                   key={i}>{icon}</IconButton>);
        }

        return (
            <div className="rating">
                <span style={{verticalAlign: "super"}}>{this.state.label} :</span> {stars}
            </div>
        );
    }
}