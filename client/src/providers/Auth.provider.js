import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children, required }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  if (!user && required) {
    navigate("/signIn");
    return null;
  }

  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logOut ,required}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);