import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Box, Select, Input, ChakraProvider } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import UpdatedGallery from "./components/UpdatedGallery";
import { useNavigate } from "react-router-dom";

function Home() {
  const [currentwallet, setCurrentWallet] = useState(null);

  const navigate = useNavigate();

  const {
    user,
    handleLogOut,
    setShowAuthFlow,
    showAuthFlow,
    walletConnector,
    authToken,
  } = useDynamicContext();

  useEffect(() => {
    if (user.walletPublicKey != null) {
      setCurrentWallet(user.walletPublicKey);
    }
  }, [user, walletConnector]);

  return (
    <div className="Homer">
      <Box w="100%" bg="#ED1C24" className="Home-header">
        <p className="p">WARETA</p>
        <DynamicWidget className="logout-button" />
      </Box>
      <Box className="Home-body">
        <Box className="form-widget">
          <p className="p2">EDIT</p>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
