import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Box, Select, Input, ChakraProvider } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import UpdatedGallery from "./components/UpdatedGallery";
import Nav from "./Nav";

function Home() {
  const [currentwallet, setCurrentWallet] = useState(null);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <ChakraProvider>
      <div className="Homer">
        <Box w="100%" bg="#ED1C24" className="Home-header">
          <p className="p">WARETA</p>
          <DynamicWidget className="logout-button" />
        </Box>
        <Nav/>
      </div>
    </ChakraProvider>
  );
}

export default Home;
