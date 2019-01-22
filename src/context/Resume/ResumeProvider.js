// AuthUser.jsx
import React, { Component } from 'react';
import { authenticateUser } from './Auth';
 
// initialize Context with default value
export const AuthCtx = React.createContext(null);
 
const AuthenticateUser = (ComposedComponent) => {
  class Authenticate extends Component {
    state = {
      userAuth: null
    };
 
    async componentDidMount() {
      try {
        // make API request to authenticate user on the backend
        const { status, data } = await authenticateUser();
        if (status === 200) {
          this.setState({ userAuth: data });
        }
      } catch (err) {
        // handle error
      }
    }
 
    render() {
      const { userAuth } = this.state;
      return(
        <AuthCtx.Provider value={userAuth}>
          <ComposedComponent />
        </AuthCtx.Provider>
      );
    }
  }
  return Authenticate;
};
 
export default AuthenticateUser;