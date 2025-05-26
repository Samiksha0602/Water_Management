/* import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import "./styles/navigation.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route path="/info" element={<Info />} />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
 */

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import WaterQuality from "./components/WaterQuality";
import SystemCheck from "./components/SystemCheck"; // ✅ ADDED
import "./styles/navigation.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route path="/info" element={<Info />} />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/system-check"
          element={<SystemCheck />}
        />{" "}
        {/* ✅ ADDED */}
        <Route
          path="/water-quality"
          element={<WaterQuality />}
        />
      </Routes>
    </Router>
  );
}

export default App;
