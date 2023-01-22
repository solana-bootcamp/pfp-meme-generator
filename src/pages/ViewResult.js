import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "../styles/ViewResult.css";
import {
  Box,
  Button,
  ButtonGroup,
  ChakraProvider,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react'
import Edit from "./Edit";

function ViewResult({ filled }) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleSave() {

  }

  function handleFinish() {
    onClose();
  }

  return (
        <ChakraProvider>
    <Button fontFamily="Montserrat" w="100%" fontSize="16px" fontWeight="800" bg="#FFD307" color='black' padding="0rem 4rem 0rem 4rem" onClick={onOpen} disabled={filled === true} _hover={{bg: '#000000', color: '#FFFFFF'}} style={{bg: '#FFD307'}}>GENERATE</Button>

    <Modal isOpen={isOpen} bg='#FA4303' scrollBehavior='inside' size={'xl'}>
      <ModalOverlay/>
      <ModalContent style={{borderRadius: '30px'}}>
        <ModalHeader></ModalHeader>
        <ModalBody>
        <Box className="View-body">
        <Box>
          <p className="pvr">insert created image here</p>
        </Box>
        
      </Box>
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
              bg='#FFD307'
              color='#000000'
              _hover={{bg: '#f4c907'}}
              onClick={() => {handleSave()}}
            >
              SAVE
            </Button>
            <Button
              fontFamily={"Montserrat"}
              fontWeight="800"
              fontSize="14px"
              bg='#000000'
              color='#FFFFFF'
              _hover={{bg: '#2f3238'}}
              _focus={{ bg: '#2f3238'}}
              onClick={() => {handleFinish()}}
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

export default ViewResult;
