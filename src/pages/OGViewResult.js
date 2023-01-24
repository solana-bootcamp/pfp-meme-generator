import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "../styles/ViewResult.css";
import { Box, Button, ButtonGroup, ChakraProvider } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import Edit from "./Edit";
import { Stage, Layer, Rect, Circle } from 'react-konva';


function OGViewResult({ filled, selectedTabNFTImage, selectedTabNFTBackgroundImage, topText, bottomText}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleSave() {}

  function handleFinish() {
    onClose();
  }

  function handleOpen() {
    onOpen()
  }

  return (
    <ChakraProvider>
      <Button
        fontFamily="Montserrat"
        w="100%"
        fontSize="16px"
        fontWeight="800"
        bg="#FFD307"
        color="black"
        padding="0rem 4rem 0rem 4rem"
        margin="2rem 0rem 0rem 0rem"
        onClick={handleOpen}
        disabled={filled === true}
        _hover={{ bg: "#000000", color: "#FFFFFF" }}
        style={{ bg: "#FFD307" }}
      >
        GENERATE
      </Button>

      <Modal isOpen={isOpen} bg="#FA4303" scrollBehavior="inside" size={"xl"}>
        <ModalOverlay />
        <ModalContent style={{ borderRadius: "30px" }}>
          <ModalHeader></ModalHeader>
          <ModalBody>
          <Stage width={window.innerWidth} height={window.innerHeight}>
        
      <Layer>
      <Image src={selectedTabNFTImage} alt={"NFT Image"} width={"30rem"}/>
      <Image src={selectedTabNFTBackgroundImage} alt={"Background Image"} width={"12rem"}/>
      <p>{topText}</p>
      <p>{bottomText}</p>


        {/* <Rect width={50} height={50} fill="red" />
        <Circle x={200} y={200} stroke="black" radius={50} /> */}
      </Layer>
    </Stage>
          </ModalBody>

          <ModalFooter>
            {/* <Button bg='#FFD307' color={"black"} mr={3} onClick={onClose} _hover={{bg: "black", color: "white"}} fontFamily={"Montserrat"} fontWeight="600" >
            Select
          </Button> */}
            {/* <Button variant='ghost'>Secondary Action</Button> */}
            <Box className="button-group">
              <ButtonGroup>
                <Edit />
                <Button
                  fontFamily={"Montserrat"}
                  fontWeight="800"
                  fontSize="14px"
                  bg="#FFD307"
                  color="#000000"
                  _hover={{ bg: "#f4c907" }}
                  onClick={() => {
                    handleSave();
                  }}
                >
                  SAVE
                </Button>
                <Button
                  fontFamily={"Montserrat"}
                  fontWeight="800"
                  fontSize="14px"
                  bg="#000000"
                  color="#FFFFFF"
                  _hover={{ bg: "#2f3238" }}
                  _focus={{ bg: "#2f3238" }}
                  onClick={() => {
                    handleFinish();
                  }}
                >
                  FINISH
                </Button>
              </ButtonGroup>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default OGViewResult;
