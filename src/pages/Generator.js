import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "../styles/Generator.css";
import { Box, Select, Input, ChakraProvider } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import UpdatedGallery from "../components/UpdatedGallery";
import { useNavigate } from "react-router-dom";
import Feed from "./Feed";
import ViewResult from "./ViewResult";
import BackgroundTemplates from "../components/BackgroundTemplates";
import get_nfts from "../utils/get_nfts";

function Generator() {
  const navigate = useNavigate();

  const [currentwallet, setCurrentWallet] = useState(null);
  const [owned_NFTs, set_owned_NFTs] = useState([]);
  const [selectedNFTImage, setSelectedNFTImage] = useState([]);
  const [selectedNFTStyle, setSelectedNFTStyle] = useState([]);
  const [selectedNFTBackgroundImage, setSelectedNFTBackgroundImage] = useState(
    []
  );

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
      const fetch_NFTs = async () => {
        try {
          setCurrentWallet(user.walletPublicKey);
          let nfts = await get_nfts(user.walletPublicKey);
          set_owned_NFTs(nfts);
        } catch (error) {
          console.log(error);
        }
      };
      fetch_NFTs();
      console.log(owned_NFTs);
    }
  }, [user, walletConnector]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Box>
      <p className="p2">MEME GENERATOR</p>
      <Box className="Generator-body">
        <Box className="form-widget">
          <form onSubmit={() => {}}>
            <label className="form-label2">1. CHOOSE AN NFT</label>
            <div>
              <UpdatedGallery nfts={owned_NFTs} />
              <label className="form-label">2. SELECT A MEME BACKGROUND</label>
              <BackgroundTemplates />
              {/* <label className="form-label">3. Select a meme style</label>
                <Select
                  placeholder="Select option"
                  variant="filled"
                  _focus={{ bg: "white" }}
                  _hover={{cursor: "pointer"}}
                  fontFamily={"Montserrat"}
                  fontWeight="600"
                >
                  <option value="option1">Deep Fry</option>
                  <option value="option2">Pixelate</option>
                </Select>{" "} */}
              <label className="form-label">3. INPUT YOUR MEME TEXT</label>
              <Input
                placeholder="Meme Text"
                variant="filled"
                _focus={{ bg: "white" }}
                fontFamily={"Montserrat"}
                fontWeight="600"
                margin={"0rem 0rem 2rem 0rem"}
              />
            </div>
            <Box
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <ViewResult />
            </Box>
            {/* <Input
                w="100%"
                h="2.75rem"
                color="white"
                bg={"black"}
                border={"0px"}
                type="submit"
                fontFamily={"Montserrat"}
                fontWeight="800"
                _hover={{bg: "#2F3238", cursor: "pointer"}}
              /> */}
          </form>
        </Box>
      </Box>
      <Feed />
    </Box>
  );
}

export default Generator;
