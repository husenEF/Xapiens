import React, {useState, createContext} from 'react';

const MasterAuth = createContext();

const AuthProvider = (props) => {
  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const {children} = props;

  const logIn = (data) => {
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
