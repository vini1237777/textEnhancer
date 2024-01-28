import { rem } from "@/app/lib/functions";

export const styles = {
  container: {
    border: "2px dashed",
    borderColor: "gray.300",
    textAlign: "center",
    color: "white",
    mt: rem(70),
    bgColor: "#0c112e",
  },
  tableWrapper: {
    alignItems: "center",
  },
  text: {
    borderRight: "1px solid",
    borderColor: "gray.300",
    fontSize: {
      base: rem(15),
      sm: rem(15),
      md: rem(16),
      lg: rem(15),
    },
  },
};