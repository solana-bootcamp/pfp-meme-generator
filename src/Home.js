import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Box } from '@chakra-ui/react'

function Home() {
  // const {
  //   user,
  //   handleLogOut,
  //   setShowAuthFlow,
  //   showAuthFlow,
  //   walletConnector,
  //   authToken,
  // } = useDynamicContext();

  // const [currentwallet, setCurrentWallet] = useState(null);

  // useEffect(() => {
  //   if (user.walletPublicKey != null) {
  //     setCurrentWallet(user.walletPublicKey);
  //   }
  // }, [user.walletPublicKey]);



  return (
    <div className="Home-body">
    {/* <DynamicWidget /> */}
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
