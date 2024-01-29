"use client";

import { errorContent } from "@/app/lib/constants";
import { rem } from "@/app/lib/functions";
import { anyFunction } from "@/app/lib/types";
import { Box, Button, Text } from "@chakra-ui/react";

export default function Error({ setError, error }: { setError: anyFunction, error:string }) {
  console.log(error,'error')
  return (
    <Box data-testid='error'>
      <Text
        sx={{
          fontSize:{ 
            base: rem(15),
            sm: rem(15),
            md: rem(16),
            lg: rem(15)
           },
          color: "white",
          mb: rem(10),
        }}
      >
        {error}
      </Text>
      <Button onClick={() => setError()} data-testid='try-again'>
        {errorContent.buttonLabel}
      </Button>
    </Box>
  );
}
