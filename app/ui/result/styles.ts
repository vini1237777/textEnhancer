import { rem } from "@/app/lib/functions";

export const styles = {
  container: {
    border: "2px dashed",
    borderColor: "gray.300",
    textAlign: "center",
    color: "white",
    mt: rem(70),
    bgColor: "#0c112e",
    ml: { base: rem(20), sm: rem(80), md: rem(120) },
    mr: { base: rem(20), sm: rem(80), md: rem(120) },
  },
  tableWrapper: {
    alignItems: "center",
  },
  text: {
    borderRight: "1px solid",
    borderColor: "gray.300",
    fontSize: {
      base: rem(13),
      sm: rem(14),
      md: rem(15),
    },
  },
};