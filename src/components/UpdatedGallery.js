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
import NFT from "./Nft.js";

export default function UpdatedGallery(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ selectedNFT, setSelectedNFT ] = useState("");
  const [ seletedIndex, setSelectedIndex ] = useState(-1);
  const owned_NFTS = props.nfts;
  

  function handleClick(nft_to_set, index_to_set) {
    setSelectedNFT({
      title: nft_to_set.title,
      url: nft_to_set.image_url,
      address: nft_to_set.mint_address
    });
    setSelectedIndex(index_to_set);
  }

  function handleClose() {
    props.parentCallback(selectedNFT);
    onClose();
  }

  function fillGallery() {

    return owned_NFTS.map((nft, index) => {   
      const nft_to_insert = <NFT title= {nft.title} url={nft.image_url} address={nft.mint_address} />;
      return (
        <GridItem w="100%" h="auto" 
        key={index} 
        bg= {seletedIndex === index ? "#FFD307" : ""} 
        p= "5px" _hover= {{ bg: seletedIndex !== index ? "#FFD307" : "", cursor: 'pointer'}} 
        onClick= {() => {handleClick(nft, index)}} >
          { nft_to_insert }
        </GridItem>
      );
    });
  }

  // use on click in each grid item
  return (
    <>
      <Button fontFamily={"Montserrat"} fontWeight="800" fontSize='14px' padding='0rem 4rem 0rem 4rem' onClick={onOpen}>
        SELECT
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {handleClose()}}
        bg="#FA4303"
        scrollBehavior="inside"
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent style={{borderRadius: '30px', padding: '0rem 0rem 0rem 0.5rem'}}>
          <ModalHeader style={{ fontFamily: "Montserrat", fontSize: "24px", fontWeight: "800"}}>SELECT YOUR NFT</ModalHeader>
          <ModalCloseButton style={{margin: '0.5rem 0.5rem 0rem 0rem'}}/>
          <ModalBody>
            <SimpleGrid minChildWidth="120px" spacing="20px">
              {/* <GridItem w='100%' h='auto' bg='blue.500'>
                <NFT title ='Degen Ape' url = 'https://static.coincodex.com/en/resources/images//admin/news/solana-rallies-to-al/degenape-example.png' address = '1'/>
            </GridItem> */}
              {owned_NFTS.length === 0
                ? "You have no NFTs in your wallet!"
                : fillGallery() 
                }
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="#FFD307"
              color={"black"}
              m='0rem 0rem 0.25rem 0rem'
              onClick={() => {handleClose()}}
              _hover={{ bg: "black", color: "white" }}
              fontFamily={"Montserrat"}
              fontWeight="800"
              fontSize="14px"
              disabled={selectedNFT == null}
            >
              SELECT
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
