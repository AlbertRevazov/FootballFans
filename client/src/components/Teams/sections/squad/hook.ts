import { SquadProps } from "../../../../types";

export const useSquadHook = ({ data }: SquadProps) => {
  const { coach, squad } = data;
  const goalkeepers = squad?.filter((item) => item.position === "Goalkeeper");
  const defencers = squad?.filter((item) => item.position === "Defence");
  const midfielders = squad?.filter((item) => item.position === "Midfield");
  const offencers = squad?.filter((item) => item.position === "Offence");
  return { coach, goalkeepers, midfielders, offencers, defencers };
};
