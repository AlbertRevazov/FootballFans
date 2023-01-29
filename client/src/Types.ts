import { CompetitionTable } from "./components/Competitions/sections/Table/CompetitionTable";

export type Matches = {
  awayTeam: {
    id: number;
    name: string;
  };
  area: {
    ensignUrl: string;
    name: string;
  };
  competition: {
    code: string;
    id: number;
    name: string;
    group?: string;
    emblem: string;
  };
  homeTeam: {
    id: number;
    name: string;
  };
  id: number;
  lastUpdated: string;
  matchday: string;
  odds: {
    msg: string;
  };
  referees: [
    {
      id: number;
      name: string;
      nationality: string;
      role: string;
    }
  ];
  score: {
    duration: string;
    extraTime?: { homeTeam: null; awayTeam: null };
    fullTime?: { homeTeam: null; awayTeam: null };
    halfTime?: { homeTeam: null; awayTeam: null };
    penalties?: { homeTeam: null; awayTeam: null };
    winner?: null;
  };
  season: {
    currentMatchday: number;
    endDate: string;
    id: number;
    startDate: string;
    winner: null;
    stage: string;
    status: string;
    utcDate: string;
  };
};

export type Teams = {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  squad: [
    {
      countryOfBirth: string;
      dateOfBirth: string;
      id: number;
      name: string;
      nationality: string;
      position: string;
    }
  ];
  coach: {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    dateOfBirth?: string;
    nationality: string;
    contract: {
      start: null;
      until: null;
    };
  };
  runningCompetitions: [
    {
      id: number;
      lastUpdated: string;
      code: string;
      name: string;
      plan: string;
      type: string;
      emblem: string;
    }
  ];
  staff: [];
};

export type link = {
  id: number;
  title: string;
  to: string;
  hide: boolean;
  onclick?: boolean;
};

export type AboutProps = {
  data: {
    runningCompetitions: [
      {
        code: string;
        emblem: string;
        id: number;
        name: string;
        type: string;
      }
    ];
    clubColors: string;
    founded: number;
    name: string;
    crest: string;
    venue: string;
    area: {
      id: number;
      name: string;
      code: string;
      flag: string;
    };
  };
}

export type ContactProps = {
  data: { website: string; address: string };
}

export type SquadProps = {
  data: {
    squad: [
      {
        id: number;
        name: string;
        position: string;
        dateOfBirth: string;
        nationality: string;
      }
    ];
    coach: {
      id: number;
      firstName: string;
      lastName: string;
      name: string;
      dateOfBirth: string;
      nationality: string;
    };
  };
}
export type CompetitionsStandingsProps = {
  position: number;
  playedGames: number;
  form: string;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  team: {
    crest: string;
    id: number;
    name: string;
    shortName: string;
    tla: string;
  };
};
export type Scorers = {
  goals: number;
  assists: number;
  penalties: number;
  team: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
  };
  player: {
    id: number;
    name: string;
    firstName: string;
    lastName: number;
    dateOfBirth: string;
    nationality: string;
    position: string;
  };
};
