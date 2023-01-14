import { Image, IconButton } from "@chakra-ui/react";

export default function BackgroundTemplate(props) {
  const image_URL = props.url;
  const title = props.title;
  return (
    <IconButton
      aria-label="Search database"
      icon={<Image src={image_URL} alt={title} w='70px' h='70px'/>}
      w="80px" h="80px" 
    />
  );
}
