
export default async function get_nfts(account_address) {
    let nfts_array = [];

    const response = await get_nfts_api(account_address);
    parse_metadata(response, nfts_array);
    
    return nfts_array
}


 
async function get_nfts_api(account_address) {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: '75e4e650-bda5-47f8-8b9c-c7a2d93f9e93'
        }
      };

      let url = 'https://api.nftport.xyz/v0/solana/accounts/' + account_address + '?page_size=50&include=metadata';

      try {
        const response = await fetch(url, options);
        const response_json = await response.json();
        return await response_json['nfts']

      } catch (error) {
        console.error(error);
      }
}



async function parse_metadata(metadata, nfts) {

    await Promise.all(metadata.map(async (nftmeta) => {
        try {
            let meta_from_url = await get_meta_from_url(nftmeta['metadata_url']);
            nfts.push({
                title: meta_from_url['name'],
                mint_address: nftmeta['mint_address'],
                image_url: meta_from_url['image']
            })
            console.log(meta_from_url['name']);
            console.log(nftmeta['mint_address']);
            console.log(meta_from_url['image']);
        } catch (error) {
            console.log(error);
        }
    } ))
}


async function get_meta_from_url(metadata_url) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };

    try {
        let response = await fetch(metadata_url, options);
        return await response.json();

      } catch (error) {
        console.error(error);
    }
}
