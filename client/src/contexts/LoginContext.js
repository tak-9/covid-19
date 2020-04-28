import React, {createContext, Component} from 'react';

export const LoginContext = createContext();

class LoginContextProvider extends Component {
    state = {
        loggedIn: false,
        username: null,
      }

    setLogInState = (loggedIn, username) => {
        this.setState({
            loggedIn: loggedIn,
            username: username
        });
    }

    render() { 
        return (
            <LoginContext.Provider value={{...this.state, setLogInState: this.setLogInState}}>
                {this.props.children}
            </LoginContext.Provider>
          );
    }
}
 
export default LoginContextProvider;

