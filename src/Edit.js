import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Box, Select, Input, ChakraProvider } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import UpdatedGallery from "./components/UpdatedGallery";

function Edit() {

  return (
    <ChakraProvider>
      <div className="Homer">
        <Box w="100%" bg="#ED1C24" className="Home-header">
          <p className="p">WARETA</p>
        </Box>
        <Box className="Home-body">
          <Box className="form-widget">
            <p>hello</p>
          </Box>
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default Edit;