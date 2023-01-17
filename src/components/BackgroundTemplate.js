import { Image, IconButton } from "@chakra-ui/react";

export default function BackgroundTemplate(props) {
  const image_URL = props.url;
  const title = props.title;
  const key2 = props.key2;
  return (
    <IconButton
      aria-label="Search database"
      icon={<Image src={image_URL} alt={title} w='70px' h='70px' key={title}/>}
      w="80px" h="80px" 
      key={key2}
    />
  );
}
