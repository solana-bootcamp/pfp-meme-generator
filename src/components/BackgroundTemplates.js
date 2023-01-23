import {
  useDisclosure,
  Button,
  Box,
  GridItem,
  SimpleGrid,
  Image,
  IconButton,
  ChakraProvider,
} from "@chakra-ui/react";
import { useState } from "react";



export default function BackgroundTemplates(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBackground, setSelectedBackground] = useState(
    "Distracted Boyfriend"
  );
  const [seletedIndex, setSelectedIndex] = useState(null);

  function handleIt(currentName) {
    setSelectedBackground(currentName);
    props.handleOGBackgroundCallback(currentName)
    return currentName;
  }

  // use on click in each grid item
  return (
    <ChakraProvider>
    <SimpleGrid columns={5} width="31rem" spacingY="1rem">
          {templates_list.map((background, index) => {
            return (
              <IconButton
                aria-label={background.name}
                icon={
                  <Image
                    src={background.image}
                    alt={background.name}
                    w="70px"
                    h="70px"
                    key={background.name}
                  />
                }
                w="80px"
                h="80px"
                key={index}
                bg={selectedBackground === background.name ? "#FFD307" : ""}
                _hover={{
                  bg: selectedBackground === background.name ? "#FFD307" : "",
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleIt(background.name);
                }}
              />
            );
          })}
        </SimpleGrid>
    </ChakraProvider>
  );
}
