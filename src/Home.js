import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const {
    user,
    handleLogOut,
    setShowAuthFlow,
    showAuthFlow,
    walletConnector,
    authToken,
  } = useDynamicContext();

  return (
    <div className="body">
      <div>
        <p>Home</p>
      </div>
    </div>
  );
}

export default Home;
