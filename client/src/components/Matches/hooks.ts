import { useAppSelector } from "../../hooks/hooks";
import { errorsData } from "../../redux/features/errorData";

export const useMatchesHook = () => {
  const { games } = useAppSelector((state) => state.matches);
  const { isLoading } = useAppSelector((state) => state.matches);
  const { errorMessage } = useAppSelector((state) => state.matches);
  const status = errorsData[`${errorMessage}`];
  console.log(games);

  // filter competitions that are available
  const competitionsToday = () => {
    const array: string[] = [];
    if (!!games?.length) {
      games.map((item) => {
        return array.push(item.competition.name);
      });
    }

    return Array.from(new Set(array));
  };
  const competionsTodayNames = competitionsToday();

  return { competionsTodayNames, isLoading, status };
};
