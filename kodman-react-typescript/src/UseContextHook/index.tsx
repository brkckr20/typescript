import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

interface IProps {
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
