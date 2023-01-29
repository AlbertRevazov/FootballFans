import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { errorsData } from "../../redux/features/errorData";
import { RootState } from "../../redux/store";

export const useMatchesHook = () => {
  const { games } = useAppSelector((state) => state.matches);
  const { isLoading } = useAppSelector((state) => state.matches);
  const { errorMessage } = useAppSelector((state) => state.matches);
  const status = errorsData[`${errorMessage}`];

  // filter competitions that are available
  const competitionsToday = () => {
    const array: any = [];
    games.map((item: any) => {
      array.push(item.competition.name);
    });
    return Array.from(new Set(array));
  };
  const competionsTodayNames = competitionsToday();

  return { competionsTodayNames, isLoading, status };
};
