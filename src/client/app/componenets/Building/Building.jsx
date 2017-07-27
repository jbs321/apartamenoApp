import React from 'react';
import axios from 'axios';
import Comment from '../Comment/comment.jsx';
import GoogleImg from "../googleImg.jsx";

var qs = require('qs');

export default class Building extends React.Component {

    constructor() {
        super();

        this.state = {
            addressDescription: "",
            comments: []
        };
    }

    findAddress(addressDescription) {

        var axiosObj = axios.create({
            baseURL: "http://localhost/apartamenoApi/public/api",
        });

        axiosObj.get("buildings/" + addressDescription)
            .then((response) => {
                this.setState({
                    addressDescription: addressDescription,
                    comments: response.data.results.comments
                });
                console.log(response2.data);
            }).catch((err) => {

            if (err.response !== undefined && err.response.status == 400) {
                axiosObj.post("buildings", qs.stringify(response.data[0]))
                    .then((response3) => {
                        console.log(response3);
                    }).catch((err) => {
                        console.log(err);
                    });
            }
        })
    }

    componentDidMount() {

        let addressDescription = this.props.match.params.address;

        this.findAddress(addressDescription);
    }

    render() {
        return (
            <div className="container-fluid building-page">
                <GoogleImg src={this.props.match.params.address}/>

                <div className="col-12">
                    <h3 className="address">{this.props.match.params.address}</h3>
                </div>

                {/*<div className="col-12 ratings-wrapper">*/}
                {/*<Ratings ratings={this.state.address.ratings}/>*/}
                {/*</div>*/}

                <div className="col-12 comments-wrapper">
                    <Comment comments={this.state.comments}/>
                </div>
            </div>
        );
    }
}