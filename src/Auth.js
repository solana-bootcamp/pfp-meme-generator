import "./Auth.css";
import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import crackedlogo from "./assets/crackedlogo.svg";

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
        <div className="img">
          <img
            src={crackedlogo}
            style={{ width: "175px", height: "175px" }}
            alt="crackedegg"
          />
        </div>
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
