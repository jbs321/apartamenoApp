import React from 'react';
import axios from 'axios';
import Comment from '../Comment/comment.jsx';
import GoogleImg from "../googleImg.jsx";

export default class Building extends React.Component {

    constructor() {
        super();

        this.state = {
            addressDescription: ""
        };
    }

    findAddress(addressDescription) {
        axios.post(process.env.ENV.API_URL + `/buildings`, {
            address: addressDescription
        }).then(result => {
            if (result.data !== undefined) {
                this.setState({
                    address: result.data
                });

                // this.commentRef.sync();
            }
        }).catch(function (err) {
            console.log(err);
        });
    }

    componentDidMount() {

        let addressDescription =  this.props.match.params.address;

        //This Page will always have address param
        this.setState({
            addressDescription: addressDescription,
        });

        this.findAddress(addressDescription);
    }

    // componentDidUpdate() {
    //     this.componentDidMount();
    // }

    render() {

        // console.log(this);

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