import React, { Component, useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';

function LogoutModal() {
    let loginCtx = useContext(LoginContext);
    let { setLogInState, loggedIn, username } = loginCtx;

    const[redirectUrl, setRedirectUrl] = useState('',[]);
    let redirectHandler = function(url) {
        console.log("logoutHandler"); 
        setLogInState(false, null, null);
        setRedirectUrl(url);
    }
    
    return (
        redirectUrl !== "" ? 
        <div>
                <Redirect to={redirectUrl} />
        </div>
        :
        <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <button className="btn btn-primary" type="button"  data-dismiss="modal" onClick={() => redirectHandler("/")}><Link to="/">Logout</Link></button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default LogoutModal;