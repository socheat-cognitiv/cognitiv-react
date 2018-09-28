import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { loginUser } from "../../actions";
import cognitivLogo from '../../resources/images/cogn-logo.png';
import $ from 'jquery';
import 'jquery-serializejson';

const mapDispatchToProps = dispatch => {
    return {
      loginUser: user => dispatch(loginUser(user))
    };
};
const mapStateToProps = (state) => {
    return {
        user : state.user
    };
};
class ConnectedLoginWrapper extends Component {
    state = {
        remember_me: this.props.user.remember_me,
    }
    submitLogin = this.submitLogin.bind(this);
    handleCheckboxChange = this.handleCheckboxChange.bind(this);

    submitLogin(e) {
        e.preventDefault();
        let data = $('#loginForm').serializeJSON({checkboxUncheckedValue: "false"});
        const { auth_token } = this.props.user;
        
        $('#cogn-loading-wrapper').show();
        
        JSON.parse(auth_token) ? 
           global.cognitiv.api.loginWithAuthToken(data) :
           global.cognitiv.api.login(data);
    }
    handleCheckboxChange(e) {
        this.setState({remember_me : e.target.checked});
    }
    render() {
        return ( 
            <div className="col-xs-12 cogn-content cogn-flex-login">
                <div className="cogn-login-inner text-center cogn-shadow">
                    <img className="cogn-login-image-sm" src={cognitivLogo} alt="Cognitiv Logo" />
                    <div className="col-xs-6 text-left cogn-border-right cogn-no-padding cogn-padding-right">
                        <p className="cogn-login-sub-title">Cognitiv Login</p>
                        <form id="loginForm" onSubmit={this.submitLogin}>
                            <div className="form-group">
                                <input type="email" className="form-control" name="username" placeholder="Email Address"></input>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password"></input>
                            </div>
                            <div className="cogn-flex-login-inner">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="remember" onChange={this.handleCheckboxChange} checked={ this.state.remember_me } value={ this.state.remember_me }></input>
                                    <label className="cogn-form-check-label" htmlFor="remember">Remember me</label>
                                </div>
                                <p><Link to="/password-reset">Reset Password</Link></p>
                            </div>
                            <button type="submit" className="btn btn-primary cogn-login-btn">Sign in</button>
                        </form>
                    </div>
                    <div className="col-xs-6 text-left cogn-no-padding cogn-padding-left">
                        <p className="cogn-login-sub-title">Cognitiv Terms</p>
                        <p className="cogn-login-terms">By proceeding to login to your account and use Cognitiv, you are agreeing to our Terms of Service and Privacy Policy.</p>
                    </div>
                </div>
            </div>        
        );
    }
}

const LoginWrapper = connect(mapStateToProps, mapDispatchToProps)(ConnectedLoginWrapper);
export default LoginWrapper;