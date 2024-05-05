import React from 'react'

const Nav:React.FC= () => {
  return (
    <div className="nav-bar">
    <div className="logo">
      <img src="logo.svg" alt="" />
    </div>
    <div className="top-icons">
      <div className="language-dropdown">
        <h1>Serif</h1>
      </div>
       
       <div className="toggle-btn">
        <div className="toggle-circle">
          
        </div>
       </div>

       <div className="mode-icon">
         <img src="icon-moon.svg" alt="" />
       </div>
    </div>
  </div>
  )
}

export default Nav