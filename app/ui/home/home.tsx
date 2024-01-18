import { Box } from '@chakra-ui/react';
import React from 'react'
import FileUploader from '../fileUploader/fileUploader';
import ToolDescription from '../toolDescription/toolDescription';
import { styles } from './styles';

const Home = () => {
  return (
   <Box sx={{...styles.container}}>
    <ToolDescription/>
    <FileUploader/>
   </Box>
  )
}

export default Home;
