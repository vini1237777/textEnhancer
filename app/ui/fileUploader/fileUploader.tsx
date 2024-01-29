"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Button,
  Text,
  Box,
  Flex,
  IconButton,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { styles } from "./styles";
import {
  dagDropContent,
  fileProcessingContent,
  pdfConversionContent,
} from "@/app/lib/constants";
import { rem } from "@/app/lib/functions";
import Result from "../result/result";
import SampleDocUploader from "../sampleDocUploader/sampleDocUploader";
import { MdRefresh } from "react-icons/md";
import Error from "../error/error";
import {  IObject } from "@/app/lib/types";

/**
 * FileUploader is a React component for uploading files, processing them, and displaying results.
 */
const FileUploader = () => {
  // State for managing the uploaded data, loading status, result display, and error status.
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string>('');
  const toast = useToast();

  // Check if data is available after processing
  const isdataAvailable = Object.values(data || {}).length > 0;

  // Function to fetch data, which processes the uploaded files.
  const fetchData = useCallback(
    async (acceptedFiles: any[] ,sampleFormData: null | FormData ) => {
      const formData = new FormData();
       acceptedFiles && acceptedFiles?.some(async (rejection:IObject) =>{
        if (rejection &&rejection.errors && rejection.errors.length) {
          rejection.errors.some(
            (error: IObject) => error.code === "file-too-large"
          );
          toast({
            title: "File size limit exceeded",
            description: "File is too large. Maximum size is 250KB.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return;
        } 
       
      }
        );
        
        const acceptedFilesError = acceptedFiles && acceptedFiles[0] && acceptedFiles[0].errors && acceptedFiles[0].errors.length > 0

         if (!acceptedFilesError || sampleFormData) {
           formData.append("file", acceptedFiles?.[0]);
           try {
             setIsLoading(true);
             setData(null);
             const res = await fetch("/api/processPdf", {
               method: "POST",
               body: sampleFormData || formData,
             });
             const response = await res.json();
             if (response?.error) {
               setIsLoading(false);
               setError(response.error);
               return;
             }
             setData(response?.data);
             setError('');
             setIsLoading(false);
           } catch (error) {
             setIsLoading(false);
             setError(error as string);
           }
         }
     
    },
    []
  );

  // useDropzone hook configuration for handling file drag-and-drop functionality.
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: (acceptedFiles: File[], fileRejections: any[] = []) =>
      fetchData(acceptedFiles.length > 0 ? acceptedFiles: fileRejections, null),
    noClick: true,
    noKeyboard: true,
    maxSize: 250 * 1024,
    accept: { "application/pdf": [".pdf"] },
  });


  return (
    < >
      <Box sx={styles.wrapper}>
        <Box {...getRootProps()} sx={{ ...styles.container }}>
          {/* Refresh icon to reset the data */}
          {data && (
            <IconButton
              display={{ base: "flex", md: "flex" }}
              onClick={() => {
                setData(null);
              }}
              icon={<MdRefresh />}
              variant="outline"
              aria-label="reset"
              color={"white"}
              alignSelf="center"
            />
          )}
          {/* Input field for file upload */}
          <input {...getInputProps()} data-testid="drop-input" />
          {/* Displaying text based on the loading and data availability */}
          {!error && (
            <Text
              sx={{
                ...styles.text,
                padding: rem(10),
                fontSize: {
                  base: rem(13),
                  sm: rem(14),
                  md: rem(15),
                },
              }}
            >
              {loading
                ? fileProcessingContent.title
                : !isdataAvailable && dagDropContent.title}
              {isdataAvailable && pdfConversionContent.title}
            </Text>
          )}
          {/* Error component when there is an error */}
          {error && (
            <Error
              setError={() => {
                setError('');
              }}
              error={error}
            />
          )}
          {/* Loading spinner */}
          {!error &&
            (loading ? (
              <Flex justifyContent={"center"} alignItems="center">
                <Spinner
                  size="xl"
                  color="blue.500"
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="white"
                  data-testid="loading-spinner"
                />
              </Flex>
            ) : (
              <Text
                sx={{
                  ...styles.text,
                  color: "gray.300",
                  mb: rem(40),
                }}
              >
                {!isdataAvailable && dagDropContent.description}
              </Text>
            ))}
          {/* Buttons to upload files or display results */}
          {!error &&
            (!loading && !isdataAvailable ? (
              <Button
                onClick={open}
                sx={{ ...styles.button }}
                data-testid="uploadBtn"
              >
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
                  data-testid="displayBtn"
                >
                  {pdfConversionContent.buttonLabel}
                </Button>
              )
            ))}
        </Box>
        {/* Result component to display the processed data */}
        {showResult && isdataAvailable && <Result data={data || {}} />}
      </Box>
      {/* Component for uploading sample documents */}
      {!loading && !error && !isdataAvailable && (
        <SampleDocUploader fetchSampleFileData={fetchData} />
      )}
    </>
  );
};

export default FileUploader;
