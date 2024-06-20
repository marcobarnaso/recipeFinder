import React, { createContext, useState, useEffect } from "react";

// this manages the global state authentication state
// the functions loginContext and LogoutContext where
// put in the components that handle sign in and logout

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem
    ("authData"));
    if (authData) {
      setUser(authData.authData._id)
      setIsAuthenticated(true);
      setToken(authData.authData.token);
      setUserName({userName: authData.authData.userName, userLastName: authData.authData.userLastName})
    }
    setLoading(false); // Set loading to false once auth state is determined
  }, []);

  const loginContext = (authData) => {
    // it is REALLY important to pass what we saved in 
    //local storage to update the context as soon as the
    //user logs in, otherwise there will be issues pulling
    //the token, userID and any other information saved in
    //the local storage

    localStorage.setItem("authData", JSON.stringify(authData));
    setIsAuthenticated(true);
    setToken(authData.authData.token);
    setUser(authData.authData._id);
    setUserName({userName: authData.authData.userName, userLastName: authData.authData.userLastName})
  }

  const logoutContext = () => {
    setToken("");
    setUser(null)
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loginContext,
        logoutContext,
        user,
        token,
        loading,
        userName,
        setLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
