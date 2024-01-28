import { Box } from '@chakra-ui/react';
import React from 'react'
import AppBar from '../appBar/appBar';
import FileUploader from '../fileUploader/fileUploader';
import ToolDescription from '../toolDescription/toolDescription';
import { styles } from './styles';

const Home = () => {
  return (
    <Box sx={{ ...styles.container }}>
      <AppBar />
      <Box sx={{ ...styles.description_uploader_wrapper }}>
        <ToolDescription />
        <FileUploader />
      </Box>
    </Box>
  );
}

export default Home;
