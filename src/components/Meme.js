import { Image, Box, GridItem} from "@chakra-ui/react";

export default function Meme({ memecreator, memeimage }) {
  const image_URL = memeimage;
  const creator = memecreator;
  return (
    <GridItem _hover={{cursor: "pointer"}} background={"#ed1c24"} padding="10px" margin="10px" borderRadius="10px" display={"flex"} justifyContent={"center"}>
          <Image src={image_URL} alt={creator} borderRadius={"10px"}/>
    </GridItem>
  );
}
