import { Box, Link, Typography } from "@mui/material";
import { styles } from "../../styles";

interface ContactProps {
  data: { website: string; address: string };
}

export const ContactDetails = ({ data }: ContactProps) => {
  const { address, website } = data;

  return (
    <Box
      sx={{
        width: "400px",
        boxShadow: "10px 5px 5px gray",
        borderRadius: "24px",
        padding: "40px",
        marginTop: "32px",
      }}
    >
      <>
        <Typography sx={styles.font}> address - {address}</Typography>

        <Typography sx={styles.font}>
          website -<Link href={website}>{website} </Link>
        </Typography>
      </>
    </Box>
  );
};
