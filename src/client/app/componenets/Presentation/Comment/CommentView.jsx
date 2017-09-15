import React from 'react';
import SingleComment from "./SingleComment.jsx";
import RaisedButton from 'material-ui/RaisedButton';

export default class CommentView extends React.Component {
    constructor() {
        super();

        this.state = {};
        this.state.maxComments  = 6;
        this.getComments        = this.getComments.bind(this);
        this.handleMoreComments = this.handleMoreComments.bind(this);
        this.handleDelete       = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        this.props.handleDelete(id);
    }

    getComments() {
        let comments = this.props.comments.map((comment, idx) => {
            console.log(comment);
            return (<SingleComment
                avatar={"A"}
                userId={comment.user_id}
                id={comment.id}
                key={idx}
                createdAt={comment.created_at}
                comment={comment.description}
                handleDelete={this.handleDelete}
            />);
        });

        return comments.slice(0, this.state.maxComments);
    }

    handleMoreComments() {
        let newMaxComments = this.state.maxComments + 6;
        let comments       = this.props.comments.slice(0, newMaxComments);

        this.setState({
            maxComments: newMaxComments,
            comments: comments,
        });
    }

    render() {
        if (this.props.comments === undefined || !Array.isArray(this.props.comments)) {
            return <div className="comment-view" style={{minHeight:400}}>No Comments</div>;
        }

        return (
            <div className="comment-view">
                {this.getComments()}
                <div style={{margin: "auto", textAlign: "center"}}>
                    <RaisedButton primary={true}
                                  disabled={this.state.maxComments >= this.props.comments.length}
                                  label={"More Comments"}
                                  onTouchTap={this.handleMoreComments}/>
                </div>
            </div>
        );
    }
}