import { rem } from "@/app/lib/functions";

const commonStyles = {
  color:'white'
}

export const styles = {
  wrapper: {
    pt: { base: rem(10), sm: rem(20), md: '0'},
    pb: { base: rem(10), sm: rem(20), md: rem(20) },
    pl: { base: rem(10), sm: rem(20), md: rem(20) },
    pr: { base: rem(10), sm: rem(20), md: rem(20) },
    bgColor: "#231c46",
    mt: { base: rem(20), md: "0", lg: "0" },
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
  },
  button: {
    alignSelf: "center",
  },
};
