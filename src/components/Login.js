// import React from "react";
// import "../styles/login.css";

// function Login() {
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h1>Login</h1>
//         <input
//           type="text"
//           placeholder="Username"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//         />
//         <button className="login-button">
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React from "react";
// import "../styles/login.css";
// import logo from "../assets/logo.jpg"; // Ensure the logo is in src/assets/

// function Login() {
//   return (
//     <div className="login-container">
//       <div className="bubbles"></div>
//       <div className="login-box">
//         <img src={logo} alt="Logo" className="logo" />
//         <h1>Login</h1>
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button className="login-button">Sign In</button>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React from "react";
import "../styles/login.css";
import logo from "../assets/logo.jpg"; // Import the logo

function Login() {
  return (
    <div className="login-container">
      {/* Water Droplets */}
      <div className="water-drop"></div>
      <div className="water-drop"></div>
      <div className="water-drop"></div>
      <div className="water-drop"></div>
      <div className="water-drop"></div>
      <div className="water-drop"></div>
      <div className="water-drop"></div>

      {/* Login Box */}
      <div className="login-box">
        <img
          src={logo}
          alt="Logo"
          className="login-logo"
        />{" "}
        {/* Logo Added */}
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <button className="login-button">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
