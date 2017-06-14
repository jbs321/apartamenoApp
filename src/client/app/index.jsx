import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return (
            <div>
                <p> Hello React 123!</p>
                <AwesomeComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));