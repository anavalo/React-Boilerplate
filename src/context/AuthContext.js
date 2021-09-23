import React, { createContext, useState, useEffect, useContext } from 'react';
import { getUser } from 'services/services';

export const AuthDataContext = createContext(null);

const initialAuthData = {};

const AuthDataProvider = props => {
  const [authData, setAuthData] = useState(initialAuthData);

  useEffect(() => {
    getUser().then(data => setAuthData(
        {
          username: data.username,
          privileges: data.privileges,
          user: data.user
        }));
  }, []);

  const onLogout = () => {
    delete_cookie('VERITYTOKEN','/', process.env.REACT_APP_COOKIE_DOMAIN)
    setAuthData(initialAuthData);
    return window.location.href = `/login`;
  }

  const onLogin = newAuthData => setAuthData(newAuthData);

  return <AuthDataContext.Provider value={{ authData, onLogin, onLogout }} {...props} />;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;

function delete_cookie( name, path, domain ) {
  if( get_cookie( name ) ) {
    document.cookie = name + "=" +
        ((path) ? ";path="+path:"")+
        ((domain)?";domain="+domain:"") +
        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}

function get_cookie(name){
  return document.cookie.split(';').some(c => {
    return c.trim().startsWith(name + '=');
  });
}