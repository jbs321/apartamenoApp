import React, {Component} from 'react';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {a:1,b:2};
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form role="form" className="htmlForm-horizontal">
                                        {/*<input type="hidden" name="_token" value="gmdXurRIAOTCxEgPiGGP1QlhTB6JJyezvpw2Tgrr" />*/}
                                        <div className="htmlForm-group">
                                            <label htmlFor="first_name" className="col-md-4 control-label">First
                                                Name</label>
                                            <div className="col-md-6">
                                                <input id="first_name" type="text" name="first_name" value=""
                                                        autoFocus="autoFocus"
                                                       className="htmlForm-control"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="last_name" className="col-md-4 control-label">Last Name</label>
                                            <div className="col-md-6">
                                                <input id="last_name" type="text" name="last_name" value=""  autoFocus="autoFocus" className="htmlForm-control"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>
                                            <div className="col-md-6">
                                                <input id="email" type="email" name="email" value=""  className="htmlForm-control"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password" className="col-md-4 control-label">Password</label>
                                            <div className="col-md-6">
                                                <input id="password" type="password" name="password"  className="htmlForm-control"/>
                                            </div>
                                        </div>

                                        <div className="htmlForm-group">
                                            <label htmlFor="password-confirm" className="col-md-4 control-label"> Confirm Password</label>
                                            <div className="col-md-6">
                                                <input id="password-confirm" type="password" name="password_confirmation"  className="htmlForm-control"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">
                                                <button className="btn btn-primary" onTouchTap={this.props.onSubmit(this.state, this)}>Register</button>
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