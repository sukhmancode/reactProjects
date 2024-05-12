import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type ThemeType = "light" | "dark";

const ThemeContext = createContext<{
    theme: ThemeType;
    toggleTheme: () => void;
} | undefined>(undefined);

export const useTheme = () => {
    return useContext(ThemeContext);
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [isLightMode, setisLightMode] = useState(false);

    const toggleTheme = () => {
        setisLightMode(!isLightMode);
    }

    const theme: ThemeType = isLightMode ? "light" : "dark";

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]); 

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
