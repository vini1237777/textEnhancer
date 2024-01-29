import { rem } from "@/app/lib/functions";


export const styles = {
  title: {
    color: "white",
    fontWeight: "bold",
    textDecoration: "underline",
    lineSpace: "50px",
    mt: rem(5),
    fontSize: {
      base: rem(15),
      sm: rem(15),
      md: rem(16),
      lg: rem(17),
    },
  },
  heading: {
    color: "white",
    fontWeight: "bold",
    fontSize: {
      base: rem(12),
      sm: rem(13),
      md: rem(14),
      lg: rem(15),
    },
  },
  content: {
    color: "white",
    fontSize: {
      base: rem(11),
      sm: rem(12),
      md: rem(13),
      lg: rem(14),
    },
  },
  divider: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  modalBody: {
    display: "flex",
    alignItem: "center",
    justifyContent: "flex-start",
    gap: { base: "2rem", sm: "5rem", md: "3rem" },
    flexWrap: "wrap",
    pl: { base: rem(40) },
  },
  features: {
    gap: rem(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: { base: "100%", sm: "35%", md: "28%", lg: "45%" },
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
};
