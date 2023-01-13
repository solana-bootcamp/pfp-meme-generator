import * as React from "react";
import Home from "./Home";
// import Error from "./pages/Error";
import Edit from "./Edit";
import Auth from "./Auth";
import { useDynamicContext } from "@dynamic-labs/sdk-react";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Nav() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
}
