export const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "floralwhite",
    height: "90px",
    borderRadius: "0 0 16px 16px",
  },
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
} as any;
