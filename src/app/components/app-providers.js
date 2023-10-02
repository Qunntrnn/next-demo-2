"use client";

import { Provider } from "react-redux";
import { useState } from "react";

import { AppButton } from "./app-button";

import { AppFirebase } from "./app-firebase";
import { ThemeContext } from "../contexts/theme.context";
import { store } from "../store/store";

export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            return;
        }
        setTheme("light");
    };


    return (
        <Provider store={store}>
            <AppFirebase>
        <ThemeContext.Provider value={theme}>
            <AppButton className="w-20" color="blue" onClick={toggleTheme}>
                Toggle theme
            </AppButton>
            {children}
        </ThemeContext.Provider>
        </AppFirebase>
        </Provider>
    )
}