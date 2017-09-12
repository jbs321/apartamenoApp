import React from 'react';
import SingleComment from "./SingleComment.jsx";

export default class CommentView extends React.Component {
    render() {
        if(this.props.comments === undefined || !Array.isArray(this.props.comments)) {
            return null;
        }

        return (
            <div className="comment-view">
                {this.props.comments.map((comment, idx) =>
                    <SingleComment avatar={"A"} key={idx} comment={comment.description}/>
                )}
            </div>
        );
    }
}