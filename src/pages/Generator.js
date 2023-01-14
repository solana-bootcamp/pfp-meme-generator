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
  const [selectedNFTBackgroundImage, setSelectedNFTBackgroundImage] = useState([]);





  const {
    user,
    handleLogOut,
    setShowAuthFlow,
    showAuthFlow,
    walletConnector,
    authToken,
  } = useDynamicContext();

  useEffect(() => {

    const fetch_NFTs = async () => {
      try {
        let nfts = await get_nfts("Ee6rCpsPJkEQZbNMv3itLP7s71rRSyWedYHQphn7MwKn");
        set_owned_NFTs(nfts);
      } catch (error) {
        console.log(error)
      }
    }

    if (user.walletPublicKey != null) {
      setCurrentWallet(user.walletPublicKey);
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
      <Box className="Generator-body">
          <Box className="form-widget">
            <form onSubmit={() => {
              ;
            }}>
              <p className="p2">OG MEME GENERATOR</p>
              <label className="form-label2">1. Choose an NFT</label>
              <div>
                <UpdatedGallery nfts = {owned_NFTs} />
                <label className="form-label">2. Select a meme background</label>
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
                <label className="form-label">4. Input your meme text</label>
                <Input
                  placeholder="Meme Text"
                  variant="filled"
                  _focus={{ bg: "white" }}
                  fontFamily={"Montserrat"}
                  fontWeight="600"
                  margin={"0rem 0rem 2rem 0rem"}
                />
              </div>
              <Box style={{display: "flex", width: '100%', justifyContent: "end", alignItems: 'center'}}>
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
     <Feed/>
    </Box>

  );
}

export default Generator;