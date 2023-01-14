import * as React from "react";
import Feed from "./pages/Feed";
import Edit from "./pages/Edit";
import ViewResult from "./pages/ViewResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Generator from "./pages/Generator";

export default function Nav() {
  
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Generator/>} />
        <Route path='/edit' element={<Edit/>} />
        <Route path='/viewresult' element={<ViewResult/>} />
        <Route path='/feed' element={<Feed/>} />
    </Routes>
    </Router>
  );
}