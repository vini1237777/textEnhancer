'use client'

import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { sampleDocContent } from "@/app/lib/constants";
import { styles } from "./styles";
import { anyFunction } from "@/app/lib/types";

const SampleDocUploader = ({fetchSampleFileData}:{fetchSampleFileData: anyFunction}) => {
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
      <Button
        onClick={sampleDataFetching}
        variant="outline"
        sx={{ ...styles.button }}
      >
        {sampleDocContent.buttonLabel}
      </Button>
    </Flex>
  );
};

export default SampleDocUploader;
