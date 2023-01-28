import { Box, Typography } from "@mui/material";
import { styles } from "../../styles";

interface AboutProps {
  data: {
    runningCompetitions: [
      {
        code: string;
        emblem: string;
        id: number;
        name: string;
        type: string;
      }
    ];
    clubColors: string;
    founded: number;
    name: string;
    crest: string;
    venue: string;
    area: {
      id: number;
      name: string;
      code: string;
      flag: string;
    };
  };
}

export const AboutTeam = ({ data }: AboutProps) => {
  const { area, clubColors, crest, founded, name, runningCompetitions, venue } =
    data;

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
      <Box sx={{ padding: "20px" }}>
        <img src={crest} style={{ width: "100px", height: "100px" }} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
