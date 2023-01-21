import { Box, Image } from "@chakra-ui/react";
import "../styles/Feed.css";

function Feed(props) {

  const list = props.listofmemes;

  if (list === []) {
    return (
      <Box className="Feed-body">
        <p className="pf">DA MEMES</p>
          <p className="pff">No memes have been created</p>
      </Box>
    );
  }

    return (
      <Box className="Feed-body">
        <p className="pf">DA MEMES</p>
        {
          list.map((image, index) => {
            return (
              <Image key={index} src={image.toString()}/>
            );
        })
        }

      </Box>
    );



}

export default Feed;
