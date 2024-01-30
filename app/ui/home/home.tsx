import { rem } from '@/app/lib/functions';
import { IObject } from '@/app/lib/types';
import { Box, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';
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
        <Box sx={{ bgColor: "#313638" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              pr: rem(10),
              pt: rem(5),
              position: "fixed",
              top: 0,
              zIndex: 8,
              bgColor: "#313638",
            }}
          >
            <IconButton
              icon={<MdClose size={"30px"} />}
              onClick={closeIframe}
              aria-label="Close the pdf preview"
              sx={{ ...styles.iconButton }}
            />
          </Box>
          <Box sx={{height:{base:'auto', sm:'100vh'}}}>
            <iframe
              src={frameUrl.link}
              style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 40,
              }}
            />
          </Box>
        </Box>
      )}
      {!frameUrl.isOpen && (
        <>
          <AppBar />
          <Box sx={{ ...styles.description_uploader_wrapper }}>
            <ToolDescription />
            <FileUploader setFrameUrl={setFrameUrl} />
          </Box>
        </>
      )}
    </Box>
  );
}

export default Home;
