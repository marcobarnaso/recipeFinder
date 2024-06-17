import React, { createContext, useState, useEffect } from "react";

// this manages the global state authentication state
// the functions loginContext and LogoutContext where
// put in the components that handle sign in and logout

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //find out if using useEffect is why the the 401 on
  //first render is happening, since, if I understand this
  //right, the setIsAuthenticated will be called AFTER the
  //first render

  useEffect(() => {
    const authData = localStorage.getItem("authData");
    if (authData) {
      setIsAuthenticated(true);
    }
  }, []);
  const loginContext = () => {
    setIsAuthenticated(true);
  };

  const logoutContext = () => {
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loginContext, logoutContext }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
