import React from 'react';


class Building extends React.Component {
    constructor(props) {
        super(props);

        console.log(props, props.match.params);
    }

    render() {
        return (
            <div className="contaienr">
                <div className="building col-4">
                    <h1></h1>
                    The Building Id is: {this.props.match.params.id}
                </div>
            </div>
        );
    }
}

export default Building;