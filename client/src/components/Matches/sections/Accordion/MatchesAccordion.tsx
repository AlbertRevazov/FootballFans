import React from "react";
import { Accordion, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useMatchesHook } from "../../hooks";
import { Link } from "react-router-dom";
import { Matches } from "../../../../types";
import { useAppSelector } from "../../../../hooks/hooks";
import { styles } from "../../styles";
import { errorsData } from "../../../../utils/constants";

export const MatchesAccordion: React.FC = () => {
  const { competionsTodayNames, competitionsNames } = useMatchesHook();
  const { games, errorMessage } = useAppSelector((state) => state.matches);

  return (
    <>
      {!!errorMessage ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alighItems: "center",
            margin: "60px",
          }}
        >
          <Typography sx={[styles.font, { color: "red" }]}>
            {errorsData[`${errorMessage}`]}
          </Typography>
        </Box>
      ) : (
        competitionsNames.map((item: string, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={styles.font}>
                  <img src={competionsTodayNames[item]} style={styles.emblem} />
                  {item}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {games?.map((game: Matches) => {
                  return (
                    <Box key={game.id}>
                      {item === game?.competition?.name && (
                        <Box sx={styles.match} key={game.id}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "auto",
                            }}
                          >
                            <Typography
                              sx={[styles.font, { fontSize: "20px" }]}
                            >
                              Тур {game.season.currentMatchday}
                            </Typography>

                            <img
                              style={{ width: "40px", height: "40px" }}
                              src={game.competition.emblem}
                            />
                          </Box>

                          <Box>
                            <Box
                              sx={[styles.refereeBox, { marginTop: "10px" }]}
                            >
                              <Link
                                to={`/teams/${game.homeTeam.id}`}
                                style={styles.links}
                              >
                                <Typography
                                  sx={[
                                    styles.font,
                                    { ":hover": { color: "darkseagreen" } },
                                  ]}
                                >
                                  <img
                                    style={styles.emblem}
                                    src={game.homeTeam.crest}
                                  />{" "}
                                  {game.homeTeam.name} :
                                </Typography>
                              </Link>
                              <Link
                                to={`/teams/${game.awayTeam.id}`}
                                style={styles.links}
                              >
                                <Typography
                                  sx={[
                                    styles.font,
                                    {
                                      marginLeft: "5px",
                                      ":hover": { color: "#d28188" },
                                    },
                                  ]}
                                >
                                  {game.awayTeam.name}{" "}
                                  <img
                                    style={styles.emblem}
                                    src={game.awayTeam.crest}
                                  />
                                </Typography>
                              </Link>
                            </Box>
                            {!!game.referees.length && (
                              <Box
                                sx={[styles.refereeBox, { marginTop: "10px" }]}
                              >
                                <img
                                  style={{ width: "20px", height: "20px" }}
                                  src="/images/referee.png"
                                />
                                <Typography sx={styles.refereeTitle}>
                                  {game.referees[0]?.name}
                                </Typography>
                                <Typography sx={styles.refereeTitle}>
                                  {game.referees[0]?.nationality}
                                </Typography>
                              </Box>
                            )}
                          </Box>
                          <Link
                            style={styles.links}
                            to={`/competition/${game.competition.code}`}
                          >
                            <Typography
                              sx={[
                                styles.font,
                                {
                                  fontSize: "22px",
                                  marginTop: "10px",
                                  color: "#202020",
                                  ":hover": { color: "#0fabe7" },
                                },
                              ]}
                            >
                              Посмотреть таблицу
                            </Typography>
                          </Link>
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          );
        })
      )}
    </>
  );
};
