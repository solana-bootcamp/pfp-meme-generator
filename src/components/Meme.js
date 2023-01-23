import { Image, Box} from "@chakra-ui/react";

export default function Meme({ memecreator, memeimage }) {
  const image_URL = memeimage;
  const creator = memecreator;
  return (
    <Box _hover={{cursor: "pointer"}} style={{background: "#ed1c24", padding: "10px", margin: "10px", borderRadius: "10px"}}>
      <Image src={image_URL} alt={creator} borderRadius={"10px"} width={"12rem"}/>
    </Box>
  );
}
