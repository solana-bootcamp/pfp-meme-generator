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
    <div className="Home-body">
      <div className="Home-header">
        <p>Home</p>
      </div>
      <div className="Gallery"></div>
      <div className="Gallery-header">
        <p>Choose your NFT</p>
      </div>
      <div>

      </div>
      <div className="form-widget">

      </div>
    </div>
  );
}

export default Home;
