import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.formFields = [
            'email',
            'password',
        ];

        //initialize form fields
        this.formFields.forEach(field => {
            this.state[field] = "";
        });

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        if(this.props.onSubmit !== undefined) {
            this.props.onSubmit(event);
        }
    }

    onChange(event) {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        });

        if(this.props.onChange !== undefined) {
            this.props.onChange(event);
        }
    }

    render() {
        return (
            <div className={this.props.className} style={this.props.style}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <form role="form" className="htmlForm-horizontal" onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>
                                            <div className="col-md-6">
                                                <input id="email" type="email" name="email" className="htmlForm-control" onChange={this.onChange}
                                                       value={this.state.email}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="col-md-4 control-label">Password</label>
                                            <div className="col-md-6">
                                                <input id="password" type="password" name="password" onChange={this.onChange}
                                                       className="htmlForm-control" value={this.state.password}/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">
                                                <button className="btn btn-primary" type="submit">Login</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}