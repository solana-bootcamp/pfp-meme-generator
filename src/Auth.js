import "./Auth.css";
import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import Home from "./Home";
import Nav from "./Nav";

function Auth() {

  const {
    user,
    handleLogOut,
    setShowAuthFlow,
    showAuthFlow,
    walletConnector,
    authToken,
  } = useDynamicContext();

  if (user && !showAuthFlow) {
    return (
      <div>
        <Nav/>
      </div>
    );
  }

  return (
    <div className="Auth">
      <div className="Auth-header">
        <p className="p3">WARETA</p>
      </div>
      <DynamicWidget
            buttonClassName="connectButton"
            innerButtonComponent="Connect Wallet"
          />
    </div>
  );
}

export default Auth;
