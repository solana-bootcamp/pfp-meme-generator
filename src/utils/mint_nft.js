import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("mainnet-beta"));
const metaplex = new Metaplex(connection).use(supabase); // this might be a problem

import { BigNumber } from "ethers";

import { supabase } from "../supabaseClient";

export default async function mint_nft(title, image_url, orignal_nft_title, minter_wallet_address) {
    // first we upload metadata to supabase

    const { uri } = await metaplex.nfts().uploadMetadata({
        name: title,
        description: "Memed the NFT: " + orignal_nft_title,
        image: image_url,
        tokenOwner: minter_wallet_address,
        maxSupply: BigNumber.from(1),

    });

    const { nft } = await metaplex.nfts().create({
        uri: "",
        name: "My NFT",
        sellerFeeBasisPoints: 500, // Represents 5.00%.
        updateAuthority: 
    });







}