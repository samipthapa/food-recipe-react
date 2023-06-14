import React, { useState, createContext } from "react";
import { useEffect } from "react";
// import { setLocalStorage, getLocalStorage } from "../utils/storageUtils";
import useLocalStorage from "../hooks/useLocalStorage";

export const TokenContext = createContext();

export function TokenProvider({ children }) {
    const [value, setLocalStorage] = useLocalStorage("user", {
        token: "",
        name: ""
    });

    // const user = getLocalStorage("user");

    const [data, setData] = useState({
        token: value.token,
        name: value.name
    });

    useEffect(() => {
        // setLocalStorage("user", {
        //     token: data.token,
        //     name: data.name
        // });
        setLocalStorage({
            token: data.token,
            name: data.name
        })
    }, [data]);

    return (
        <TokenContext.Provider value={{ data, setData }}>
            {children}
        </TokenContext.Provider>
    );
}