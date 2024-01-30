import { IObject } from '@/app/lib/types';
import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import AppBar from '../appBar/appBar';
import FileUploader from '../fileUploader/fileUploader';
import ToolDescription from '../toolDescription/toolDescription';
import { styles } from './styles';

const Home = () => {
  const [frameUrl, setFrameUrl] = useState<IObject>({
   isOpen: false,
   link:''
  });

   const closeIframe = () => {
     setFrameUrl((prev)=> {
      return {
        ...prev,
        isOpen: false,
       }}
      )
   };


  return (
    <Box sx={{ ...styles.container }}>
      {frameUrl.isOpen && (
        <Box sx={{ width: "100%", bgColor: "#313638" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={closeIframe} size={"md"}>
              Close
            </Button>
          </Box>
          <iframe
            src={frameUrl.link}
            style={{ width: "100%", height: "100vh" }}
          />
        </Box>
      )}
      {!frameUrl.isOpen && (
        <>
          <AppBar />
          <Box sx={{ ...styles.description_uploader_wrapper }}>
            <ToolDescription />
            <FileUploader setFrameUrl={setFrameUrl}  />
          </Box>
        </>
      )}
    </Box>
  );
}

export default Home;
