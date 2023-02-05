import {
  Box,
  Container,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { useTeamsHook } from "../../hooks";
import { useCalendarHook } from "./hooks";
import { styles } from "./styles";

export const Calendar: React.FC = () => {
  const { calendar, matchDate } = useCalendarHook();
  const { id } = useTeamsHook();

  return (
    <>
      <Box sx={styles.root}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            {calendar?.matches.map((match) => (
              <Container key={match.id}>
                <Box
                  key={match.id}
                  sx={{ display: "flex", justifyContent: "start" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "start",
                    }}
                  >
                    <Typography sx={[styles.font, { width: "160px" }]}>
                      {matchDate(match.utcDate).date}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {match.competition.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "start",
                      margin: "20px",
                    }}
                  >
                    <Typography>Тур {match.matchday}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                      }}
                    >
                      <Typography sx={[styles.font, { margin: "0 4px 0 4px" }]}>
                        {match.homeTeam.name}
                      </Typography>

                      <Typography sx={styles.font}>
                        {match.score.fullTime.home >= 0
                          ? match.score.fullTime.home
                          : null}
                      </Typography>
                      <Typography sx={{ margin: "4px" }}>-</Typography>
                      <Typography sx={styles.font}>
                        {match.score.fullTime.away >= 0
                          ? match.score.fullTime.away
                          : null}
                      </Typography>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/teams/${match.awayTeam.id}`}
                      >
                        <Typography
                          sx={[styles.font, { margin: "0 4px 0 4px" }]}
                        >
                          {match.awayTeam.name}
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ marginTop: "5px" }} />
              </Container>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
