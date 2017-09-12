import React from 'react';
import CommentView from "./CommentView.jsx";
import CommentControl from "./CommentControl.jsx";
import axios from "axios";
import Auth from "../../Auth/Auth.jsx";

export default class Comment extends React.Component {

    constructor(props) {
        super(props);

        //init
        this.state = {};
        this.state.message = "";
        this.state.comments = [];

        this.handleClick = this.handleClick.bind(this);
        this.fetchComments = this.fetchComments.bind(this);
    }

    componentDidMount() {
        this.fetchComments();
    }

    fetchComments() {
        let that = this;
        axios.get('building/' + this.props.building._id + "/comment")
            .then(result => {
                that.setState({
                    comments: result.data
                });
            });
    }

    handleClick(event) {
        if(event.target.commentInput === undefined) {
            throw new Error("Comment Input missing");
        }

        let commentInput = event.target.commentInput;

        if(commentInput.value === undefined
            || commentInput.value === "") {
            return;
        }

        if (!Auth.isAuth()) {

        }

        let comment = event.target.commentInput.value;
        this.saveComment(comment);

        let commentsArr = this.state.comments;

        commentsArr.push({
            description: comment,
        });

        if(commentsArr.length >= 0) {
            this.setState({
                comments: commentsArr,
            });
        }

        event.target.commentInput.value = "";
    }

    saveComment(comment) {
        if(comment === undefined) {
            throw new Error("Comment Missing");
        }

        axios.post("building/" + this.props.building._id + "/comment", {
            comment: comment,
        }).then(result => {
            console.log(result.data);
        });
    }

    render() {
        return (
            <div className="comment-container">
                <CommentView building={this.props.building} comments={this.state.comments}/>
                <CommentControl building={this.props.building} onSubmit={this.handleClick}/>
            </div>
        );
    }
}