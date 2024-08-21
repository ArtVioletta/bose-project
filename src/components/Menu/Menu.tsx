import { useState } from "react";
import "./Menu.css";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <button className="burger" onClick={toggleMenu}>
          <img src="/assets/Icon-Burger-menu.png" alt="Open menu" />
        </button>
      )}
      <div className={`menu ${isOpen ? "menu--open" : "menu--closed"}`}>
        <div className="menu__top">
          <img src="/assets/Logo.png" alt="Bose logo" />
          <img
            src="/assets/Icon-Close.png"
            alt="Close"
            onClick={toggleMenu}
            className="close-icon"
          />
        </div>
        <nav className="nav">
          <a href="#home" className="nav__link" onClick={toggleMenu}>
            Home
          </a>
          <a href="#recommended" className="nav__link" onClick={toggleMenu}>
            Recommended
          </a>
          <a href="#categories" className="nav__link" onClick={toggleMenu}>
            Categories
          </a>
          <a href="#how-to-buy" className="nav__link" onClick={toggleMenu}>
            How to Buy
          </a>
        </nav>
      </div>
    </>
  );
};

export default Menu;

// import React from "react";
// import "./Menu.css";

// const Menu = () => {
//   return (
//     <div className="menu" id="menu">
//       <a href="menu">
//         <img src="/assets/Icon-Burger-menu.png" alt="Open menu" />
//       </a>
//       <div className="menu__top">
//         <img src="/assets/Logo.png" alt="Bose logo" />

//         <a href="#home">
//           <img src="/assets/Icon-Close.png" alt="Close" />
//         </a>
//         <div className="nav">
//           <a href="#home" className="nav__link">
//             Home
//           </a>

//           <a href="#recommended" className="nav__link">
//             Recommended
//           </a>

//           <a href="#categories" className="nav__link">
//             Categories
//           </a>

//           <a href="#how-to-buy" className="nav__link">
//             How to buy
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;
