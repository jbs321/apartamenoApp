import React from 'react';

export default class TextHeader extends React.Component {
    render() {
        return (
            <div className={"text-header " + this.props.className}>
                <span style={{
                    width: '100%',
                    height: '400px',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                }}>
                    {this.props.value}
                </span>
            </div>
        );
    }
}