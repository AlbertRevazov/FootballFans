import { useAppSelector } from "../../hooks/hooks";

export const useMatchesHook = () => {
  const { games } = useAppSelector((state) => state.matches);
  const { isLoading } = useAppSelector((state) => state.matches);
  const { errorMessage } = useAppSelector((state) => state.matches);

  // filter competitions that are available and add in object
  const competitionsToday = () => {
    const competitionEmblems: any = {};
    if (!!games?.length) {
      games.map((item) => {
        return (competitionEmblems[item.competition.name] =
          item.competition.emblem);
      });
    }
    return competitionEmblems;
  };
  const competionsTodayNames = competitionsToday();
  //just competition names array for accordion list
  const competitionsNames = Object.keys(competionsTodayNames);
  return { competionsTodayNames, competitionsNames, isLoading, errorMessage };
};
