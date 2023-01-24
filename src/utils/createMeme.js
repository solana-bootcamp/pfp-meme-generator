import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";


//saves meme to db
export default async function createMeme(currentwallet, memeurl) {
    try {  
      if ((memeurl !== null) && (currentwallet !== null)) {
        console.log('this is memeurl:' + memeurl);
        console.log('this is memeurl:' + currentwallet);
        const updates = {
          currentwallet: currentwallet,
          memeuri: memeurl,
          inserted_at: new Date(),
        }
  
        let { error } = await supabase.from('memes').insert(updates)
  
        if (error) {
          throw error
        }
        console.log('😝 Meme created!!!')
        window.location.reload();
      }
      } catch (error) {
        alert(error.message)
      }
}
