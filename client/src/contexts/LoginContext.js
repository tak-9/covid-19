import React, {createContext, useState} from 'react';

export const LoginContext = createContext();

function LoginContextProvider(props) {

    const [loggedIn, setLoggedIn] = useState();
    const [username, setUsername] = useState();
    const [fullName, setFullName] = useState();

    const setLogInState = (loggedInArg, usernameArg, fullNameArg) => {
        console.log("*****setLoginState****" , loggedInArg, usernameArg, fullNameArg);
        setLoggedIn(loggedInArg);
        setUsername(usernameArg);
        if (fullNameArg) {
            setFullName(fullNameArg);
        }
    }

    return (
        <LoginContext.Provider value={{loggedIn, username, setLogInState: setLogInState, fullName, setFullName,}}>
            {props.children}
        </LoginContext.Provider>
    );

}
 
export default LoginContextProvider;

