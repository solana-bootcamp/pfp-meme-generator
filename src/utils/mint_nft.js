import { Metaplex, bundlrStorage } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";

SECRET_KEY = process.env.wareta_wallet_sk;
const wareta_wallet = Keypair.fromSecretKey(SECRET_KEY);

const connection = new Connection(clusterApiUrl("mainnet-beta"));


import { BigNumber } from "ethers";


export default async function mint_nft(title, image_url, orignal_nft_title, wallet_connector) {

    const user_wallet = await wallet_connector.getSigner();
    
    const metaplex = new Metaplex(connection).use(bundlrStorage()).use(user_wallet); 

    const { uri } = await metaplex.nfts().uploadMetadata({
        name: title,
        description: "Memed the NFT: " + orignal_nft_title,
        image: image_url,
    });

    const { nft } = await metaplex.nfts().create({
        uri: uri,
        name: "My NFT",
        sellerFeeBasisPoints: 0,
        updateAuthority: wareta_wallet,
        tokenOwner: minter_wallet_address,
        maxSupply: BigNumber.from(1)
    });

    console.log("MINTED NFT: " + nft);
    return nft;
}