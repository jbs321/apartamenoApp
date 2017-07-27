import React from 'react';
import axios from 'axios';

export default class Comment extends React.Component {

    constructor() {
        super();

        //init
        this.state = {
            comments: [],
            message: ""
        };
    }

    componentDidUpdate() {
        this.setState({
            comments: this.props.comments
        });
    }

    render() {
        return (
            <div className="comment-container">
                <div className="comment-view">
                    {this.state.comments.map(comment =>
                        <div className="comment-line" key={comment.id}>{comment.description}</div>
                    )}
                </div>
                <div className="comment-control">
                                <textarea type="text" onChange={this.handleTextAreaChange.bind(this)}
                                          classID="comment-textarea" className="comment-textarea"></textarea>
                    <button onClick={this.send.bind(this)}>Send</button>
                </div>
            </div>
        );
    }

    handleTextAreaChange(value = "") {
        if (this.state.message !== undefined) {
            this.state.message = value.target.value;
            this.state.messageObj = value.target;
        }
    }

    send() {
        if (this.state.message === "") {
            return null;
        }

        let maxId = 0;

        for (let i = 0; i < this.state.comments.length; i++) {
            if (this.state.comments[i].id > maxId) {
                maxId = this.state.comments[i].id;
            }
        }

        let messageObj = {
            id: maxId + 1,
            description: this.state.message,
            user: {
                first_name: "Jacob",
                last_name: "Balabanov",
                created_at: new Date(),
            }
        };

        let comments = this.state.comments;
        comments.push(messageObj);

        this.setState({
            comments: comments,
            message: ""
        });

        this.state.messageObj.value = "";

        this.saveComment(messageObj);
    }

    saveComment(comments) {
        console.log(comments);
        // axios.create(process.env.ENV.API_URL + `/buildings/` + this.props.location.props.address.place_id, {
        //     address: this.props.location.props.address
        // }).then(result => {
        //
        //     if (result.data !== undefined) {
        //         this.setState({
        //             address: result.data
        //         });
        //
        //         this.commentRef.sync();
        //     }
        // }).catch(function (err) {
        //     console.log(err);
        // });
    }
}