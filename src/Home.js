import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Box, Select, Input, ChakraProvider } from "@chakra-ui/react";
import { useForm } from "react-hook-form";


function Home() {
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <ChakraProvider>

<div className="Homer">
      <Box w="100%" bg="#ED1C24" className="Home-header">
        <p className="p">WARETA</p>
        <DynamicWidget className="logout-button" />
      </Box>
      <Box className="Home-body">
        <Box className="form-widget">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="p2">GENERATE AN OG MEME OF YOUR PFP</p>
            {/* 
            <div>
              <div className="Gallery"></div>
              <div className="Gallery-header">
                <p>Choose your NFT</p>
              </div>
            </div> */}
            <div>
              <Select placeholder="Select option">
                <option value="option1">Deep Fry</option>
                <option value="option2">Pixelate</option>
              </Select>{" "}
            </div>
            <div>
              <Input type="submit" />
            </div>
          </form>
        </Box>
      </Box>
    </div>

    </ChakraProvider>
    
  );
}

export default Home;
