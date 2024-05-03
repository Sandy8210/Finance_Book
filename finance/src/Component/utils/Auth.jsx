import React, { useContext, useState } from "react";

const AuthContaxt = React.createContext();
export const Auth = (props) => {
  const [user, setUser] = useState(null);

  const login = (userA) => {
    setUser(userA);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContaxt.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContaxt.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContaxt);
};
