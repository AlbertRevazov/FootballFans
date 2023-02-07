import { useAppSelector } from "../../../../hooks/hooks";
import React, { useMemo } from "react";
export const useCalendarHook = () => {
  const { calendar } = useAppSelector((state) => state.teams);

  const matchDate = (value: string) => {
    const date = value.split("").map((char, index) => {
      if (index < 10) {
        return char;
      }
    });

    return {
      date: date.join(""),
      year: `20${date[2]}${date[3]}`,
      month: `${date[5]}${date[6]}`,
    };
  };

  return { calendar, matchDate };
};
