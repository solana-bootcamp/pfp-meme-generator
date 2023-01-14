import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "../styles/ViewResult.css";
import { Box, Select, Input, ChakraProvider, Button, ButtonGroup } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import UpdatedGallery from "../components/UpdatedGallery";
import Edit from "./Edit"

function ViewResult() {

  return (
    <Box className="View-body">
          <Box>
          <p className="pvr">insert created image here</p>
          </Box>
          <Box className="button-group">
          <ButtonGroup>
          <Edit/>
          <Button fontFamily={"Montserrat"} colorScheme='yellow' fontWeight="600" onClick={() => {}}>SAVE</Button>
          <Button fontFamily={"Montserrat"} colorScheme='blue' fontWeight="600" onClick={() => {}}>POST</Button>
          </ButtonGroup>

          </Box>
    </Box>
  );
}

export default ViewResult;