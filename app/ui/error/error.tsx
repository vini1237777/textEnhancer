"use client";

import { errorContent } from "@/app/lib/constants";
import { rem } from "@/app/lib/functions";
import { anyFunction } from "@/app/lib/types";
import { Box, Button, Text } from "@chakra-ui/react";

export default function Error({ setError }: { setError: anyFunction }) {
  return (
    <Box data-testid='error'>
      <Text
        sx={{
          fontSize: {
            base: rem(15),
            sm: rem(20),
            md: rem(20),
            lg: rem(15),
          },
          color: "white",
          mb: rem(4),
        }}
      >
        {errorContent.title}
      </Text>
      <Button onClick={() => setError()} data-testid='try-again'>
        {errorContent.buttonLabel}
      </Button>
    </Box>
  );
}
