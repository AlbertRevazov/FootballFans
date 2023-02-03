import { Box, Typography } from "@mui/material";
import { AboutProps } from "../../../../types";
import { styles } from "../../styles";

export const AboutTeam: React.FC<AboutProps> = ({ data }) => {
  const { area, clubColors, crest, founded, name, runningCompetitions, venue } =
    data;

  return (
    <Box sx={styles.sectionBox}>
      <Box sx={{ padding: "20px" }}>
        <img src={crest} style={styles.img} />
      </Box>
      <Box sx={styles.aboutContent}>
        {area?.name && (
          <Typography sx={styles.font}>Страна - {area.name}</Typography>
        )}
        <Typography sx={styles.font}>
          Полное название команды - {name}
        </Typography>
        <Typography sx={styles.font}> Стадион - {venue}</Typography>
        <Typography sx={styles.font}>Год основания - {founded} г.</Typography>
        <Typography sx={styles.font}>Клубные цвета - {clubColors}</Typography>
        <Typography sx={styles.font}>
          Принимает участие -
          {runningCompetitions?.map((tool) => (
            <li key={tool.id}>{tool.name}</li>
          ))}
        </Typography>
      </Box>
    </Box>
  );
};
