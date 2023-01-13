import * as React from "react";
import Home from "./Home";
import Auth from "./Auth";
import Edit from "./Edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Generator from "./Generator";

export default function Nav() {
  
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Generator/>} />
        <Route path='/edit' element={<Edit/>} />
    </Routes>
    </Router>
  );
}