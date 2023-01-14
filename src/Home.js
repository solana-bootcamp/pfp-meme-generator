import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Box, Button, ButtonGroup, ChakraProvider } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import UpdatedGallery from "./components/UpdatedGallery";
import Feed from "./pages/Feed";
import Generator from "./pages/Generator";
import { useNavigate } from "react-router-dom";


function Home() {
  const [currentwallet, setCurrentWallet] = useState(null);

  const navigate = useNavigate();

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
        <Generator />
        <Feed/>
      </div>
    </ChakraProvider>
  );
}

export default Home;
