import {
  useDisclosure,
  Button,
  Box,
  GridItem,
  SimpleGrid,
  Image, 
  IconButton
} from "@chakra-ui/react";
import { useState } from "react";
import BackgroundTemplate from "./BackgroundTemplate.js";

const templates_list = [
  {
    name: "Distracted Boyfriend",
    image:
      "https://media.wired.com/photos/59a459d3b345f64511c5e3d4/master/pass/MemeLoveTriangle_297886754.jpg",
  },
  {
    name: "Drake Hotline Bling",
    image: "https://imgflip.com/s/meme/Drake-Hotline-Bling.jpg",
  },
  {
    name: "Disaster Girl",
    image:
      "https://media.wbur.org/wp/2021/10/Disaster-Girl-OG-pic-1000x666.jpeg",
  },
  {
    name: "Pepe the Frog Sad",
    image: "https://i.imgflip.com/lntct.jpg?a464640",
  },
  {
    name: "Two Buttons",
    image:
      "https://www.meme-arsenal.com/memes/cdb809c01916b2f13fd607bdc756f224.jpg",
  },
  {
    name: "X, X Everywhere",
    image: "https://imgflip.com/s/meme/X-X-Everywhere.jpg",
  },
  { name: "Elon Smoking Weed", image: "https://i.imgflip.com/2hwfsc.jpg" },
  {
    name: "Always Has Been",
    image: "https://imgflip.com/s/meme/Always-Has-Been.png",
  },
  {
    name: "Ancient Aliens",
    image:
      "https://images.squarespace-cdn.com/content/v1/5893faa1ebbd1a8f680352a1/1531348702940-P6MXBXMNCQAGB5K2KXT7/ORIGINAL.jpg?format=1500w",
  },
  {
    name: "Buff Doge vs Cheems",
    image: "https://imgflip.com/s/meme/Buff-Doge-vs-Cheems.png",
  },
];



export default function BackgroundTemplates() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ selectedNFT, setSelectedNFT ] = useState('');
  const { seletedIndex, setSelectedIndex } = useState(null);

  function handleIt(currentName) {
    setSelectedNFT(currentName);
    return (currentName);
  }



  // use on click in each grid item
  return (
    <Box>
      <Box>
        <SimpleGrid columns={5} spacingX="20px" spacingY="20px">
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
                bg={selectedNFT === background.name ? "#FFD307" : ""}
                _hover={{ bg: selectedNFT === background.name ? "#FFD307" : "", cursor: 'pointer'}}
                onClick={() => {handleIt(background.name)}}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
