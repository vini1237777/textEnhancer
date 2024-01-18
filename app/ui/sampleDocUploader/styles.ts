import { rem } from "@/app/lib/functions";

const commonStyles = {
  color: "white",
};

export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    pt: { md: rem(20) },
    pb: { md: rem(70) },
    alignItems: "center",
    gap: "4",
    mt: { base: rem(10) },
  },
  text: {
    ...commonStyles,
    fontSize: { base: rem(15), sm: rem(15), md: rem(15) },
  },
  button: {
    ...commonStyles,
  },
};
