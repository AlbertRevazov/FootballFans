import { Box, Divider, Typography } from "@mui/material";
import { styles } from "../../styles";

interface SquadProps {
  data: {
    squad: [
      {
        id: number;
        name: string;
        position: string;
        dateOfBirth: string;
        nationality: string;
      }
    ];
    coach: {
      id: number;
      firstName: string;
      lastName: string;
      name: string;
      dateOfBirth: string;
      nationality: string;
    };
  };
}

export const Squad = ({ data }: SquadProps) => {
  const { coach, squad } = data;
  const goalkeepers = squad?.filter((item) => item.position === "Goalkeeper");
  const defencers = squad?.filter((item) => item.position === "Defence");
  const midfielders = squad?.filter((item) => item.position === "Midfield");
  const offencers = squad?.filter((item) => item.position === "Offence");

  return (
    <Box
      sx={{
        width: "400px",
        padding: "40px",
        boxShadow: "10px 5px 5px gray",
        borderRadius: "24px",
      }}
    >
      <Typography sx={styles.font}>Главный тренер - {coach?.name}</Typography>
      <Divider sx={{ borderColor: "#202020" }} />
      <Typography sx={styles.font}>Вратари</Typography>
      <Divider sx={{ borderColor: "#202020" }} />
      {goalkeepers &&
        goalkeepers.map((man) => (
          <Typography sx={styles.font}>
            {man.name} ({man.nationality})
          </Typography>
        ))}
      <Typography sx={styles.font}>Защитники</Typography>
      <Divider sx={{ borderColor: "#202020" }} />
      {defencers &&
        defencers.map((man) => (
          <Typography sx={styles.font}>
            {man.name} ({man.nationality})
          </Typography>
        ))}
      <Typography sx={styles.font}>Полузащитники</Typography>
      <Divider sx={{ borderColor: "#202020" }} />
      {midfielders &&
        midfielders.map((man) => (
          <Typography sx={styles.font}>
            {man.name} ({man.nationality})
          </Typography>
        ))}
      <Typography sx={styles.font}>Нападающие</Typography>
      <Divider sx={{ borderColor: "#202020" }} />
      {offencers &&
        offencers.map((man) => (
          <Typography sx={styles.font}>
            {man.name} ({man.nationality})
          </Typography>
        ))}
    </Box>
  );
};
