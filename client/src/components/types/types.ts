export type Matches = {
  awayTeam: {
    id: number;
    name: string;
  };
  competition: {
    id: number;
    name: string;
    group?: string;
    emblem: string;
    area: {
      code: string;
      ensignUrl: string;
      name: string;
    };
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
