import { rem } from "@/app/lib/functions";

export const styles = {
  container: {
    border: "2px dashed",
    borderColor: "gray.300",
    textAlign: "center",
    color: "white",
    mt: rem(70),
    bgColor: "#0c112e",
    ml: rem(20),
    mr: rem(20),
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