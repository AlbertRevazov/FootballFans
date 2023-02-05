import { Box, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { getCalendar, getTeams } from "../../redux/features/teams/teamsSlice";
import { useTeamsHook } from "./hooks";
import { AboutTeam } from "./sections/about";
import { ContactDetails } from "./sections/contact";
import { Calendar } from "./sections/calendar";
import { styles } from "./styles";
import { Squad } from "./sections/squad/Index";
import Typography from "@mui/material/Typography";
import { errorsData } from "../../utils/constants";

export const TeamsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    aboutData,
    contactData,
    errorMessage,
    id,
    squadData,
    club,
    isLoading,
  } = useTeamsHook();

  const [toogle, setToogle] = useState(true);

  useEffect(() => {
    dispatch(getTeams(id));
    dispatch(getCalendar(id));
  }, [id]);

  return (
    <>
      {!!errorMessage ? (
        <Box
          sx={{
            display: "flex",
            margin: "140px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={styles.error}>
            {errorsData[`${errorMessage}`]}
          </Typography>
        </Box>
      ) : toogle ? (
        isLoading ? (
          <Box sx={styles.loading}>
            <img
              style={{ width: "300px", height: "300px" }}
              src="/gif/loading.gif"
            />
          </Box>
        ) : (
          <Container>
            <Box sx={styles.buttonWrapper}>
              <Button disabled>Информация</Button>
              <Button sx={styles.button} onClick={() => setToogle(!toogle)}>
                Календарь
              </Button>
            </Box>

            {club && (
              <Box sx={styles.root}>
                <Box sx={styles.content}>
                  {aboutData && <AboutTeam data={aboutData} />}
                  {contactData && <ContactDetails data={contactData} />}
                </Box>
                {squadData && <Squad data={squadData} />}
              </Box>
            )}
          </Container>
        )
      ) : (
        <Box>
          <Box sx={styles.buttonWrapper}>
            <Button sx={styles.button} onClick={() => setToogle(!toogle)}>
              Информация
            </Button>
            <Button disabled>Календарь</Button>
          </Box>
          <Calendar />
        </Box>
      )}
    </>
  );
};
