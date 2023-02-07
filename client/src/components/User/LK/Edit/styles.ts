export const styles = {
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "300px",
    height: "300px",
    borderRadius: "24px",
  },
  font: {
    fontFamily: "Montserrat Alternates",
    fontSize: "20px",
    color: "#202020",
  },
  buttonWrapper: {
    width: "100%",
    marginTop: "24px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  accept: {
    color: "#202020",
    borderRadius: "10px",
    ":hover": {
      backgroundColor: "darkseagreen",
      color: "#FFFFFF",
    },
  },
  delete: {
    color: "#202020",
    borderRadius: "10px",
    ":hover": {
      backgroundColor: "red",
      color: "#FFFFFF",
    },
  },
  cancel: {
    color: "#202020",
    borderRadius: "10px",
    ":hover": {
      backgroundColor: "#202020",
      color: "#FFFFFF",
    },
  },
} as any;
