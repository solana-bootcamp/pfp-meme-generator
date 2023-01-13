import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "../styles/Home.css";
import { Box, Select, Input, ChakraProvider } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import UpdatedGallery from "../components/UpdatedGallery";
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    // alert(JSON.stringify(data));
    navigate("/edit");
  };

  return (
    <ChakraProvider>
     <div className="Homer">
        <Box w="100%" bg="#ED1C24" className="Home-header">
          <p className="p">WARETA</p>
          <DynamicWidget className="logout-button" h />
        </Box>
        <Box className="Home-body">
          <Box className="form-widget">
            <form onSubmit={onSubmit()}>
              <p className="p2">OG MEME GENERATOR</p>
              {/* 
            <div>
              <div className="Gallery"></div>
              <div className="Gallery-header">
                <p>Choose your NFT</p>
              </div>
            </div> */}
              <label className="form-label2">1. Choose an NFT</label>
              <div>
                <UpdatedGallery />
                <label className="form-label">2. Select a meme style</label>
                <Select
                  placeholder="Select option"
                  variant="filled"
                  _focus={{ bg: "white" }}
                  _hover={{ cursor: "pointer" }}
                  fontFamily={"Montserrat"}
                  fontWeight="600"
                >
                  <option value="option1">Deep Fry</option>
                  <option value="option2">Pixelate</option>
                </Select>{" "}
                <label className="form-label">3. Input your meme text</label>
                <Input
                  placeholder="Meme Text"
                  variant="filled"
                  _focus={{ bg: "white" }}
                  fontFamily={"Montserrat"}
                  fontWeight="600"
                  margin={"0rem 0rem 2rem 0rem"}
                />
              </div>
              <Input
                w="100%"
                h="2.75rem"
                color="white"
                bg={"black"}
                border={"0px"}
                type="submit"
                fontFamily={"Montserrat"}
                fontWeight="800"
                _hover={{ bg: "#2F3238", cursor: "pointer" }}
              />
            </form>
          </Box>
        </Box>
      </div>
    </ChakraProvider>
     
  );
}

export default Home;
