"use client"
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { theme } from "./theme/theme";
import Home from "./ui/home/home";


const page = () => {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
};

export default page;
