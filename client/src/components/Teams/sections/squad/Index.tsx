import { Box, Divider, Typography } from "@mui/material";
import { SquadProps } from "../../../../types";
import { styles } from "../../styles";
import { useSquadHook } from "./hook";

export const Squad: React.FC<SquadProps> = ({ data }) => {
  const { coach, defencers, goalkeepers, midfielders, offencers } =
    useSquadHook({ data });

  return (
    <Box sx={styles.sectionBox}>
      <Typography sx={styles.font}>Главный тренер - {coach?.name}</Typography>
      <Divider sx={styles.divider} />
      <Typography sx={styles.font}>Вратари</Typography>
      <Divider sx={styles.divider} />
      {goalkeepers &&
        goalkeepers.map((man) => (
          <Typography key={man.id} sx={styles.font}>
            {man.name} ({man.nationality})
          </Typography>
        ))}
      <Typography sx={styles.font}>Защитники</Typography>
      <Divider sx={styles.divider} />
      {defencers &&
        defencers.map((man) => (
          <Typography key={man.id} sx={styles.font}>
            {man.name} ({man.nationality})
          </Typography>
        ))}
      <Typography sx={styles.font}>Полузащитники</Typography>
      <Divider sx={styles.divider} />
      {midfielders &&
        midfielders.map((man) => (
          <Typography key={man.id} sx={styles.font}>
            {man.name} ({man.nationality})
          </Typography>
        ))}
      <Typography sx={styles.font}>Нападающие</Typography>
      <Divider sx={styles.divider} />
      {offencers &&
        offencers.map((man) => (
          <Typography key={man.id} sx={styles.font}>
            {man.name} ({man.nationality})
          </Typography>
        ))}
    </Box>
  );
};
