import { rem } from "@/app/lib/functions";

const commonStyles = {
  color:'white'
}

export const styles = {
  wrapper: {
    p: { base: rem(10), sm: rem(20), md: rem(20) },
    bgColor: "#231c46",
    mt: { base: rem(20), md:rem(20), lg:'0'},
  },
  container: {
    pt: rem(20),
    pb: rem(30),
    border: "2px dashed",
    borderColor: "gray.300",
    h: { sm: "30vh", base: "40vh", md: "45vh" },
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    bgColor: "#0c112e",
  },
  text: {
    ...commonStyles,
    // pl: { base: rem(10) },
    // pr: { base: rem(10) },
  },
  button: {
    alignSelf: "center",
  },
};
