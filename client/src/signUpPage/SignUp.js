import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import { LoginContext } from '../contexts/LoginContext';
import { serverUrl } from '../util/env';

class Signup extends Component {
    static contextType = LoginContext;
  
    constructor() {
		super()
		this.state = {
			username: '',
			password: '',
            confirmPassword: '',
            validationOK: false
        }
        this.passwordInput = React.createRef();
        this.confirmPasswordInput = React.createRef();

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
        }, () => {
            this.setState({"validationOK": true})

            console.log("this.confirmPasswordInput", this.confirmPasswordInput);
            if (this.state.password !== this.state.confirmPassword){
                console.log("confirm password is Not same");
                this.confirmPasswordInput.current.setCustomValidity("Invalid password");
                this.setState({"validationOK": false})
            } else {
                console.log("confirm password is same");
                this.confirmPasswordInput.current.setCustomValidity("");
            }
            if (this.state.username === ""){
                this.setState({"validationOK": false})
            }

        })

    }
	handleSubmit(event) {
        const { setLogInState } = this.context;

        console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		console.log(this.state.password)
        console.log(this.state.confirmPassword)
        //TODO: Implement confirm password here. 
        // Display error message
        event.preventDefault()


		//request to server to add a new username/password
		axios.post(serverUrl + '/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log("response",response)
				if (typeof response.data.error === 'undefined') {
					console.log('successful signup')

                    // User is automatically logged in after Sign up. 
                    // Update React Context if Sign up is successful. 
                    setLogInState(true, this.state.username);

                    this.setState({ //redirect to login page
						redirectTo: '/tracker'
                    })
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

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
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <input 
                                                className="form-control form-control-user" 
                                                type="text"
                                                id="username"
                                                name="username"
                                                placeholder="Username"
                                                value={this.state.username}
                                                onChange={this.handleChange}
                                                required={true}
                                            />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input 
                                                    className="form-control form-control-user" 
                                                    placeholder="Password"
                                                    type="password"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.handleChange}
                                                    ref={this.passwordInput}
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <input 
                                                    className="form-control form-control-user" 
                                                    placeholder="Repeat Password" 
                                                    type="password" 
                                                    name="confirmPassword"
                                                    id="confirmPassword"
                                                    value={this.state.confirmPassword}
                                                    onChange={this.handleChange}
                                                    ref={this.confirmPasswordInput}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-primary btn-user btn-block"
                                            onClick={this.handleSubmit}
                                            type="submit"
                                            disabled={!this.state.validationOK}>
                                            Sign up
                                        </button>
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                    <Link to="/login">
                                        <span className="small">Already have an account? Login!</span>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)} // end 'if'
}
}

export default Signup
