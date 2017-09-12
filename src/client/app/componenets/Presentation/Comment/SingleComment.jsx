import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

export default class SingleComment extends React.Component {
    render() {
        return (
            <div className="single-comment">
                <List>
                    <ListItem disabled={true} leftAvatar={<Avatar>A</Avatar>}>
                        {this.props.comment}
                    </ListItem>
                </List>
            </div>
        );
    }
}