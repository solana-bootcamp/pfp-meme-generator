import * as React from "react";
import Feed from "./pages/Feed";
import Edit from "./pages/Edit";
import ViewResult from "./pages/ViewResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

export default function Nav() {
  
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit' element={<Edit/>} />
        <Route path='/viewresult' element={<ViewResult/>} />
        <Route path='/feed' element={<Feed/>} />
    </Routes>
    </Router>
  );
}