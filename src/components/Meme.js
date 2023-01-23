import { Image, GridItem } from "@chakra-ui/react";

export default function Meme({ memecreator, memeimage }) {
  const image_URL = memeimage;
  const creator = memecreator;
  return <Image src={image_URL} alt={creator} />;
}
