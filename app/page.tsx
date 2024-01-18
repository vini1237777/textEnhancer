import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import Home from './ui/home/home';

const page = () => {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default page
