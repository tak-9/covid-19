import React, { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import userIcon from '../../img/user.svg';
import unknownUserIcon from '../../img/unknown_user.svg';


function User() {
    let loginCtx = useContext(LoginContext);
    let { setLogInState, loggedIn, username } = loginCtx;
    console.log("****User.js logIn**** loggedIn, username : ", loggedIn, username)

    let logoutHandler = function() {
        console.log("logoutHandler"); 
        setLogInState(false, null);
    }

    let jsx;
    if (username === null) {
        // User has not logged in
        jsx = (
            <li className="nav-item">
                {/* Nav Item - User Information  */}
                {/* data-toggle="dropdown" must be removed so that link works. */}
                <a className="nav-link" href="/login">
                <span className="mr-2 d-none d-lg-inline text-gray-600 medium"><i className="fas fa-sign-in-alt"></i> login </span>
                <img className="img-profile" src={unknownUserIcon} alt="icon" />
                </a>
            </li>
        )
    } else {
        // User has logged in
        jsx = (
            <li className="nav-item dropdown no-arrow">
                {/* Nav Item - User Information  */}
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 medium">{username}</span>
                    <img className="img-profile rounded-circle" src={userIcon} alt="icon" />
                </a>
                {/* Dropdown - User Information */}
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    Profile
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" onClick={logoutHandler}>
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Logout
                    </a>
                </div>
            </li>
    
        )
    }

    return jsx;
}

export default User;


