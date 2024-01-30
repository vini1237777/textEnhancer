import { rem } from "@/app/lib/functions";

export const styles = {
  container: {
   
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  description_uploader_wrapper: {
    mt: { base: rem(100), sm: rem(130), md: rem(100) },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 1,
  },
  iconButton: {
    bgColor: "transparent",
    color: "white",
    _hover: {
      bgColor: "transparent",
      color: "white",
      transform: 'scale(1.1)',
      transition: 'transform 0.2s ease-in-out'
    },
  },
};
