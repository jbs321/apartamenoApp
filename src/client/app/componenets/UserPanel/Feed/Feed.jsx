import React from 'react';
import Placeholder from "../../Presentation/Placeholder/Placeholder.jsx";

export default class Feed extends React.Component {

    render() {
        if (this.props.value === undefined) {
            return (
                <div className="feed">
                    <Placeholder/>
                </div>
            );
        }

        return (
            <div className="feed-frame">
                <div className="feed"
                     dangerouslySetInnerHTML={{__html: this.props.value}}></div>
            </div>
        );
    }
}