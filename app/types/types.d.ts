// Container
type ContainerPropsType = {
  className?: string;
};

// Icon
type IconPropsType = {
  color?: string;
  className?: string;
};

// User
type UserType = {
  player_id: number;
  avatar: string;
  country: string;
  joined: number | string;
  last_online: number | string;
  url: string;
  username: string;
};

// DashBoard

// Tab
type StatusDetail = {
  count?: number;
  designation: string;
};
type TabType = {
  index: number;
  icon?: React.ReactNode;
  label: string;
  details?: StatusDetail[];
};

type tabUnderlinePropsType = {
  position: number;
  width: number;
};

type UseActiveTabPropsType = {
  tabsRef: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  initialTab?: TabType;
};

type UseActiveTabType = {
  activeTab: TabType;
  setActiveTab: (activeTab: TabType) => void;
  tabUnderlineProps: tabUnderlinePropsType;
};

type TabsPropsType = {
  tabsData: TabType[];
  className?: string;
  colorUnderline?: string;
  tabsRef: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  useActiveTabProps: UseActiveTabType;
  setIsLoading: React.Dispatch;
};

type InfoCardPropsType = {
  title: string;
  width?: string;
};

// Game
type PlayerType = {
  result: string;
  username: string;
  rating: number;
};

type GameType = {
  code?: number;
  black: PlayerType;
  white: PlayerType;
  // Give Index Permission
  [key: string]: any;
};

type GamesDataType = {
  username: string;
  gamesData: Array<GameType>;
};

type StatusGamesType = {
  wins: Array<GameType>;
  draws: Array<GameType>;
  losses: Array<GameType>;
  // Give Index Permission
  [key: string]: any;
};
type StatusGamesDataType = {
  username: string;
  statusGamesData: StatusGamesType;
};

//Games
type GamesChartPropsType = {
  gamesData: Array<GameType>;
  statusGamesData: StatusGamesType;
};

//Status
type StatusBoardPropsType = {
  username: string;
  statusGamesData: StatusGamesType;
  tabsData: TabType[];
};

// Stats
type VariantStatsType = {
  best: {
    date: number | string;
    rating: number;
  };
  last: {
    date: number | string;
    rating: number;
  };
};
type StatsDataType = {
  chess_rapid: VariantStatsType;
  chess_blitz: VariantStatsType;
  chess_bullet: VariantStatsType;
};
