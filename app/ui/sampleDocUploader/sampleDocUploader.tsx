'use client'

import { Button, Flex, Text, useToast } from "@chakra-ui/react";
import { sampleDocContent } from "@/app/lib/constants";
import { styles } from "./styles";
import {IObject } from "@/app/lib/types";

const SampleDocUploader = ({ fetchSampleFileData, setFrameUrl }: IObject) => {
  const toast = useToast();
  
  const handleSampleClick = async () => {

    setFrameUrl((prev:IObject)=>{
      return{
        ...prev,
        isOpen: true
      }
    })

    try {
      const response = await fetch("/sample/sample.pdf");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fileBlob = await response.blob();
      setFrameUrl((prev: IObject)=>{
       return {
        ...prev,
        link: URL.createObjectURL(fileBlob)
      }
      });

      toast({
        title: "PDF Loaded",
        description: "Sample PDF has been loaded successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error: any) {

      toast({
        title: "Error",
        description: `Failed to load sample PDF: ${error.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const sampleDataFetching = async () => {
    const responseFile = await fetch("/sample/sample.pdf");
    const blob = await responseFile.blob();
    const formData = new FormData();
    formData.append("file", blob, "sample.pdf");
    fetchSampleFileData(null, formData);
  };

  return (
    <Flex sx={{ ...styles.container }}>
      <Text sx={{ ...styles.text, textAlign: "center" }}>
        {sampleDocContent.title}
      </Text>
      <Flex gap={2}>
        <Button
          _hover={{ color: "#180c2e", bgColor: "white" }}
          onClick={handleSampleClick}
        >
          Preview Sample
        </Button>
        <Button
          onClick={sampleDataFetching}
          sx={{ ...styles.button }}
          variant="outline"
          _hover={{ color: "#180c2e", bgColor: "white" }}
        >
          {sampleDocContent.buttonLabel}
        </Button>
      </Flex>
    </Flex>
  );
};

export default SampleDocUploader;
