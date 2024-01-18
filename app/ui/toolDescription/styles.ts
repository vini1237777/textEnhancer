import { rem } from "@/app/lib/functions";

const commonStyles={
    color:'white'
}

export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    pb: { md: rem(70),lg:rem(20) },
    alignItems: "center",
    mt:{md:rem(20)},
    mb:{base:rem(50), lg:0}
  },
  text: {
    ...commonStyles,
  },
};