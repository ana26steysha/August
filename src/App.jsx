import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MoveBar from "./component/MoveBar";
import SidebarData from "./component/SidebarData";
import Home from "./pages/Home";
import CustomSlider from "./pages/CustomSlider";
import Comments from "./pages/Comments";
import Information from "./pages/Information";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Routercards from "./pages/Routercards";
import Hotels from "./component/Hotels";

import { Home as HomeIcon } from "@mui/icons-material";

const App = () => {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked(!clicked);
  };
  return (
    <div>
      <MoveBar clicked={clicked} isClicked={handleClicked} />
      {clicked ? <SidebarData /> : null}
      <Routes>
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CustomSlider" element={<CustomSlider />} />
        <Route path="/Routercards" element={<Routercards />} />
        <Route path="/Comments" element={<Comments />} />
      </Routes>
    </div>
  );
};

export default App;
