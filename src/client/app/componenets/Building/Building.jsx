import React from 'react';
import axios from 'axios';
import Rating from "../Rating/Rating.jsx";
import {Rate} from "../Rating/Rate";

export default class Building extends React.Component {

    constructor() {
        super();

        this.state = {
            id: "",
            imgSrc: "",
            address: "",
            created_at: "",
            deleted_at: "",
            ratings: [],
            google_place_id: "",
            updated_at: "",
            user_id: "",
        };
    }

    findAddress(addressDescription) {
        let url = process.env.ENV.API_URL + "/search/query/firstorfail/" + addressDescription;

        axios.get(url)
            .then(result => {
                if (result.data !== undefined) {

                    let rate;
                    let ratings = result.data.ratings.map(function(dataSet) {
                        return Rate.createFromDataSet(dataSet);
                    });

                    this.setState({
                        id: result.data.id,
                        imgSrc: result.data.imgSrc,
                        ratings: ratings,
                        address: result.data.address,
                        created_at: result.data.created_at,
                        deleted_at: result.data.deleted_at,
                        google_place_id: result.data.google_place_id,
                        updated_at: result.data.updated_at,
                        user_id: result.data.user_id,
                    });
                }
            })
            // .catch(function (err) {
            //     console.log(err);
            // });
    }

    componentDidMount() {
        this.findAddress(this.props.match.params.address);
    }

    render() {

        let ratings = [];

        if(this.state.ratings !== undefined) {
            ratings = this.state.ratings.map((rate, index) =>
                <Rating key={index} rating_id={rate.id} rating={rate.value} label={rate.label}/>);
        }

        return (
            <div className="container-fluid building-page">
                {/*<GoogleImg src={this.props.match.params.address}/>*/}

                <div className="col-12">
                    <h3 className="address">{this.props.match.params.address}</h3>
                </div>

                <div className="col-12 ratings-wrapper">
                    {ratings}
                </div>

                {/*<div className="col-12 comments-wrapper">*/}
                {/*<Comment ref={(commentRef) => {*/}
                {/*this.commentRef = commentRef;*/}
                {/*}} comments={this.state.address.comments}/>*/}
                {/*</div>*/}
            </div>
        );
    }
}