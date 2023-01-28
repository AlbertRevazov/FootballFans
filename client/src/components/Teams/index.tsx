import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getTeams } from "../../redux/features/teams/teamsSlice";
import { AboutTeam } from "./sections/about";
import { ContactDetails } from "./sections/contact";
import { Squad } from "./sections/squad/Index";

export const TeamsPage = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useAppDispatch();
  const { club } = useAppSelector((state) => state.teams);
  const {
    name,
    shortName,
    tla,
    crest,
    address,
    website,
    founded,
    clubColors,
    venue,
    area,
    squad,
    coach,
    runningCompetitions,
  }: any = club;

  const aboutData = {
    area,
    clubColors,
    founded,
    name,
    venue,
    crest,
    shortName,
    tla,
    runningCompetitions,
  };
  const contactData = { website, address };
  const squadData = { squad, coach };

  useEffect(() => {
    dispatch(getTeams(id));
  }, [id]);

  return (
    <Container>
      {club && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "center",
            margin: "30px 0 30px 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {aboutData && <AboutTeam data={aboutData} />}

            {contactData && <ContactDetails data={contactData} />}
          </Box>
          {squadData && <Squad data={squadData} />}
        </Box>
      )}
    </Container>
  );
};
