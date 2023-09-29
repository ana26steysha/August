import React from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import About from "./components/About";
import Information from "./components/Information";
import Blog from "./components/Blog";
import RegistrationPage from "./components/RegistrationPage"; // Импортируйте вашу форму

const App = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/information" element={<Information />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
};

export default App;
