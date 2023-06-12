import React, { useState, createContext } from "react";
import { useEffect } from "react";

export const TokenContext = createContext();

export function TokenProvider({ children }) {
    const [token, setToken] = useState(() => {
        return localStorage.getItem("token") || "";
    });

    useEffect(() => {
        localStorage.setItem("token", token);
    }, [token]);

    const updateToken = (newToken) => {
        setToken(newToken);
    };

    return (
        <TokenContext.Provider value={{ token, updateToken }}>
            {children}
        </TokenContext.Provider>
    );
}