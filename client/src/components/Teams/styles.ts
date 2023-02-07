export const styles = {
  root: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    margin: "30px 0 30px 0",
  },
  sectionBox: {
    width: "400px",
    padding: "40px",
    borderRadius: "24px",
    boxShadow: "10px 5px 5px gray",
    backgroundColor: "floralwhite",
  },
  divider: {
    borderColor: "#202020",
  },
  img: {
    width: "100px",
    height: "100px",
  },
  aboutContent: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    marginLeft: "30px",
    padding: "0",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "40px 0 40px 0",
  },
  font: {
    fontFamily: "Montserrat Alternates",
    fontSize: "16px",
    color: "#202020",
  },
  error:{
    fontFamily: "Montserrat Alternates",
    fontSize: "26px",
    color: "red",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "40px",
  },
  button: {
    width: "280px",
    height: "48px",
    fontFamily: "Montserrat Alternates",
    fontSize: "16px",
    color: "#202020",
    borderRadius: "10px",
    ":hover": {
      backgroundColor: "darkseagreen",
      color: "#FFFFFF",
    },
  },
} as any;
