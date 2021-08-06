import React, { createContext, useContext, useEffect, useState } from "react";
import Loading from "../components/Placeholder/Loading";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logOut() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setCurrentUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
}
