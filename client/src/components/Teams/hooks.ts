import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

// todo typed thix component
export const useTeamsHook = () => {
  const { club, isLoading, errorMessage } = useAppSelector(
    (state) => state.teams
  );
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

  const params = useParams();
  const { id } = params;

  return {
    isLoading,
    id,
    errorMessage,
    contactData,
    squadData,
    aboutData,
    club,
  };
};
