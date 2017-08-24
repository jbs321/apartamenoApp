import React from 'react';
import IconButton from 'material-ui/IconButton';
import Star from 'material-ui/svg-icons/toggle/star';
import StarEmpty from 'material-ui/svg-icons/toggle/star-border';
import {Rate} from './Rate';
import axios from 'axios';
import Auth from '../Auth/Auth.jsx';
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

        let id    = this.props.rating_id;
        let label = this.props.label;
        let value = this.props.rating;
        let readOnly = true;

        this.building_id = this.props.building_id;

        if(this.props.readOnly !== undefined) {
            readOnly = this.props.readOnly;
        }

        this.state = new Rate(id, label, value, readOnly);
    }

    handleClick(index) {

        if (!this.isReadOnly()) {
            let current = this.state;
            let newValue = index + 1;
            this.setState(new Rate(current._id, current._label, newValue, current._readOnly));
        }

        this.updateRate(this.state, index);
    }

    updateRate(rate, newValue) {
        if (!this.isReadOnly()) {
            let building_id =  this.building_id;

            axios.put('/building/' + building_id + '/rating/' + rate._id, {
                    building_id: building_id,
                    rating_id: rate._id,
                    user_id: 2,
                    rate: newValue
            },{
                baseURL: process.env.ENV.API_URL,
                responseType: 'json'
            }).then(((result) => {
                console.log("success");
            })).catch((err) => {
                if(err.response) {
                    alert(err.response.data, err.response.status);
                }
            });
        }
    }

    isReadOnly() {
        let flag = true;

        if(this.state._readOnly !== undefined) {
            flag = this.state._readOnly;
        } else {
            flag = !Auth.isAuth();
        }

        return flag;
    }

    render() {
        let stars = [];

        for (let i = 0; i < AMOUNT_OF_STARS; i++) {

            //Set Star shape based on rating
            let icon = (this.state._value <= i)
                ? (<StarEmpty style={ICON_STYLE} color={STAR_COLOR}/>)
                : (<Star style={ICON_STYLE} color={STAR_COLOR}/>);


            //Get tooltip text
            let tooltip = TOOLTIP_CONVERSION[i + 1];

            //push star to stars array
            stars.push(<IconButton touch={true}
                                   tooltip={tooltip}
                                   tooltipPosition={TOOLTIP_POSITION}
                                   key={i}>{icon}</IconButton>);
        }

        return (
            <div className="rating">
                <span style={{verticalAlign: "super"}}>{this.state._label} :</span> {stars}
            </div>
        );
    }
}