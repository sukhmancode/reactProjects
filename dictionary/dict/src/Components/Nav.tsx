import React, { useState } from 'react';
import DropdownFont from './DropdownFont';
import { useTheme } from '../context/ThemeContext';

const Nav: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const themeContext = useTheme();

  const toggleDropdown = () => {
    setShowDropdown(prevState => !prevState);
  };


  const toggleTheme = themeContext ? themeContext.toggleTheme : () => {};
  const { theme } = themeContext || { theme: undefined };
  
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src="logo.svg" alt="" />
      </div>
      <div className="top-icons">
        <div className="language-dropdown" onClick={toggleDropdown}>
          <h1>Serif</h1>
        </div>
        {showDropdown && <DropdownFont />}
        <div className="toggle-btn" 
        onClick={toggleTheme}>
         <div className="toggle-circle" style={{ transform: theme === "light" ? 'translateX(150%)' : 'initial' ,transition:"all 0.3s ease-out"}}></div>

        </div>
        <div className="mode-icon">
          <img src="icon-moon.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
