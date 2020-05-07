import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import { LoginContext } from '../contexts/LoginContext';
import { serverUrl } from '../util/env';

class Login extends Component {
    static contextType = LoginContext;

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            rememberMe: true,
            redirectTo: null,
            errorMessage: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRememberMe = this.handleRememberMe.bind(this)
    }

    componentDidMount() {
        var rememberMe = (localStorage.getItem('rememberMe')==('true'));
        var username = localStorage.getItem('username');
        this.setState({username: username, rememberMe: rememberMe})
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleRememberMe(event) {
        console.log("event.target.checked ", event.target.checked);
        this.setState({ rememberMe : event.target.checked }, () => {
            localStorage.setItem('rememberMe', this.state.rememberMe);
        });
    }

    handleSubmit(event) {
        const { setLogInState } = this.context;
        
        event.preventDefault();
        console.log('handleSubmit');
        console.log('username, password: ' + this.state.username, ' ', this.state.password);

        const { username, rememberMe } = this.state;
        localStorage.setItem('remeberMe', rememberMe);
        localStorage.setItem('username', rememberMe ? username : '');

        axios
            .post(serverUrl + '/api/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    setLogInState(true, response.data.username);
                    // update the state to redirect to /tracker
                    this.setState({
                        redirectTo: '/tracker'
                    })
                } 
            }).catch(error => {
                console.log('login error: ', error);
                if (error.response.status === 401) {
                    this.setState({
                        errorMessage: 'Username or Password is incorrect.'
                    })
                } else {
                    this.setState({
                        errorMessage: 'Login Error'
                    })
                }
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* Nested Row within Card Body */}
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input 
                                                className="form-control form-control-user"
                                                type="text" 
                                                id="username" 
                                                name="username"
                                                aria-describedby="emailHelp" 
                                                placeholder="Enter Usename ..." 
                                                value={this.state.username}
                                                onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" 
                                                className="form-control form-control-user" 
                                                id="password" 
                                                name="password"
                                                placeholder="Password" 
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" checked={this.state.rememberMe} onChange={this.handleRememberMe} />
                                                    <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                                </div>
                                            </div>
                                            <div className="text-danger mb-3">{this.state.errorMessage}</div>
                                            <button
                                                className="btn btn-primary btn-user btn-block"
                                                onClick={this.handleSubmit}
                                                type="submit">
                                                Login
                                            </button>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <Link to="/signup">
                                            <span className="small" href="register.html">Create an Account!</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
}

export default Login
