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
        if ((currentwallet !== null) || (memes === []) ) {
          let { data, error } = await supabase
            .from("memes")
            .select()
            .order("inserted_at", { ascending: false });
          console.log("memes are: " + JSON.stringify(data));

          if (error) {
            throw error;
          }
          setMemes(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
      fetchMemes();

  }, [currentwallet, memes]);

  return (
    <div className="Feed">
            <p className="pf">DA MEMES</p>
            <Box className="Feed-body">
      {memes !== [] ? (
        memes.map((currentmeme, index) => {
          return <Meme key={index} memecreator={currentmeme.user_id} memeimage={currentmeme.meme_uri} />;
        })
      ) : (
        <div>
          <p className="pff">No memes have been created</p>
        </div>
      )}
    </Box>
    </div>

  );
}

export default Feed;
