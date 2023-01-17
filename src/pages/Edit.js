import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";

export default function UpdatedGallery(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // use on click in each grid item
  return (
    <>
      <Button
        fontFamily={"Montserrat"}
        fontWeight="800"
        fontSize="14px"
        onClick={onOpen}
      >
        EDIT
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        bg="#FA4303"
        scrollBehavior="inside"
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent style={{borderRadius: '30px'}}>
          <ModalHeader>Edit your meme</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>editor goes here</p>
          </ModalBody>

          <ModalFooter>
            {/* <Button bg='#FFD307' color={"black"} mr={3} onClick={onClose} _hover={{bg: "black", color: "white"}} fontFamily={"Montserrat"} fontWeight="600" >
              Select
            </Button> */}
            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
