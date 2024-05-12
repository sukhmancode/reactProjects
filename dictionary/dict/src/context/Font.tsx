import React, { createContext, useContext, useState, ReactNode } from 'react';

export const FontContext = createContext<{
    selectedFont: string;
    setSelectedFont: React.Dispatch<React.SetStateAction<string>>;
} | undefined>(undefined);

export const useFontContext = () => {
    const context = useContext(FontContext);
    if (!context) {
        throw new Error('useFontContext must be used within a FontProvider');
    }
    return context;
};

interface FontProviderProps {
    children: ReactNode;
}

export const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
    const [selectedFont, setSelectedFont] = useState("Sans-serif");

    return (
        <FontContext.Provider value={{ selectedFont, setSelectedFont }}>
            {children}
        </FontContext.Provider>
    );
};
