import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "./Auth.css";


function Auth() {
  const [loading, setLoading] = useState(false);

  const {
    user,
    handleLogOut,
    setShowAuthFlow,
    showAuthFlow,
    walletConnector,
    authToken,
  } = useDynamicContext();

  useEffect(() => {
    if (user && walletConnector) {
      const provider = walletConnector.getWeb3Provider();
    }
  }, [user, walletConnector]);

  return (
    <div className="Auth">
      <div>
        <p style={{ fontSize: "100px", fontFamily: "East Sea Dokdo" }}>WARETA</p>
      </div>
      <div className="main-body">
        <DynamicWidget
          buttonClassName="connectButton"
          innerButtonComponent="Connect Wallet"
        />{" "}
      </div>
    </div>
  );
}

export default Auth;
