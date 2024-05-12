import React, { useState } from 'react';
import DropdownFont from './DropdownFont';

const Nav: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(prevState => !prevState);
  };

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
        <div className="toggle-btn">
          <div className="toggle-circle"></div>
        </div>
        <div className="mode-icon">
          <img src="icon-moon.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
