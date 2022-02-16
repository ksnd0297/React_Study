import { Routes, Route, Link } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/Profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/Profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
