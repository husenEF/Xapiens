import React, {useState, createContext} from 'react';

import {callLogin} from '../service/auth.api';

const MasterAuth = createContext();

const AuthProvider = (props) => {
  const [isLogin, setLogin] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const {children} = props;

  const logIn = async (e) => {
    const data = await callLogin(e);
    setToken(data.token);
    console.log({log: data});
    setUser(data);
    setLogin(true);
  };

  const logOut = () => {
    setLogin(false);
    setUser({});
  };
  return (
    <MasterAuth.Provider value={{isLogin, user, logIn, logOut}}>
      {children}
    </MasterAuth.Provider>
  );
};

const AuthConsumer = MasterAuth.Consumer;
export {AuthProvider, AuthConsumer};
export default MasterAuth;
