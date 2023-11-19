import { createContext, useState } from 'react';

type Theme = 'light' | 'dark'
type ThemeContext = { theme: Theme; toggleTheme: () => void }
type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContext>( 
  {} as ThemeContext
)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [ theme, setTheme ] = useState<Theme>("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  document.body.setAttribute('data-theme', theme)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};