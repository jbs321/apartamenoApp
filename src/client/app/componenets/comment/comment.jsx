import React from 'react';

class Comment extends React.Component {
    render() {
        if(this.props.comments == undefined) {
            return null;
        }

        return (
            <div className="container">
                <div className="row">
                    {this.props.comments.map(comment =>
                        <div key={comment.id} className="col-12 comment-block">
                            <p>{comment.user.first_name} {comment.user.last_name}:</p>
                            {comment.description}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Comment;