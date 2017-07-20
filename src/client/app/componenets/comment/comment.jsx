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

    componentDidMount() {
        this.sync();
    }

    componentDidUpdate() {}

    sync() {
        this.setState({
            comments: this.props.comments,
            message: "",
        });
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
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
                    </div>
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

        let newId = this.saveComment(this.state.message);

        let messageObj = {
            id: newId,
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
    }

    saveComment(comment) {
        axios.post(process.env.ENV.API_URL + `/comment`, {
            comment: comment
        }).then(result => {
                console.log(result);
        }).catch(function (err) {
            console.log("saving comment error - saveComment(): ". err.message);
        });
    }
}