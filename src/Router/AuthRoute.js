import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { SessionUtil } from '../utils';

function AuthRoute({ component: Component, path }) {
  return (
    <Route
      path={path}
      render={props => {
        return SessionUtil.getUserInfo() ? <Component {...props} /> : <Redirect to='/login' />;
      }}
    />
  );
}

export default AuthRoute;
