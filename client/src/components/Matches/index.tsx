import { Box } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { getMatches } from "../../redux/features/matches/matchesSlice";
import { useMatchesHook } from "./hooks";
import { MatchesAccordion } from "./sections/Accordion/MatchesAccordion";
import { styles } from "./styles";

// it makes sense to finish the accordions for the competition

export const MatchesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useMatchesHook();

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
        <Box sx={{ marginTop: "40px" }}>
          <MatchesAccordion />
        </Box>
      )}
    </>
  );
};
