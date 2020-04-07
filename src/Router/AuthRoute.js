import React from 'react';
import { Redirect, Route } from 'react-router-dom';


function AuthRoute({ component: Component, path }) {
    return (
        <Route exact path={path} render={props => {
            return localStorage.getItem("token") ? (<Component {...props} />) : (<Redirect to="/login" />);
        }} />
    );
}

export default AuthRoute;
