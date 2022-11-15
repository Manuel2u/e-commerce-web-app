import { createContext } from "react";
import React from "react";

export const UserContext = createContext("");

type Props = {
    children?: React.ReactNode;
};

export const UserProvider = ({ children } : Props) => {
    
    
    return (
        <UserContext.Provider value="">
        {children}
        </UserContext.Provider>
    );
    };




