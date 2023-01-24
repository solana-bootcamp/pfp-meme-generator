import Editor from "../components/Editor";
import UpdatedGallery from "../components/UpdatedGallery";
import OGViewResult from "../pages/OGViewResult";
import AIViewResult from "../pages/AIViewResult";
import BackgroundTemplates from "../components/BackgroundTemplates";
import "../styles/Generator.css";
import { Input, ChakraProvider, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import callChatGPT from "../utils/callChatGPT";
import createMeme from "../utils/createMeme";
import NFTEditor from "../components/NFTEditor";


export default function TabPicker({
  owned_NFTs,
  isOGActive,
  isAIActive,
  isCustomActive,
  pubkey,
}) {
  const [selectedTabNFTImage, setSelectedTabNFTImage] = useState("");
  const [selectedTabNFT, setSelectedTabNFT] = useState("");
  const [selectedTabNFTBackgroundImage, setSelectedTabNFTBackgroundImage] =
    useState(
      "https://media.wired.com/photos/59a459d3b345f64511c5e3d4/master/pass/MemeLoveTriangle_297886754.jpg"
    );
  const [ogTopText, setOgTopText] = useState("");
  const [ogBottomText, setOgBottomText] = useState("");
  const [aiPrompt, setAIPrompt] = useState("");
  const [aiText, setAIText] = useState("");
  const [editorVisibility, setEditorVisibility] = useState(false);

  const [selectedCustomNFTImage, setSelectedCustomNFTImage] = useState("");
  const [customVisibility, setCustomVisibility] = useState(false);

  const onSave = (data) => {
    console.log('this is d: ' + data);
    console.log('this is pk: ' + pubkey);
    createMeme(pubkey, data);
  }

  const handleTopChange = (event) => {
    setOgTopText(event.target.value);
    setEditorVisibility(false);
  };
  const handleBottomChange = (event) => {
    setOgBottomText(event.target.value);
    setEditorVisibility(false);
  };
  const handleAIChange = (event) => {
    setAIPrompt(event.target.value);
    setEditorVisibility(false);
  };

  const handleOGCallback = (childData) => {
    setSelectedTabNFT(childData);
    setSelectedTabNFTImage(childData["url"]);
    setEditorVisibility(false);
    console.log("Called OG Callback!");
  };

  const handleAICallback = (childData) => {
    setSelectedTabNFT(childData);
    setSelectedTabNFTImage(childData["url"]);
    setEditorVisibility(false);
    console.log("Called AI Callback!");
  };

  const handleCustomCallback = (childData) => {
    setSelectedCustomNFTImage(childData["url"]);
    setCustomVisibility(true);
  }

  const handleOGBackgroundCallback = (childData) => {
    setSelectedTabNFTBackgroundImage(childData);
    setEditorVisibility(false);
    console.log("Called OG Background Callback!");
  };

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
              {/* <OGViewResult
                selectedTabNFTImage={selectedTabNFTImage["url"]}
                selectedTabNFTBackgroundImage={selectedTabNFTBackgroundImage}
                topText={ogTopText}
                bottomText={ogBottomText}
                filled={true}
              /> */}
            
          </form>
        </div>
        <div className="editor-div">
        <label className="form-label3">5. EDIT YOUR MEME</label>

        {editorVisibility === false ? (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >                <ChakraProvider>
                  <Button
                    fontFamily="Montserrat"
                    w="100%"
                    fontSize="16px"
                    fontWeight="800"
                    bg="#FFD307"
                    color="black"
                    padding="0rem 4rem 0rem 4rem"
                    margin="2rem 0rem 0rem 0rem"
                    onClick={() => {
                      if (
                        selectedTabNFT == "" ||
                        selectedTabNFTBackgroundImage == ""
                      ) {
                        alert("NFT not selected");
                      } else {
                        setEditorVisibility(true);
                      }
                    }}
                    _hover={{ bg: "#000000", color: "#FFFFFF" }}
                    style={{ bg: "#FFD307" }}
                  >
                    GENERATE
                  </Button>
                </ChakraProvider>
              </div>
            ) : (
                <Editor
                  backgroundImageURL={selectedTabNFTBackgroundImage}
                  pfpImageURL={selectedTabNFTImage}
                  bottomText={ogBottomText}
                  topText={ogTopText}
                  isInvisible={false}
                  onNFTSave={onSave}
                />
            )}
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
                  onClick={() => {}}
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

  //setEditorVisibility(false);
  return (
    <div className="tab-picker-body">
      <div className="chooser1">
        <label className="form-label3">1. CHOOSE AN NFT</label>
        <UpdatedGallery
          ownednfts={owned_NFTs}
          parentCallback={handleCustomCallback}
        />
      </div>
      {/* <div className="tchooser">
        <label className="form-label4">2. UPLOAD A MEME BACKGROUND</label>
        <BackgroundTemplates backgroundCallback={handleOGBackgroundCallback}/>
      </div> */}
      <div>
        {(customVisibility) ? (
          <>
            <label className="form-label3">2. EDIT YOUR MEME</label>
            <NFTEditor
              backgroundImageURL={selectedCustomNFTImage}
              onNFTSave={onSave}
            />
          </>
        ) : (
          <></>
        )
        }
      </div>
    </div>
  );
}
