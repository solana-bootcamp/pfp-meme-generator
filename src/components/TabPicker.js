import Editor from "../components/Editor";
import UpdatedGallery from "../components/UpdatedGallery";
import OGViewResult from "../pages/OGViewResult";
import AIViewResult from "../pages/AIViewResult";
import BackgroundTemplates from "../components/BackgroundTemplates";
import "../styles/Generator.css";
import { Input, ChakraProvider, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import callChatGPT from "../utils/callChatGPT";


export default function TabPicker({
  owned_NFTs,
  isOGActive,
  isAIActive,
  isCustomActive,
}) {
 
  const [selectedTabNFTImage, setSelectedTabNFTIamge] = useState("");
  const [selectedTabNFTBackgroundImage, setSelectedTabNFTBackgroundImage] =
    useState("");
  const [ogTopText, setOgTopText] = useState("");
  const [ogBottomText, setOgBottomText] = useState("");
  const [aiPrompt, setAIPrompt] = useState("");
  const [aiText, setAIText] = useState("");


  const handleTopChange = (event) => setOgTopText(event.target.value);
  const handleBottomChange = (event) => setOgBottomText(event.target.value);
  const handleAIChange = (event) => setAIPrompt(event.target.value);

  const handleOGCallback = (childData) => {
    setSelectedTabNFTIamge(childData);
    console.log("Called OG Callback!");
  };

  const handleAICallback = (childData) => {
    setSelectedTabNFTIamge(childData);
    console.log("Called AI Callback!");
  };

  const handleOGBackgroundCallback = (childData) => {
    setSelectedTabNFTBackgroundImage(childData);
    console.log("Called OG Background Callback!");
  };

  function passToEditor() {

  }

  async function getAIText(prompt) {
    const text = await callChatGPT(prompt);
    setAIText(text);
  }


  if (isOGActive) {
    return (
      <div className="tab-picker-body">
        <div className="form-widget">
          <form onSubmit={() => {}}>
            <label className="form-label2">1. CHOOSE AN NFT</label>
            <div>
              <UpdatedGallery
                ownednfts={owned_NFTs}
                parentCallback={handleOGCallback}
              />
              <label className="form-label">2. SELECT A MEME BACKGROUND</label>
              <BackgroundTemplates
                backgroundCallback={handleOGBackgroundCallback}
              />
              <label className="form-label">3. INPUT YOUR TOP MEME TEXT</label>
              <ChakraProvider>
                <Input
                  placeholder="Top Meme Text"
                  variant="filled"
                  _focus={{ bg: "white" }}
                  fontFamily="Montserrat"
                  fontWeight="600"
                  margin="0rem 0rem 0rem 0rem"
                  value={ogTopText || ""}
                  onChange={handleTopChange}
                />
              </ChakraProvider>

              <label className="form-label">
                4. INPUT YOUR BOTTOM MEME TEXT
              </label>
              <ChakraProvider>
                <Input
                  placeholder="Bottom Meme Text"
                  variant="filled"
                  _focus={{ bg: "white" }}
                  fontFamily={"Montserrat"}
                  fontWeight="600"
                  margin="0rem 0rem 0.25rem 0rem"
                  value={ogBottomText || ""}
                  onChange={handleBottomChange}
                />
              </ChakraProvider>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <ChakraProvider>
                <Button
                  fontFamily="Montserrat"
                  w="100%"
                  fontSize="16px"
                  fontWeight="800"
                  bg="#FFD307"
                  color="black"
                  padding="0rem 4rem 0rem 4rem"
                  margin="2rem 0rem 0rem 0rem"
                  onClick={passToEditor}
                  disabled={true}
                  _hover={{ bg: "#000000", color: "#FFFFFF" }}
                  style={{ bg: "#FFD307" }}
                >
                  GENERATE
                </Button>
              </ChakraProvider>

              {/* <OGViewResult
                selectedTabNFTImage={selectedTabNFTImage["url"]}
                selectedTabNFTBackgroundImage={selectedTabNFTBackgroundImage}
                topText={ogTopText}
                bottomText={ogBottomText}
                filled={true}
              /> */}
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (isAIActive) {
    return (
      <div className="tab-picker-body">
        <div className="form-widget">
          <form onSubmit={() => {}}>
            <label className="form-label2">1. CHOOSE AN NFT</label>
            <UpdatedGallery
              ownednfts={owned_NFTs}
              parentCallback={handleAICallback}
            />
            <label className="form-label">2. SELECT A MEME BACKGROUND</label>
            <BackgroundTemplates />
            <label className="form-label">3. DESCRIBE YOUR MEME</label>
            <ChakraProvider>
              <Input
                placeholder="Meme Description"
                variant="filled"
                _focus={{ bg: "white" }}
                fontFamily={"Montserrat"}
                fontWeight="600"
                margin="0rem 0rem 0.25rem 0rem"
                value={aiPrompt || ""}
                onChange={handleAIChange}
              />
            </ChakraProvider>

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <ChakraProvider>
                <Button
                  fontFamily="Montserrat"
                  w="100%"
                  fontSize="16px"
                  fontWeight="800"
                  bg="#FFD307"
                  color="black"
                  padding="0rem 4rem 0rem 4rem"
                  margin="2rem 0rem 0rem 0rem"
                  onClick={passToEditor}
                  disabled={true}
                  _hover={{ bg: "#000000", color: "#FFFFFF" }}
                  style={{ bg: "#FFD307" }}
                >
                  GENERATE
                </Button>
              </ChakraProvider>

              {/* <AIViewResult 
                selectedTabNFTImage={selectedTabNFTImage["url"]}
                selectedTabNFTBackgroundImage={selectedTabNFTBackgroundImage}
                aiPrompt={aiPrompt}
                filled={true}
              /> */}
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="tab-picker-body">
      <div className="tchooser">
        <label className="form-label4">1. SELECT A MEME BACKGROUND</label>
        <BackgroundTemplates />
      </div>
      <div>
        <label className="form-label3">2. EDIT YOUR MEME</label>
        <Editor
          backgroundImageURL="https://media.wbur.org/wp/2021/10/Disaster-Girl-OG-pic-1000x666.jpeg"
          pfpImageURL="https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0"
          bottomText="MemeBottom"
          topText="Meme"
          isInvisible={false}
        />
      </div>
    </div>
  );
}
