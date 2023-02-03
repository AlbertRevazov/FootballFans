import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { getTeams } from "../../redux/features/teams/teamsSlice";
import { useTeamsHook } from "./hooks";
import { AboutTeam } from "./sections/about";
import { ContactDetails } from "./sections/contact";
import { Squad } from "./sections/squad/Index";
import { styles } from "./styles";

export const TeamsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { aboutData, contactData, id, squadData, club, isLoading } =
    useTeamsHook();

  useEffect(() => {
    dispatch(getTeams(id));
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Box sx={styles.loading}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="/gif/loading.gif"
          />
        </Box>
      ) : (
        <Container>
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
      )}
    </>
  );
};
