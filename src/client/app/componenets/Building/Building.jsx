import React from 'react';
import axios from 'axios';
import Comment from '../Comment/comment.jsx';
import GoogleImg from "../googleImg.jsx";
import {SearchResultKeys} from '../Search/Variables.jsx'

export default class Building extends React.Component {

    constructor() {
        super();

        this.state = {
            imgSrc: "",
        };
    }

    findAddress(addressDescription) {
        let url = process.env.ENV.API_URL + "/search/query/firstorfail/" + addressDescription;

        axios.get(url)
            .then(result => {
                if (result.data !== undefined) {
                    console.log(result.data);

                    this.setState({
                        imgSrc: result.data.address,
                    });
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    componentDidMount() {
        this.findAddress(this.props.match.params.address);
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

                {/*<div className="col-12 comments-wrapper">*/}
                {/*<Comment ref={(commentRef) => {*/}
                {/*this.commentRef = commentRef;*/}
                {/*}} comments={this.state.address.comments}/>*/}
                {/*</div>*/}
            </div>
        );
    }
}