import { Image, IconButton } from "@chakra-ui/react";

export default function BackgroundTemplate(props) {
  const image_URL = props.url;
  const title = props.title;
  return (
    <IconButton
      aria-label="Search database"
      icon={<Image src={image_URL} alt={title} w='50px' h='50px'/>}
      w="60px" h="60px" 
    />
  );
}
