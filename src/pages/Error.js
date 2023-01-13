import "../styles/Error.css";
import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import Nav from "../Nav";
import crackedlogo from "../assets/crackedlogo.svg";

function Error() {
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
          <Nav />
        </div>
    );
  }

  return (
    <div className="Error">
      <div className="Error-header">
        <p className="p3">AN ERROR OCCURRED</p>
      </div>
    </div>
  );
}

export default Error;
