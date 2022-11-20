import { createContext, useContext, useEffect } from "react";
import React from "react";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateCurrentUser,
} from "firebase/auth";

type userContextType = {
  user: any;
  createUser: any;
  signIn: any;
  signOutUser: any;
  updateCurrentUser: any;
};

export const UserContext = createContext<userContextType>({
  user: null,
  createUser: null,
  signIn: null,
  signOutUser: null,
  updateCurrentUser: null,
});

type Props = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState<null | any>(null);
  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    return signOut(auth);
  };
  console.log(user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (Currentuser) => {
      if (Currentuser) {
        setUser(Currentuser);
        localStorage.setItem(
          "accessToken",
          JSON.stringify(Currentuser.getIdToken())
        );
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, user, signIn, signOutUser, updateCurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext<userContextType>(UserContext);
};
