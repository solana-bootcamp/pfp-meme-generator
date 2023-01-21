import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "../styles/Generator.css";
import { Box, Button, Select, Input, ChakraProvider } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import UpdatedGallery from "../components/UpdatedGallery";
import { useNavigate } from "react-router-dom";
import Feed from "./Feed";
import ViewResult from "./ViewResult";
import BackgroundTemplates from "../components/BackgroundTemplates";
import AIBackgroundTemplates from "../components/AIBackgroundTemplates";
import get_nfts from "../utils/get_nfts";
import createMeme from "../utils/createMeme";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Editor from "../components/Editor";
import { toBeEmptyDOMElement } from "@testing-library/jest-dom/dist/matchers";

function Generator() {
  const navigate = useNavigate();

  const [owned_NFTs, set_owned_NFTs] = useState("");
  const [selectedNFTImage, setSelectedNFTImage] = useState("");
  // const [selectedNFTStyle, setSelectedNFTStyle] = useState("");
  const [selectedNFTBackgroundImage, setSelectedNFTBackgroundImage] = useState("");
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memeURL, setMemeURL] = useState("");

  const [loading, setLoading] = useState(false);

  const [memesList, setMemesList] = useState([]);


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
          // let testaddress = "Ee6rCpsPJkEQZbNMv3itLP7s71rRSyWedYHQphn7MwKn"
          setCurrentWallet(user.walletPublicKey);
          
          if (owned_NFTs === "") {
            let nfts = await get_nfts(user.walletPublicKey);
            set_owned_NFTs(nfts);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetch_NFTs();
      console.log(owned_NFTs);
    }


    console.log(
      "selected: " +
        selectedNFTImage
    );
  }, [user, walletConnector, selectedNFTImage, owned_NFTs]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleOGNFTCallback = (childData) => {
    setSelectedNFTImage(childData["url"]);
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

  const handleOGGenerate = async () => {
    if ((selectedNFTImage !== "")) {
      const createdmeme = await createMeme(selectedNFTImage, topText, bottomText);
      console.log("Called Create MEME!!!!!!!!!");
      setMemeURL(JSON.stringify(createdmeme));
      // console.log('This is meme: ' + JSON.stringify(createdmeme));
      // console.log('This is meme url: ' + memeURL);

      memesList.push(createdmeme);
    }
  };




  return (
    <div>
      <div className="leftcolumn">
        <Box>
          <p className="title">MEME GENERATOR</p>
          <Box className="Generator-body">
            <Tabs isLazy isFitted variant="soft-rounded">
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
                    <form onSubmit={handleOGGenerate}>
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
                          value={topText || ""}
                          onChange={(e) => setTopText(e.target.value)}
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
                          value={bottomText || ""}
                          onChange={(e) => setBottomText(e.target.value)}
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
                        {/* <ViewResult
                        parentCallback={handleOGGenerate}
                        // selectedNFTBackgroundImage={selectedNFTBackgroundImage}
                        // topText={topText}
                        // bottomText={bottomText} 
                        /> */}

                        <Button fontFamily="Montserrat" w="100%" fontSize="16px" fontWeight="800" bg="#FFD307" color='black' padding="0rem 4rem 0rem 4rem" onClick={handleOGGenerate} _hover={{bg: '#000000', color: '#FFFFFF'}} style={{bg: '#FFD307'}}>GENERATE</Button>

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
                        <AIBackgroundTemplates
                          parentCallback={handleAIBackgroundCallback}
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
                  <Box style={{ maxWidth: "30rem" }}>
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
        <Feed
        listofmemes={memesList} />
      </div>
    </div>
  );
}

export default Generator;
