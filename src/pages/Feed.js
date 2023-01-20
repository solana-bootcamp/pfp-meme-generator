import { Box } from "@chakra-ui/react";
import "../styles/Feed.css";
import Editor from "../components/Editor";

function Feed() {
  return (
    <Box className="Feed-body">
      <p className="pf">DA MEMES</p>
      {/* <p className="pff">No memes have been created</p> */}
      <Editor 
        backgroundImageURL="https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg" 
        pfpImageURL="https://www.reuters.com/resizer/NRuMc4-qhlqkYuAlIBGuwHdOrTc=/505x631/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg" 
        bottomText="MemeBottom" 
        topText="Meme"
      />
    </Box>
  );
}

export default Feed;
