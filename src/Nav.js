import * as React from "react";
import Feed from "./pages/Feed";
import Edit from "./pages/Edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

export default function Nav() {
  
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>
    </Router>
  );
}