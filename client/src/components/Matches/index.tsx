import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getMatches } from "../../redux/features/matches/matchesSlice";
import { Matches } from "../../types";
import { useMatchesHook } from "./hooks";
import { styles } from "./styles";

// it makes sense to finish the accordions for the competition

export const MatchesPage = () => {
  const dispatch = useAppDispatch();
  const { competionsTodayNames, status, isLoading } = useMatchesHook();
  const { games } = useAppSelector((state) => state.matches);

  useEffect(() => {
    dispatch(getMatches());
  }, []);

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
        <Box sx={styles.root}>
          {competionsTodayNames &&
            competionsTodayNames.map(
              (tool) =>
                games &&
                games.map((item: Matches) => {
                  if (tool === item.competition.name) {
                    return (
                      <Box sx={styles.match} key={item.id}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Link
                            style={styles.links}
                            to={`/competition/${item.competition.code}`}
                          >
                            <Typography sx={styles.competitionName}>
                              {tool}
                            </Typography>
                          </Link>
                          <img
                            style={{ width: "40px", height: "40px" }}
                            src={item.competition.emblem}
                          />
                        </Box>
                        <Typography sx={[styles.font, { fontSize: "16px" }]}>
                          Тур {item.season.currentMatchday}
                        </Typography>

                        <Box>
                          <Box sx={styles.refereeBox}>
                            <Link
                              to={`/teams/${item.homeTeam.id}`}
                              style={styles.links}
                            >
                              <Typography
                                sx={[
                                  styles.font,
                                  { ":hover": { color: "darkseagreen" } },
                                ]}
                              >
                                {item.homeTeam.name} :
                              </Typography>
                            </Link>
                            <Link
                              to={`/teams/${item.awayTeam.id}`}
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
                                {item.awayTeam.name}
                              </Typography>
                            </Link>
                          </Box>
                          {!!item.referees.length && (
                            <Box sx={styles.refereeBox}>
                              {/* dont use <img/>*/}
                              <img
                                style={{ width: "20px", height: "20px" }}
                                src="/images/referee.png"
                              />
                              <Typography sx={styles.refereeTitle}>
                                {item.referees[0]?.name}
                              </Typography>
                              <Typography sx={styles.refereeTitle}>
                                {item.referees[0]?.nationality}
                              </Typography>
                            </Box>
                          )}
                        </Box>
                      </Box>
                    );
                  }
                })
            )}
        </Box>
      )}
    </>
  );
};
