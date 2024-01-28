import { rem } from "@/app/lib/functions";

export const styles = {
  container: {
    bgColor: "#180c2e",
    display: "flex",
    flexDirection: "column",
    position: 'relative'
  },
  description_uploader_wrapper: {
    mt: { base: rem(120), sm: rem(130), md: rem(100) },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    zIndex:1,
  },
};
