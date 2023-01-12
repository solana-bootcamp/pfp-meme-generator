import * as React from "react";
import Home from "./Home";
import Auth from "./Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Nav() {
  
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/auth' element={<Auth/>} />
    </Routes>
    </Router>
  );
}