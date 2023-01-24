import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";


//saves meme to db
export default async function createMeme({ currentwallet, memeurl }) {
    try {  
      if (memeurl !== null) {
        const updates = {
          user_id: currentwallet,
          meme_uri: memeurl,
          inserted_at: new Date(),
        }
  
        let { error } = await supabase.from('memes').insert(updates)
  
        if (error) {
          throw error
        }
      }
      } catch (error) {
        alert(error.message)
      } finally {
        alert('😝 Meme created!!!')
      }
}
