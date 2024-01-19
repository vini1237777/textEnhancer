"use client";

import { errorContent } from "@/app/lib/constants";
import { rem } from "@/app/lib/functions";
import { anyFunction } from "@/app/lib/types";
import { Box, Button, Text } from "@chakra-ui/react";

export default function Error({
  // error,
  setData,
}: {
  // error: Error & { digest?: string };
  setData: anyFunction;
}) {
  return (
    <Box >
      <Text
        sx={{
          fontSize: {
            base: rem(15),
            sm: rem(20),
            md: rem(20),
            lg: rem(15),
          },
          color:'white',
          mb:rem(4)
        }}
      >
        {errorContent.title}
      </Text>
      <Button onClick={() => setData(null)}>{errorContent.buttonLabel}</Button>
    </Box>
  );
}
