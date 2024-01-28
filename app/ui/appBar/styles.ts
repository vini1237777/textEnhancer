import { rem } from "@/app/lib/functions";


export const styles = {
  container: {
    display: "flex",
    backgroundColor: "#0c112e",
    justifyContent: "space-between",
    width: "100%",
    borderBottom: "4px solid #231c46",
    position: 'fixed',
    top: 0,
    zIndex: 4,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  icon: {
    color: "white",
  },
  buttonWrapper: { display: "flex", gap: rem(10) },
  iconButton: {
    borderRadius: "10px",
    padding: 0,
    width: "40px",
    border: `1px solid lightGray`,
    "&:hover": {
      border: `1px solid gray`,
    },
  },
};
