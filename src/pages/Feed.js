import { Box } from "@chakra-ui/react";
import "../styles/Feed.css";
import Meme from "../components/Meme";
import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";

function Feed({currentwallet}) {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        if (currentwallet !== null) {
          let { data, error } = await supabase
            .from("memes")
            .select()
            .order("inserted_at", { ascending: false });

          if (error) {
            throw error;
          }
          setMemes(data);
          console.log("memes are: " + JSON.stringify(memes));
        }
      } catch (error) {
        alert(error.message);
      }
    };
    fetchMemes();
  }, [currentwallet, memes]);

  return (
    <Box className="Feed-body">
      <p className="pf">DA MEMES</p>
      {memes.length > 0 ? (
        memes.map((currentmeme, index) => {
          return <Meme key={index} memecreator={currentmeme.currentwallet} memeimage={currentmeme.meme_uri} />;
        })
      ) : (
        <div>
          <p className="pff">No memes have been created</p>
        </div>
      )}
    </Box>
  );
}

export default Feed;
