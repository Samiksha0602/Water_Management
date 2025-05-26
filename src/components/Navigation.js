// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"

// function Navigation() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <nav className="navigation">
//       <div className="nav-container">
//         <div className="logo">
//           <Link to="/">
//             <span className="logo-text">WaterWise</span>
//           </Link>
//         </div>

//         <div className="mobile-toggle" onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
//           <li>
//             <Link to="/" onClick={() => setIsMenuOpen(false)}>
//             Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" onClick={() => setIsMenuOpen(false)}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/info" onClick={() => setIsMenuOpen(false)}>
//               Information
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
//               Contact
//             </Link>
//           </li>
//           <li>
//             <Link to="/login" className="login-link" onClick={() => setIsMenuOpen(false)}>
//               Login
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navigation


"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Import the logo

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Combined Logo & Text in One Div for Proper Alignment */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="WaterWise Logo" className="navbar-logo" />
            <span className="logo-text">WaterWise</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/info" onClick={() => setIsMenuOpen(false)}>Information</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/login" className="login-link" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
