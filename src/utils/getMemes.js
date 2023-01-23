import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";

//gets list of created memes from db
export default async function GetMemes({currentwallet}) {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const fetchMemes = async () => {  
      try {
        if (currentwallet !== null) {
            
        let { data, error } = await supabase
        .from("memes")
        .select()
        .order('inserted_at', { ascending: false });

        if (error) {
          throw error;
        }
        setMemes(data);
        console.log("all memes are: " + JSON.stringify(data));
        }
      } catch (error) {
        alert(error.message);
      }
    };
    fetchMemes();
    
  }, []);

  console.log('returned memes: ' + JSON.stringify(memes))
  return memes;
}
