import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import Divider from 'material-ui/Divider';

export default class Menu extends React.Component {
    render() {
        return (
            <aside>
                <menu>
                    <List>
                        <ListItem primaryText="Main" leftIcon={<ContentInbox/>}/>
                        <ListItem primaryText="Favorite" leftIcon={<ActionGrade/>}/>
                        <ListItem primaryText="Posted" leftIcon={<ContentSend/>}/>
                    </List>
                    <Divider/>
                </menu>
            </aside>
        );
    }
}