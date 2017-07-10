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

        if(this.props.location.props != undefined
            && this.props.location.props.address != undefined) {
            axios.post(`http://localhost/apartamenoApi/public/api/buildings`, {
                address: this.props.location.props.address
            }).then(result => {
                this.setState({
                    address: result.data
                });
            });

        } else if(true) {
            console.log(this.props.match.params);
        }
    }

    render() {
        return (
            <div className="container-fluid no-pad building-page">
                <div className="row">
                    <div className="col-12">
                        <GoogleImg src={this.state.address.imgSrc}/>
                    </div>
                    <div className="col-12">
                        <h3 className="address">{this.state.address.address}</h3>
                    </div>

                    <div className="col-12 ratings-wrapper">
                        <Ratings ratings={this.state.address.ratings}/>
                    </div>

                    <div className="col-12 comments-wrapper">
                        <Comment comments={this.state.address.comments}/>
                    </div>
                </div>
            </div>
        );
    }
}