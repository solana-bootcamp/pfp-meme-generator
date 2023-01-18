import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Box, Button, ButtonGroup, ChakraProvider } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import UpdatedGallery from "./components/UpdatedGallery";
import Nav from "./Nav";
import Generator from "./pages/Generator";


function Home() {
  const [currentwallet, setCurrentWallet] = useState(null);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = () => {
  //   navigate('./edit', {state: {
  //     backgroundImageURL: "https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg", 
  //     pfpImageURL: "https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg", 
  //     text: "hey"
  //   }})
  // }

  return (
    <ChakraProvider>
      <div className="Homer">
        <Box w="100%" bg="#ED1C24" className="Home-header">
          <p className="p">WARETA</p>
          <DynamicWidget className="logout-button" />
        </Box>
        <Generator />
      </div>
    </ChakraProvider>
  );
}

export default Home;
