"use client"
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Text, VStack, Box, Flex, IconButton, Spinner } from "@chakra-ui/react";
import { styles } from "./styles";
import { dagDropContent, fileProcessingContent, pdfConversionContent } from "@/app/lib/constants";
import { rem } from "@/app/lib/functions";
import Result from "../result/result";
import SampleDocUploader from "../sampleDocUploader/sampleDocUploader";
import { MdRefresh } from "react-icons/md";
import Error from "../error/error";

const FileUploader = () => {

  const [data, setData]= useState(null);
  const [loading, setIsLoading] = useState(false);
  const [showResult, setShowResult]= useState(false);
  const [isError, setIsError] = useState(false);
  
  const isdataAvailable= Object.values(data || {}).length > 0;
  const fetchData = useCallback(async (acceptedFiles:File[], sampleFormData: FormData | null  ) => {
    const formData = new FormData();
     acceptedFiles && formData.append("file", acceptedFiles?.[0]) as unknown as  BodyInit
    try {
      setIsLoading(true);
      setData(null);
      const response = await fetch("/api/processPdf", {
        method: "POST",
        body: sampleFormData as BodyInit ||formData ,
      });

      if (!response.ok) {
       setIsLoading(false);
       setIsError(true);
       return
      }
      const result = await response.json();
      const parsedData= JSON.parse(result.data);
      setData(parsedData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, []);


  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: (acceptedFiles) => fetchData(acceptedFiles, null),
    noClick: true,
    noKeyboard: true,
    // accept: { "application/pdf": [".pdf"] },
  });
  return (
    <Box>
      <Box sx={styles.wrapper}>
        <Box {...getRootProps()} sx={{ ...styles.container }}>
          {data && (
            <IconButton
              display={{ base: "flex", md: "flex" }}
              onClick={() => {
                setData(null);
              }}
              icon={<MdRefresh />}
              variant="outline"
              aria-label="Open Sort"
              color={"white"}
              alignSelf="center"
            />
          )}
          <input {...getInputProps()} />
          {!isError && (
            <Text
              sx={{
                ...styles.text,
                fontSize: {
                  base: rem(15),
                  sm: rem(20),
                  md: rem(20),
                  lg: rem(15),
                },
              }}
            >
              {loading
                ? fileProcessingContent.title
                : !isdataAvailable && dagDropContent.title}
              {isdataAvailable && pdfConversionContent.title}
            </Text>
          )}
          {isError && (
            <Error
              setError={() => {
                setIsError(false);
              }}
            />
          )}
          {!isError &&
            (!loading ? (
              <Text
                sx={{
                  ...styles.text,
                  color: "gray.300",
                  mb: rem(40),
                  fontSize: {
                    base: rem(15),
                    sm: rem(20),
                    md: rem(20),
                    lg: rem(15),
                  },
                }}
              >
                {!isdataAvailable && dagDropContent.description}
              </Text>
            ) : (
              <Flex justifyContent={"center"} alignItems="center">
                <Spinner
                  size="xl"
                  color="blue.500"
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="white"
                />
              </Flex>
            ))}
          {!isError &&
            (!loading && !isdataAvailable ? (
              <Button onClick={open} sx={{ ...styles.button }}>
                {dagDropContent.buttonLabel}
              </Button>
            ) : (
              isdataAvailable &&
              !showResult && (
                <Button
                  onClick={() => {
                    setShowResult(true);
                  }}
                  sx={{ ...styles.button }}
                >
                  {pdfConversionContent.buttonLabel}
                </Button>
              )
            ))}
        </Box>
        {showResult && isdataAvailable && <Result data={data || {}} />}
      </Box>
      {!loading && !isdataAvailable && (
        <SampleDocUploader fetchSampleFileData={fetchData} />
      )}
    </Box>
  );
};

export default FileUploader;
