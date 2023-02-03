export type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
  password: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type UserState = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  status: string | null;
};

export type Table = [
  {
    draw: number;
    form: string;
    goalDifference: number;
    goalsAgainst: number;
    goalsFor: number;
    lost: number;
    playedGames: number;
    points: number;
    position: number;
    team: {
      id: number;
      name: string;
      shortName: string;
      tla: string;
      crest: string;
    };
    won: number;
  }
];

export type Standings = {
  group: null;
  stage: string;
  table: Table;
  type: string;
};

export type Tournament = {
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  filters: { season: string };
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: null;
  };
  standings: Standings[];
};

export type Matches = {
  awayTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
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
    shortName: string;
    tla: string;
    crest: string;
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

export type ContactProps = {
  data: { website: string; address: string };
};

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
};
//   goals: number;
//   assists: number;
//   penalties: number;
//   team: {
//     id: number;
//     name: string;
//     shortName: string;
//     tla: string;
//     crest: string;
//     address: string;
//     website: string;
//     founded: number;
//     clubColors: string;
//     venue: string;
//   };
//   player: {
//     id: number;
//     name: string;
//     firstName: string;
//     lastName: number;
//     dateOfBirth: string;
//     nationality: string;
//     position: string;
//   };
// };

export type TopScorers = {
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  count: number;
  filters: {
    season: string;
    limit: number;
  };
  scorers: Scorers[];
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner?: number;
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

export type TournamentState = {
  tournament: Tournament | null;
  topScorers: TopScorers | null;
  isLoading: boolean;
};
