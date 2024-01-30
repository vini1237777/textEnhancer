"use server";

import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bg: "#180c2e",
      },
    },
  },
});
