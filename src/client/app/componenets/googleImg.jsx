import React from 'react';

export default class GoogleImg extends React.Component {
    render() {

        if(this.props.src == undefined) {
            return (<img src="https://s-media-cache-ak0.pinimg.com/originals/d8/a7/4c/d8a74c822c7f417a185d9d66e3875a60.gif" className="img-responsive loading"/>);
        }

        return (<img src={"http://localhost/apartamenoApi/public/google-images/" + this.props.src} className="img-responsive"/>);
    }
}