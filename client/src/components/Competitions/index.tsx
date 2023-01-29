import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  getScorersCompetition,
  getTableCompetition,
} from "../../redux/features/competitions/competitionsSlice";
import { CompetitionTable } from "./sections/Table/CompetitionTable";
import { Box, Button } from "@mui/material";
import { ScorersPage } from "./sections/Scorers";
import { styles } from "./styles";

export const CompetitionPage = () => {
  const [scorers, setScorers] = useState(false);
  const params = useParams();
  const { code } = params;
  const { isLoading } = useAppSelector((state) => state.competitions);
  const dispatch = useAppDispatch();
  const { standings }: any = useAppSelector(
    (state) => state?.competitions.tournament
  );

  useEffect(() => {
    scorers
      ? dispatch(getScorersCompetition(code))
      : dispatch(getTableCompetition(code));
  }, [code, scorers]);

  return (
    <Box>
      <Box sx={styles.buttonsBox}>
        <Button
          variant="text"
          disabled={!scorers}
          onClick={() => setScorers(false)}
          sx={[styles.darkTableCell, styles.buttonsTable]}
        >
          Турнирная Таблица
        </Button>
        <Button
          variant="text"
          disabled={scorers}
          onClick={() => setScorers(true)}
          sx={[styles.darkTableCell, styles.buttonsTable]}
        >
          Бомбардиры
        </Button>
      </Box>
      {isLoading ? (
        <Box sx={styles.loading}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="/gif/loading.gif"
          />
        </Box>
      ) : !scorers ? (
        <CompetitionTable data={standings} />
      ) : (
        <ScorersPage />
      )}
    </Box>
  );
};
