import { Image } from "@chakra-ui/react";



export default function NFT(props) {
    const image_URL = props.url;
    const contract_address = props.address;
    const title = props.title
    return (
            <Image src = {image_URL} alt= {title}/>
    )
} 








