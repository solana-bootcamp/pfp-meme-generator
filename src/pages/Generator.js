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
import AIBackgroundTemplates from "../components/AIBackgroundTemplates";
import get_nfts from "../utils/get_nfts";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Editor from "../components/Editor";


function Generator() {
  const navigate = useNavigate();

  const [currentwallet, setCurrentWallet] = useState(null);
  const [owned_NFTs, set_owned_NFTs] = useState("");
  const [selectedNFTImage, setSelectedNFTImage] = useState("");
  const [selectedNFTStyle, setSelectedNFTStyle] = useState("");
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
          const testaddress = "Ee6rCpsPJkEQZbNMv3itLP7s71rRSyWedYHQphn7MwKn"
          setCurrentWallet(user.walletPublicKey);
          let nfts = await get_nfts(testaddress);
          set_owned_NFTs(nfts);
        } catch (error) {
          console.log(error);
        }
      };
      fetch_NFTs();
      console.log(owned_NFTs);
    }

    console.log(
      "selected: " +
        selectedNFTImage["title"] +
        " with mint address: " +
        selectedNFTImage["address"] +
        " and url: " +
        selectedNFTImage["url"]
    );
  }, [user, walletConnector, selectedNFTImage, owned_NFTs]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleOGNFTCallback = (childData) => {
    setSelectedNFTImage(childData);
    console.log("Called NFT Callback!");
  };

   const handleAINFTCallback = (childData) => {
    setSelectedNFTImage(childData);
    console.log("Called NFT Callback!");
  };

  const handleOGBackgroundCallback = (childImageData) => {
    setSelectedNFTBackgroundImage(childImageData);
    console.log("Called Background Callback!");
  };

  const handleAIBackgroundCallback = (childImageData) => {
    setSelectedNFTBackgroundImage(childImageData);
    console.log("Called Background Callback!");
  };

  return (
    <div>
      <div className="leftcolumn">
        <Box>
          <p className="title">MEME GENERATOR</p>
          <Box className="Generator-body">
            <Tabs isFitted variant="soft-rounded">
              <TabList mb="1em">
                <Tab
                  color={"white"}
                  fontFamily="Montserrat"
                  fontWeight="800"
                  _selected={{
                    color: "black",
                    fontFamily: "Montserrat",
                    fontWeight: "800",
                    bg: "white",
                  }}
                >
                  OG
                </Tab>
                <Tab
                  color={"white"}
                  fontFamily="Montserrat"
                  fontWeight="800"
                  _selected={{
                    color: "black",
                    fontFamily: "Montserrat",
                    fontWeight: "800",
                    bg: "white",
                  }}
                >
                  AI
                </Tab>
                <Tab
                  color={"white"}
                  fontFamily="Montserrat"
                  fontWeight="800"
                  _selected={{
                    color: "black",
                    fontFamily: "Montserrat",
                    fontWeight: "800",
                    bg: "white",
                  }}
                >
                  CUSTOM
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box className="form-widget">
                    <form onSubmit={() => {}}>
                      <label className="form-label2">1. CHOOSE AN NFT</label>
                      <div>
                        <UpdatedGallery
                          nfts={owned_NFTs}
                          parentCallback={handleOGNFTCallback}
                        />
                        <label className="form-label">
                          2. SELECT A MEME BACKGROUND
                        </label>
                        <BackgroundTemplates 
                          parentCallback={handleOGBackgroundCallback}
                        />
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
                        <label className="form-label">
                          3. INPUT YOUR UPPER MEME TEXT
                        </label>
                        <Input
                          placeholder="Meme Text"
                          variant="filled"
                          _focus={{ bg: "white" }}
                          fontFamily={"Montserrat"}
                          fontWeight="600"
                          margin={"0rem 0rem 0rem 0rem"}
                        />
                        <label className="form-label">
                          4. INPUT YOUR LOWER MEME TEXT
                        </label>
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
                </TabPanel>
                <TabPanel>
                  <Box className="form-widget">
                    <form onSubmit={() => {}}>
                      <label className="form-label2">1. CHOOSE AN NFT</label>
                      <div>
                        <UpdatedGallery
                          nfts={owned_NFTs}
                          parentCallback={handleAINFTCallback}
                        />
                        <label className="form-label">
                          2. SELECT A MEME BACKGROUND
                        </label>
                        <AIBackgroundTemplates />
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
                        <label className="form-label">
                          4. DESCRIBE YOUR MEME
                        </label>
                        <Input
                          placeholder="Meme Description"
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
                </TabPanel>
                <TabPanel>
                <Box style={{maxWidth: "30rem"}}>
                <Editor
                    backgroundImageURL="https://media.wbur.org/wp/2021/10/Disaster-Girl-OG-pic-1000x666.jpeg"
                    pfpImageURL="https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0"
                    bottomText="MemeBottom"
                    topText="Meme"
                  />
                </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </div>
      <div className="rightcolumn">
        <Feed />
      </div>
    </div>
  );
}

export default Generator;
