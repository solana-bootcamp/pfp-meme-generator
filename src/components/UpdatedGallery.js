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
  } from '@chakra-ui/react'


export default function UpdatedGallery() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button fontFamily={"Montserrat"} fontWeight="600" onClick={onOpen}>Select NFTs</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} bg='#FA4303'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>NFTs go here</p>
            </ModalBody>
  
            <ModalFooter>
              <Button bg='#FFD307' color={"black"} mr={3} onClick={onClose} _hover={{bg: "black", color: "white"}} fontFamily={"Montserrat"} fontWeight="600">
                Select
              </Button>
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }