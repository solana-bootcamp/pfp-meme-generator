import * as React from "react";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Edit from "./pages/Edit";
import Auth from "./pages/Auth";
import { useDynamicContext } from "@dynamic-labs/sdk-react";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Nav() {
  const [useractive, setUserActive] = useState(false);

  const {
    user,
    handleLogOut,
    setShowAuthFlow,
    showAuthFlow,
    walletConnector,
    authToken,
  } = useDynamicContext();

  if (user && !showAuthFlow) {
    setUserActive(true);
  }

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Auth />} />
        <Route path="/home" element={useractive === true ? <Error /> : <Home />} />
        <Route
          path="/edit"
          element={useractive === true ? <Error /> : <Edit />}
        />
      </Routes>
    </Router>
  );
}
