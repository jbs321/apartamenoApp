import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class CommentControl extends React.Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(event);
    }

    render() {
        return (
            <div className="comment-control">
                <form onSubmit={this.onSubmit} autoComplete="off">
                    <TextField hintText="Comment" id="commentInput" name="commentInput" style={{width: "100%"}}/>
                    <br/>
                    <RaisedButton label="send" primary={true} type="submit"/>
                </form>
            </div>
        );
    }
}