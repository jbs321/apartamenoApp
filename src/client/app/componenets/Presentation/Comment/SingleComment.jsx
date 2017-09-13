import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Auth from "../../Auth/Auth.jsx";


export default class SingleComment extends React.Component {

    constructor() {
        super();

        this.handleDelete = this.handleDelete.bind(this);
        this.getMenuButton = this.getMenuButton.bind(this);
    }

    handleDelete() {
        this.props.handleDelete(this.props.id);
    }

    getMenuButton() {
        if (parseInt(this.props.userId) === parseInt(Auth.getUserId())) {
            return (
                <IconMenu iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                          targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                    <MenuItem primaryText="Edit"/>
                    <MenuItem primaryText="Delete" onTouchTap={this.handleDelete}/>
                </IconMenu>
            );
        }

        return null;
    }

    render() {
        return (
            <div className="single-comment">
                <List>
                    <ListItem disabled={true} leftAvatar={<Avatar>A</Avatar>} rightIcon={this.getMenuButton()}>
                        {this.props.comment}
                    </ListItem>
                </List>
            </div>
        );
    }
}