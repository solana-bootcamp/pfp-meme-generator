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

  return (
        <>
    <Button fontFamily="Montserrat" colorScheme='yellow' fontWeight="600" onClick={onOpen} disabled={filled === true}>GENERATE</Button>

    <Modal isOpen={isOpen} onClose={onClose} bg='#FA4303' scrollBehavior='inside' size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>View your result</ModalHeader>
        <ModalCloseButton />
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
              colorScheme="yellow"
              fontWeight="600"
              onClick={() => {}}
            >
              SAVE
            </Button>
            <Button
              fontFamily={"Montserrat"}
              colorScheme="blue"
              fontWeight="600"
              onClick={() => {}}
            >
              POST
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
