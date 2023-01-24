import { Metaplex, bundlrStorage } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";

SECRET_KEY = process.env.wareta_wallet_sk;
const wallet = Keypair.fromSecretKey(SECRET_KEY);

const connection = new Connection(clusterApiUrl("mainnet-beta"));
const metaplex = new Metaplex(connection).use(bundlrStorage()).use(wallet); // this might be a problem

import { BigNumber } from "ethers";
import { supabase } from "../supabaseClient";


export default async function mint_nft(title, image_url, orignal_nft_title, minter_wallet_address) {

    const { uri } = await metaplex.nfts().uploadMetadata({
        name: title,
        description: "Memed the NFT: " + orignal_nft_title,
        image: image_url,
    });

    const { nft } = await metaplex.nfts().create({
        uri: uri,
        name: "My NFT",
        sellerFeeBasisPoints: 0,
        updateAuthority: metaplex.identity(),
        tokenOwner: minter_wallet_address,
        maxSupply: BigNumber.from(1)
    });

    console.log("MINTED NFT: " + nft);

    return nft;

}