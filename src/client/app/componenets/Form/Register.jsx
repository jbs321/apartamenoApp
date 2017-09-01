import React from 'react';

export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.formFields = [
            'first_name',
            'last_name',
            'email',
            'address',
            'unit_number',
            'phone_number',
            'password',
            'password_confirmation',
        ];

        //initialize attributes
        this.formFields.forEach(field => {
            this.state[field] = "";
        });

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        if (this.props.onSubmit !== undefined) {
            this.props.onSubmit(event);
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

        if(this.props.onChange !== undefined) {
            this.props.onChange(event);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form role="form" className="htmlForm-horizontal" onSubmit={this.onSubmit}>
                                    <div className="htmlForm-group">
                                        <label htmlFor="first_name" className="col-md-4 control-label">First
                                            Name</label>
                                        <div className="col-md-6">
                                            <input id="first_name" type="text" name="first_name" onChange={this.onChange}
                                                   className="htmlForm-control"
                                                   value={this.state.first_name}/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="last_name" className="col-md-4 control-label">Last Name</label>
                                        <div className="col-md-6">
                                            <input id="last_name" type="text" name="last_name" onChange={this.onChange}
                                                   className="htmlForm-control" value={this.state.last_name}/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>
                                        <div className="col-md-6">
                                            <input id="email" type="email" name="email" className="htmlForm-control" onChange={this.onChange}
                                                   value={this.state.email}/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="address" className="col-md-4 control-label">Address</label>
                                        <div className="col-md-6">
                                            <input id="address" type="address" name="address" onChange={this.onChange}
                                                   className="htmlForm-control" value={this.state.address}/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="unit_number" className="col-md-4 control-label">Unit
                                            Number</label>
                                        <div className="col-md-6">
                                            <input id="unit_number" type="number" min="1" name="unit_number" onChange={this.onChange}
                                                   className="htmlForm-control" value={this.state.unit_number}/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone_number" className="col-md-4 control-label">Phone
                                            Number</label>
                                        <div className="col-md-6">
                                            <input id="phone_number" type="" min="10" max="10" name="phone_number" onChange={this.onChange}
                                                   className="htmlForm-control" value={this.state.phone_number}/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password" className="col-md-4 control-label">Password</label>
                                        <div className="col-md-6">
                                            <input id="password" type="password" name="password" onChange={this.onChange}
                                                   className="htmlForm-control" value={this.state.password}/>
                                        </div>
                                    </div>

                                    <div className="htmlForm-group">
                                        <label htmlFor="password_confirmation" className="col-md-4 control-label">Confirm
                                            Password</label>
                                        <div className="col-md-6">
                                            <input id="password_confirmation" type="password" onChange={this.onChange}
                                                   name="password_confirmation" className="htmlForm-control"
                                                   value={this.state.password_confirmation}/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-6 col-md-offset-4">
                                            <button className="btn btn-primary" type="submit">Register</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}