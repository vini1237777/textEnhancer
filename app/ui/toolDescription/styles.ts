import { rem } from "@/app/lib/functions";

const commonStyles={
    color:'white'
}

export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    pb: { md: rem(30), lg: rem(20) },
    alignItems: "center",
    mb: { base: rem(10), md: 0, lg: 0 },
    pl: { base: rem(20), sm: rem(90), md: rem(130) },
    pr: { base: rem(20), sm: rem(90), md: rem(130) },
  },
  text: {
    ...commonStyles,
  },
};