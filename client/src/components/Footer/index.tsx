import { Box, Link, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height:'auto',
        marginTop: "80px",
        backgroundColor: "floralwhite",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0 20px 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "300px",
          }}
        >
          <Link href="/">
            <img
              style={{ width: "90px", height: "90px" }}
              src="/images/juve.png"
            />
          </Link>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{ fontFamily: "Montserrat Alternates", fontSize: "24px" }}
            >
              Revazov
            </Typography>
            <Typography
              sx={{ fontFamily: "Montserrat Alternates", fontSize: "20px" }}
            >
              © 2023 Copyright
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Link href="https://vk.com/abe_revaz">
            <Box
              sx={{
                marginLeft: "20px",
                ":hover": {
                  backgroundColor: "darkseagreen",
                  borderRadius: "25px",
                },
              }}
            >
              <img
                style={{ width: "60px", height: "60px", padding: "5px" }}
                src="/images/vk.png"
              />
            </Box>
          </Link>

          <Link href="https://github.com/AlbertRevazov">
            <Box
              sx={{ marginLeft: "20px",
                ":hover": {
                  backgroundColor: "darkseagreen",
                  borderRadius: "25px",
                },
              }}
            >
              <img
                style={{ width: "60px", height: "60px", padding: "5px" }}
                src="/images/github.png"
              />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
