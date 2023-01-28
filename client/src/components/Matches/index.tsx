import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { errorsData } from "../../redux/features/errorData";
import { getMatches } from "../../redux/features/matches/matchesSlice";
import { Matches } from "../types/types";
import { styles } from "./styles";

export const MatchesPage = () => {
  const dispatch = useAppDispatch();
  const { games }: any = useAppSelector((state) => state.matches);
  const { errorMessage }: any = useAppSelector((state) => state.matches);

  const status = errorsData[`${errorMessage}`];

  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status]);

  const competitionsToday = () => {
    const array: any = [];
    games.map((item: any) => {
      array.push(item.competition.name);
    });
    return Array.from(new Set(array));
  };

  const competionsTodayNames = competitionsToday();

  useEffect(() => {
    dispatch(getMatches());
  }, []);

  return (
    <Box sx={styles.root}>
      {competionsTodayNames &&
        competionsTodayNames.map(
          (compet: any) =>
            games &&
            games.map((item: Matches) => {
              if (compet === item.competition.name) {
                return (
                  <Box sx={styles.match} key={item.id}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography sx={styles.competitionName}>
                        {compet}
                      </Typography>
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

                      <Box sx={styles.refereeBox}>
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
                    </Box>
                  </Box>
                );
              }
            })
        )}
    </Box>
  );
};
