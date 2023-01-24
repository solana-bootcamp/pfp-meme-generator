import Editor from "../components/Editor";
import UpdatedGallery from "../components/UpdatedGallery";
import OGViewResult from "../pages/OGViewResult";
import AIViewResult from "../pages/AIViewResult";
import BackgroundTemplates from "../components/BackgroundTemplates";
import "../styles/Generator.css";
import { Input, ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function TabPicker({
  handleNFTCallback,
  owned_NFTs,
  isOGActive,
  isAIActive,
  isCustomActive,
}) {
  // console.log("This is callback: " + handleNFTCallback);
  // console.log("This is ownednfts: " + owned_NFTs);
  // console.log("This is og status: " + isOGActive);
  // console.log("This is ai status: " + isAIActive);
  // console.log("This is custom status: " + isCustomActive);
  const [selectedTabNFTImage, setSelectedTabNFTIamge] = useState("");
  const [selectedTabNFTBackgroundImage, setSelectedTabNFTBackgroundImage] =
    useState("");
  const [ogTopText, setOgTopText] = useState("");
  const [ogBottomText, setOgBottomText] = useState("");
  const [aiPrompt, setAIPrompt] = useState("");


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

  

  if (isOGActive) {
    return (
      <div className="tab-picker-body">
        <div className="form-widget">
          <form onSubmit={() => {}}>
            <label className="form-label2">1. CHOOSE AN NFT</label>
            <div>
              <UpdatedGallery
                ownednfts={owned_NFTs}
                parentCallback={handleNFTCallback}
                secondCallback={handleOGCallback}
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
              <OGViewResult
                selectedTabNFTImage={selectedTabNFTImage["url"]}
                selectedTabNFTBackgroundImage={selectedTabNFTBackgroundImage}
                topText={ogTopText}
                bottomText={ogBottomText}
                filled={true}
              />
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
              parentCallback={handleNFTCallback}
              secondCallback={handleOGCallback}
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
              <AIViewResult 
                selectedTabNFTImage={selectedTabNFTImage["url"]}
                selectedTabNFTBackgroundImage={selectedTabNFTBackgroundImage}
                aiPrompt={aiPrompt}
                filled={true}
              />
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
