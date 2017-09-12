import React from 'react';
import RatingStarGroup from "./RatingStarGroup.jsx";
// import Auth from "../../Auth/Auth.jsx";
import axios from 'axios';

export default class RatingSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.ratings = [];
    }

    findRatings() {
        axios.get("/building/" + this.props.building._id + "/ratings")
            .then(result => {
                this.setState({
                    ratings: result.data
                });
            })
            .catch(error => console.log(error));
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log(nextProps);
        if (nextProps.building !== undefined && nextProps.building._id !== undefined) {
            this.findRatings();
            return true;
        }

        return false;
    }

    // handleClick(rate, newValue) {
    //     if (this.props.readOnly) {
    //         return;
    //     }
    //
    //     let buildingId = this.state._id;
    //
    //     axios.put('/building/' + buildingId + '/rating/' + rate._id, {
    //         building_id: buildingId,
    //         rating_id: rate._id,
    //         user_id: 2,
    //         rate: newValue
    //     }, {
    //         baseURL: process.env.ENV.API_URL,
    //         responseType: 'json'
    //     }).then(((result) => {
    //         console.log(result);
    //     })).catch((err) => {
    //         if (err.response) {
    //             alert(err.response.data, err.response.status);
    //         }
    //     });
    // }

    // isReadOnly() {
    //     let flag = true;
    //
    //     if (this.state.readOnly !== undefined) {
    //         flag = this.state._readOnly;
    //     } else {
    //         flag = !Auth.isAuth();
    //     }
    //
    //     return flag;
    // }

    render() {
        if (this.state.ratings === undefined
            || this.state.ratings.length === 0) {
            return (
                <div itemID="rating-section" className="rating-section container">
                    No Ratings
                </div>
            );
        }

        let ratings = this.state.ratings.map((rate, key) => {
            return <div key={key}>
                        {rate.description}:
                        <RatingStarGroup rating_id={rate.rating_id} building_id={this.props.building._id} index={rate.sum}/>
                    </div>;
        });

        return (
            <section className="ratings" style={this.props.style}>{ratings}</section>
        );
    }
}