import React, {Component} from 'react';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {a: 1, b: 2};
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        if(this.props.onSubmit !== undefined) {
            this.props.onSubmit(event);
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
                                    {/*<input type="hidden" name="_token" value="gmdXurRIAOTCxEgPiGGP1QlhTB6JJyezvpw2Tgrr" />*/}
                                    <div className="htmlForm-group">
                                        <label htmlFor="firstName" className="col-md-4 control-label">First Name</label>
                                        <div className="col-md-6">
                                            <input id="firstName" type="text" name="firstName" autoFocus="autoFocus" className="htmlForm-control" value="jacob"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="lastName" className="col-md-4 control-label">Last Name</label>
                                        <div className="col-md-6">
                                            <input id="lastName" type="text" name="lastName" autoFocus="autoFocus" className="htmlForm-control" value="balabanov"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>
                                        <div className="col-md-6">
                                            <input id="email" type="email" name="email" className="htmlForm-control" value="jacob@balabanov.ca"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="address" className="col-md-4 control-label">Address</label>
                                        <div className="col-md-6">
                                            <input id="address" type="address" name="address" className="htmlForm-control" value="Eli Cohen 22 bat yam"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="unitNumber" className="col-md-4 control-label">Unit Number</label>
                                        <div className="col-md-6">
                                            <input id="unitNumber" type="number" min="1" name="unitNumber" className="htmlForm-control" value="6"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phoneNumber" className="col-md-4 control-label">Phone Number</label>
                                        <div className="col-md-6">
                                            <input id="phoneNumber" type="" min="10" max="10" name="phoneNumber" className="htmlForm-control" value="7788820853"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password" className="col-md-4 control-label">Password</label>
                                        <div className="col-md-6">
                                            <input id="password" type="password" name="password" className="htmlForm-control" value="Aa123456"/>
                                        </div>
                                    </div>

                                    <div className="htmlForm-group">
                                        <label htmlFor="rePassword" className="col-md-4 control-label">Confirm Password</label>
                                        <div className="col-md-6">
                                            <input id="rePassword" type="password" name="password_confirmation" className="htmlForm-control" value="Aa123456"/>
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