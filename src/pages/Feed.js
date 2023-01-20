import { Box } from "@chakra-ui/react";
import "../styles/Feed.css";
import Editor from "../components/Editor";

function Feed() {
  return (
    <Box className="Feed-body">
      <p className="pf">DA MEMES</p>
      <p className="pff">No memes have been created</p>
      <Editor
        backgroundImageURL="https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
        pfpImageURL="https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0"
        bottomText="MemeBottom" 
        topText="Meme"
      />
    </Box>
  );
}

export default Feed;
