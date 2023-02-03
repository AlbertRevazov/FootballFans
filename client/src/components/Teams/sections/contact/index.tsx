import { Box, Link, Typography } from "@mui/material";
import { ContactProps } from "../../../../types";
import { styles } from "../../styles";

export const ContactDetails: React.FC<ContactProps> = ({ data }) => {
  const { address, website } = data;

  return (
    <Box sx={[styles.sectionBox, { marginTop: "32px" }]}>
      <>
        <Typography sx={styles.font}> address - {address}</Typography>
        <Typography sx={styles.font}>
          website -<Link href={website}>{website} </Link>
        </Typography>
      </>
    </Box>
  );
};
