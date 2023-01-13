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
    SimpleGrid
  } from '@chakra-ui/react'
import { useState } from 'react'
import NFT from './Nft.js';





export default function UpdatedGallery(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { selectedNFT, setSelectedNFT } = useState(null);
    const imageMapping = props.imageMapping;
    const { images } = useState(null);

    // use on click in each grid item
    return (
      <>
        <Button fontFamily={"Montserrat"} fontWeight="600" onClick={onOpen}>Select NFTs</Button>

        <Modal isOpen={isOpen} onClose={onClose} bg='#FA4303' scrollBehavior='inside' size={'xl'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Select your NFT</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
  
            <SimpleGrid minChildWidth='120px' spacing='20px'>
              <GridItem w='100%' h='auto' bg='blue.500'>
                  <NFT title ='Degen Ape' url = 'https://static.coincodex.com/en/resources/images//admin/news/solana-rallies-to-al/degenape-example.png' address = '1'/>
              </GridItem>

              <GridItem w='100%' h='auto' bg='blue.500'>
                  <NFT title ='Degen Ape' url = 'https://static.coincodex.com/en/resources/images//admin/news/solana-rallies-to-al/degenape-example.png' address = '1'/>
              </GridItem>

              <GridItem w='100%' h='auto' bg='blue.500'>
                  <NFT title ='Degen Ape' url = 'https://static.coincodex.com/en/resources/images//admin/news/solana-rallies-to-al/degenape-example.png' address = '1'/>
              </GridItem>

              <GridItem w='100%' h='auto' bg='blue.500'>
                  <NFT title ='Degen Ape' url = 'https://static.coincodex.com/en/resources/images//admin/news/solana-rallies-to-al/degenape-example.png' address = '1'/>
              </GridItem>

              <GridItem w='100%' h='auto' bg='blue.500'>
                  <NFT title ='Degen Ape' url = 'https://static.coincodex.com/en/resources/images//admin/news/solana-rallies-to-al/degenape-example.png' address = '1'/>
              </GridItem>

              <GridItem w='100%' h='auto' bg='blue.500'>
                  <NFT title ='Degen Ape' url = 'https://static.coincodex.com/en/resources/images//admin/news/solana-rallies-to-al/degenape-example.png' address = '1'/>
              </GridItem>

              <GridItem w='100%' h='auto' bg='blue.500'>
                  <NFT title ='Degen Ape' url = 'https://static.coincodex.com/en/resources/images//admin/news/solana-rallies-to-al/degenape-example.png' address = '1'/>
              </GridItem>

              <GridItem w='100%' h='auto' bg='blue.500'>
                  <NFT title ='Degen Ape' url = 'https://static.coincodex.com/en/resources/images//admin/news/solana-rallies-to-al/degenape-example.png' address = '1'/>
              </GridItem>

            </SimpleGrid>
            </ModalBody>
  
            <ModalFooter>
              <Button bg='#FFD307' color={"black"} mr={3} onClick={onClose} _hover={{bg: "black", color: "white"}} fontFamily={"Montserrat"} fontWeight="600" disabled = {selectedNFT == null}>
                Select
              </Button>
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }