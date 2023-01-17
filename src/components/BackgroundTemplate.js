import { Image, IconButton } from "@chakra-ui/react";
import { useState } from "react";

export default function BackgroundTemplate({ url2, title2, key3 }) {
  const image_URL = url2;
  const title = title2;
  const key2 = key3;

  const { isSelected, setIsSelected } = useState();

  function handleClick() {
    setIsSelected("true");
    console.log('The button is ' + isSelected);
  }

  return (
    <IconButton
      aria-label="Search database"
      icon={<Image src={image_URL} alt={title} w='70px' h='70px' key={title}/>}
      w="80px" h="80px" 
      key={key2}
      bg={isSelected !== "false" ? "red" : "green" }
      onClick={handleClick()}
    />
  );
}
