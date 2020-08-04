import React, {createContext, useState} from 'react';

export const LoginContext = createContext();

function LoginContextProvider(props) {

    const [loggedIn, setLoggedIn] = useState();
    const [username, setUsername] = useState();

    const setLogInState = (loggedInArg, usernameArg) => {
        console.log("*****setLoginState****" , loggedIn, username);
        setLoggedIn(loggedInArg);
        setUsername(usernameArg);
    }

    return (
        <LoginContext.Provider value={{loggedIn, username, setLogInState: setLogInState}}>
            {props.children}
        </LoginContext.Provider>
    );

}
 
export default LoginContextProvider;

