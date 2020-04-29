import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Topbar from '../common/Topbar'
import { LoginContext } from '../contexts/LoginContext';
import { serverUrl } from '../util/env';

class Login extends Component {
    static contextType = LoginContext;

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const { setLogInState } = this.context;
        
        event.preventDefault()
        console.log('handleSubmit')
        console.log('username, password: ' + this.state.username, ' ', this.state.password)
        axios
            .post(serverUrl + '/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    // TODO: Fix this. Temporary uncommented

                    // this.props.updateUser({
                    //     loggedIn: true,
                    //     username: response.data.username
                    // })

                    setLogInState(true, response.data.username);

                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/tracker'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                    <Topbar title="Login" />
                    <h4>Login</h4>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <div className="col-1 col-ml-auto">
                                    <label className="form-label" htmlFor="username">Username</label>
                                </div>
                                <div className="col-3 col-mr-auto">
                                    <input className="form-input"
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-1 col-ml-auto">
                                    <label className="form-label" htmlFor="password">Password: </label>
                                </div>
                                <div className="col-3 col-mr-auto">
                                    <input className="form-input"
                                        placeholder="password"
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="col-7"></div>
                                <button
                                    className="btn btn-primary col-1 col-mr-auto"
                                
                                    onClick={this.handleSubmit}
                                    type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default Login
