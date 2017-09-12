import React from 'react';

export default class PricingGraph extends React.Component {
    render() {
        const style = {
            width: "100%",
            height: "300px",
            textAlign: "center",
            background: "#fff",
        };

        return (
            <div style={{
                width: "100%",
                height: "300px",
                textAlign: "center",
                background: "#fff",
                paddingTop: 128,
            }}>
                Pricing Graph
            </div>
        );
    }
}