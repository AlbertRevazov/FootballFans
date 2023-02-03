import { Theme } from "@mui/material";

export const styles = {
  root: (theme: Theme) => ({
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "floralwhite",
    width: "100%",
    height: "90px",
    borderRadius: "0 0 16px 16px",
    [theme.breakpoints.down("md")]: {
      overflow: "hidden",
      flexWrap: "wrap",
    },
  }),
  navBar: {
    width: "400px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  link: {
    marginLeft: "20px",
    ":hover": {
      borderBottom: "3px solid darkseagreen",
    },
  },
  lk: {
    textDecoration: "none",
    ":hover": {
      borderBottom: "3px solid darkseagreen",
    },
  },
  font: {
    fontFamily: "Montserrat Alternates",
    fontSize: "20px",
    color: "#202020",
    textDecoration: "none",
  },
  welcome: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "60px",
  },
  menu: {
    width: "70px",
    height: "70px",
    backgroundImage: "url(/images/menu.png)",
    backgroundSize: "100%",
  },
  icon: {
    width: "20px",
    height: "20px",
    backgroundSize: "100%",
    marginRight: "10px",
  },
} as any;
