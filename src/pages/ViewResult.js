import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "../styles/ViewResult.css";
import {
  Box,
  Select,
  Input,
  ChakraProvider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import UpdatedGallery from "../components/UpdatedGallery";
import Edit from "./Edit";

function ViewResult({ filled }) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleSave() {

  }

  function handleFinish() {
    onClose();
  }

  return (
        <>
    <Button fontFamily="Montserrat" fontWeight="600" bg="#000000" color='white' onClick={onOpen} disabled={filled === true} _hover={{bg: '#2f3238', cursor: ''}} style={{bg: '#FFD307'}}>GENERATE</Button>

    <Modal isOpen={isOpen} onClose={onClose} bg='#FA4303' scrollBehavior='inside' size={'xl'}>
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
              fontWeight="600"
              bg='#FFD307'
              color='#000000'
              _hover={{bg: ''}}
              onClick={() => {handleSave()}}
            >
              SAVE
            </Button>
            <Button
              fontFamily={"Montserrat"}
              fontWeight="600"
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
  </>
  );
}

export default ViewResult;
