import React, { PureComponent } from 'react';
import { Navigate } from 'react-router-dom';

export class Login extends PureComponent<any, any> {
  state = {
    login: true,
  };
  render() {
    return (
      <div>
        Login
        {this.state.login && <Navigate to="/about/us" replace={true} />}
      </div>
    );
  }
}

export default Login;
