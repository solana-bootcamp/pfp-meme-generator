import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "../Home.css";
import { Box, Select, Input, ChakraProvider } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import UpdatedGallery from "../components/UpdatedGallery";

function Edit() {

  return (
    <Box className="Home-body">
          <Box className="form-widget">
            <p>hello</p>
          </Box>
    </Box>
  );
}

export default Edit;