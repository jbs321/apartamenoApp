import React from 'react';
import Comment from "./Comment.jsx";

export default class CommentSection extends React.Component {
    render() {
        return (
            <div className="comment-section">
                <Comment building={this.props.building}/>
            </div>
        );
    }
}