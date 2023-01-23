import Editor from "../components/Editor";
import UpdatedGallery from "../components/UpdatedGallery";
import ViewResult from "../pages/ViewResult";
import BackgroundTemplates from "../components/BackgroundTemplates";
import "../styles/Generator.css";

export default function TabPicker({
  handleNFTCallback,
  owned_NFTs,
  isOGActive,
  isAIActive,
  isCustomActive,
}) {
  console.log("This is callback: " + handleNFTCallback);
  console.log("This is ownednfts: " + owned_NFTs);
  console.log("This is og status: " + isOGActive);
  console.log("This is ai status: " + isAIActive);
  console.log("This is custom status: " + isCustomActive);

  if (isOGActive) {
    return (
      <div className="tab-picker-body">
        <div>
          <form onSubmit={() => {}}>
            <label className="form-label2">1. CHOOSE AN NFT</label>
            <div>
              <UpdatedGallery
                nfts={owned_NFTs}
                parentCallback={handleNFTCallback}
              />
              <label className="form-label">2. SELECT A MEME BACKGROUND</label>
              <BackgroundTemplates />
              <label className="form-label">
                3. INPUT YOUR UPPER MEME TEXT
              </label>
              <input
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
              <input
                placeholder="Meme Text"
                variant="filled"
                _focus={{ bg: "white" }}
                fontFamily={"Montserrat"}
                fontWeight="600"
                margin={"0rem 0rem 2rem 0rem"}
              />
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <ViewResult />
            </div>
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
              nfts={owned_NFTs}
              parentCallback={handleNFTCallback}
            />
            <label className="form-label">2. SELECT A MEME BACKGROUND</label>
            <BackgroundTemplates />
            <label className="form-label">4. DESCRIBE YOUR MEME</label>
            <input
              placeholder="Meme Description"
              variant="filled"
              _focus={{ bg: "white" }}
              fontFamily={"Montserrat"}
              fontWeight="600"
              margin={"0rem 0rem 2rem 0rem"}
            />
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <ViewResult />
            </div>
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
        </div>
      </div>
    );
  }

  return (
    <div className="tab-picker-body">
      <div>
        <div className="tchooser">
          <label className="form-label4">SELECT A MEME BACKGROUND</label>
          <BackgroundTemplates />
        </div>
        <div>
          <label className="form-label3">EDIT YOUR MEME</label>
          <Editor
            backgroundImageURL="https://media.wbur.org/wp/2021/10/Disaster-Girl-OG-pic-1000x666.jpeg"
            pfpImageURL="https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0"
            bottomText="MemeBottom"
            topText="Meme"
            isInvisible={false}
          />
        </div>
      </div>
    </div>
  );
}
