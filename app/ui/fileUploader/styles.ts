import { rem } from "@/app/lib/functions";

const commonStyles = {
  color: "white",
 fontSize:{ base: rem(15),
  sm: rem(15),
  md: rem(16),
  lg: rem(15),}
};

export const styles = {
  wrapper: {
    pt: { base: '0', sm: rem(10), md: "0" },
    pb: { base: rem(10), sm: rem(20), md: rem(20) },
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
    ml: { base: rem(50), sm: rem(80), md: rem(120) },
    mr: { base: rem(50), sm: rem(80), md: rem(120) },
    pl: rem(30),
    pr: rem(30),
    boxShadow: "1px 1px 2px 10px #231c46",
  },
  text: {
    ...commonStyles,
  },
  button: {
    alignSelf: "center",
  },
};
