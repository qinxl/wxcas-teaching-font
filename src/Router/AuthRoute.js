import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { SessionUtil } from '../utils';

function AuthRoute({ component: Component, path }) {
  return (
    <Route
      exact
      path={path}
      render={props => {
        return SessionUtil.getUserId ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        );
      }}
    />
  );
}

export default AuthRoute;
