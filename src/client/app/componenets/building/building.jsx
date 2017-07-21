import React from 'react';
import Ratings from '../rating/ratings.jsx'
import Comment from '../comment/comment.jsx'
import GoogleImg from "../googleImg.jsx";
import axios from 'axios';

export default class Building extends React.Component {

    constructor() {
        super();

        this.state = {
            address: {
                imgSrc: null,
                ratings: [],
                comments: [],
            }
        }
    }

    componentDidMount() {
        if (this.props.location.props != undefined && this.props.location.props.address != undefined) {
            console.log(this.props.location.props.address);
            axios.get(process.env.ENV.API_URL + `/buildings/` + this.props.location.props.address.place_id, {
                address: this.props.location.props.address
            }).then(result => {

                if (result.data !== undefined) {
                    this.setState({
                        address: result.data
                    });

                    this.commentRef.sync();
                }
            }).catch(function (err) {
                console.log(err);
            });

        }
    }

    componentDidUpdate() {
        this.componentDidMount();
    }

    render() {
        return (
            <div className="container-fluid building-page">
                <div className="row">
                    {/*<div className="col-12">*/}
                        {/*<GoogleImg src={this.state.address.imgSrc}/>*/}
                    {/*</div>*/}
                    {/*<div className="col-12">*/}
                        {/*<h3 className="address">{this.state.address.address}</h3>*/}
                    {/*</div>*/}

                    {/*<div className="col-12 ratings-wrapper">*/}
                        {/*<Ratings ratings={this.state.address.ratings}/>*/}
                    {/*</div>*/}

                    <div className="col-12 comments-wrapper">
                        <Comment ref={(commentRef) => {
                            this.commentRef = commentRef;
                        }} comments={this.state.address.comments}/>
                    </div>
                </div>
            </div>
        );
    }
}