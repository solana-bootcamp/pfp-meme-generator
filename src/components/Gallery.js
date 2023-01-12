
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'


function Gallery(props) {

    let nftMetaData;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: '75e4e650-bda5-47f8-8b9c-c7a2d93f9e93'
        }
      };
      
      fetch('https://api.nftport.xyz/v0/solana/nfts/okay-bears-3fb117dd?page_number=1&page_size=50&include=metadata&refresh_metadata=false', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .then 
        .catch(err => console.error(err));
}





