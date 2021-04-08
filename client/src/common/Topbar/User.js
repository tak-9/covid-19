import React, { useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';
import userIcon from '../../img/user.svg';
import unknownUserIcon from '../../img/unknown_user.svg';
import axios from 'axios';
import { serverUrl } from '../../util/env';

function User() {
    let loginCtx = useContext(LoginContext);
    let { setLogInState, username, fullName } = loginCtx;

    const[redirectUrl, setRedirectUrl] = useState('');

    let logoutHandler = function(url) {
        axios.get(`${serverUrl}/api/user/logout`, { withCredentials: true })
            .then(result => {
                setLogInState(false, '', '');
                setRedirectUrl(url);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    let jsx;
    if (redirectUrl !== "") { 
        console.log("redirectUrl", redirectUrl);
        jsx = (
            <div>
                <Redirect to={redirectUrl} />
            </div>
        )
    } else if (username === null) {
        // User has not logged in
        jsx = (
            <li className="nav-item dropdown no-arrow">
                {/* Nav Item - User Information  */}
                <Link className="nav-link" to="/login" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 medium"><i className="fas fa-sign-in-alt"> </i> &nbsp;Login</span>
                <img className="img-profile" src={unknownUserIcon} alt="icon" />
                </Link>

                {/* Dropdown - User Information */}
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <Link className="dropdown-item" to="/login">
                    <i className="fas fa-sign-in-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Login
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="/signup">
                    <i className="fas fa-user-plus fa-sm fa-fw mr-2 text-gray-400" />
                    Sign up
                    </Link>
                </div>


            </li>
        )
    } else {
        // User has logged in
        jsx = (
            <li className="nav-item dropdown no-arrow">
                {/* Nav Item - User Information  */}
                <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 medium">{ fullName ? fullName : username}</span>
                    <img className="img-profile rounded-circle" src={userIcon} alt="icon" />
                </Link>
                {/* Dropdown - User Information */}
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    {/* <Link className="dropdown-item" to="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    Profile
                    </Link>
                    <div className="dropdown-divider" /> */}
                    <button className="dropdown-item" data-toggle="modal" data-target="#logoutModal" onClick={() => logoutHandler("/")}>
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Logout
                    </button>
                </div>
            </li>
    
        )
    }

    return jsx;
}

export default User;


