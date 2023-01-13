import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "../styles/Home.css";
import { Box, Select, Input, ChakraProvider } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import UpdatedGallery from "../components/UpdatedGallery";
import { Navigate } from "react-router-dom";


function Edit() {
  const [currentwallet, setCurrentWallet] = useState(null);

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
    <ChakraProvider>
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

    </ChakraProvider>

  );
}

export default Edit;
