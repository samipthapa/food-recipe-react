import React, { useState, createContext } from "react";
import { useEffect } from "react";
import { setLocalStorage, getLocalStorage } from "../utils/storageUtils";

export const TokenContext = createContext();

export function TokenProvider({ children }) {
    const user = getLocalStorage("user");

    const [data, setData] = useState(() => {
        return {
            token: user ? user.token : "",
            name: user ? user.name : ""
        }
    });

    useEffect(() => {
        setLocalStorage("user", {
            token: data.token,
            name: data.name
        });
    }, [data]);

    // const updateData = (newToken, name) => {
    //     setData(prev => ({
    //         ...prev,
    //         token: newToken,
    //         name: name
    //     }))
    // };

    return (
        <TokenContext.Provider value={{ data, setData }}>
            {children}
        </TokenContext.Provider>
    );
}