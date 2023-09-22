import {
  COLORS_TAB_DATA,
  GAME_DRAW_STATUS,
  GAME_LOSE_STATUS,
  GAME_STATUS,
  GAME_WIN_STATUS,
} from "../data/data";

// Format TimeStamp to DateString
function formatTimestampToDateString(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString(["fr-FR", "en-US"], {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Format User Data
export function formatUserData(userData: UserType): UserType | undefined {
  const { username, url, country, last_online, joined } = userData;

  if (url && country && last_online && joined) {
    if (typeof last_online == "number" && typeof joined == "number") {
      let userURL = url.split("/");
      let countryURL = country.split("/");
      userData = {
        ...userData,
        username: userURL[userURL.length - 1],
        country: `https://flagsapi.com/${
          countryURL[countryURL.length - 1]
        }/shiny/64.png`,
        last_online: formatTimestampToDateString(last_online),
        joined: formatTimestampToDateString(joined),
      };
    }
    return userData;
  }
}

// Format Stats Rating
export async function formatStatsRating(
  statsData: StatsDataType | null,
  variant: string,
) {
  if (statsData && (`chess_${variant}` as keyof StatsDataType) in statsData) {
    const formattedStatsData = { ...statsData };
    const variantData =
      formattedStatsData[`chess_${variant}` as keyof StatsDataType];
    variantData.best.date = formatTimestampToDateString(
      variantData.best.date as number,
    );
    variantData.last.date = formatTimestampToDateString(
      variantData.last.date as number,
    );
    return variantData;
  }
  return null;
}

function getStatusList(status: string): string[] {
  let statusList: string[] = [];
  if (GAME_STATUS.includes(status)) {
    statusList.push(status);
  }
  switch (status) {
    case "wins":
      statusList = GAME_WIN_STATUS;
      break;
    case "draws":
      statusList = GAME_DRAW_STATUS;
      break;
    case "losses":
      statusList = GAME_LOSE_STATUS;
      break;
    default:
      break;
  }
  return statusList;
}

export function getStatusGamesByStatus(
  username: string,
  gamesData: GameType[],
  status: string,
): GameType[] {
  const statusGames: GameType[] = [];
  const statusList = getStatusList(status);

  if (statusList) {
    for (const game of gamesData) {
      for (let i = 1; i < COLORS_TAB_DATA.length; i++) {
        const color = COLORS_TAB_DATA[i].label;
        const coloredGame = game[color];
        if (
          coloredGame &&
          statusList.includes(coloredGame.result) &&
          coloredGame.username.toLowerCase() === username.toLowerCase()
        ) {
          statusGames.push(game);
          break;
        }
      }
    }
  }

  return statusGames;
}

export function getOppsStatusGamesByStatus(
  username: string,
  gamesData: GameType[],
  status: string,
): GameType[] {
  const statusGames: GameType[] = [];
  const statusList = getStatusList(status);

  if (statusList) {
    for (const game of gamesData) {
      for (let i = 1; i < COLORS_TAB_DATA.length; i++) {
        const color = COLORS_TAB_DATA[i].label;
        const coloredGame = game[color];
        if (
          coloredGame &&
          statusList.includes(coloredGame.result) &&
          coloredGame.username.toLowerCase() != username.toLowerCase()
        ) {
          statusGames.push(game);
          break;
        }
      }
    }
  }

  return statusGames;
}

export function getRealStatusFromDesignation(designation: string): string {
  let status: string = "";
  switch (designation) {
    case "resignation":
      status = "resigned";
      break;
    case "checkmate":
      status = "checkmated";
      break;
    case "timeout":
      status = "timeout";
      break;
    case "abandon":
      status = "abandoned";
      break;
    case "agreement":
      status = "agreed";
      break;
    case "threefold repetition":
      status = "repetition";
      break;
    case "stalemate":
      status = "stalemate";
      break;
    case "insufficient material":
      status = "insufficient";
      break;
    default:
      break;
  }
  return status;
}

export function updateDetailCountStatusTab(
  username: string,
  statusGamesData: StatusGamesType,
  tab: TabType,
) {
  if (tab && tab.details) {
    for (let i = 0; i < tab.details.length; i++) {
      const detail = tab.details[i];
      const status = getRealStatusFromDesignation(detail.designation);
      let games: GameType[] = [];
      switch (tab.label) {
        case "wins by":
          games = getOppsStatusGamesByStatus(
            username,
            statusGamesData.wins,
            status,
          );
          detail.count = games.length
            ? Number(
                ((games.length / statusGamesData.wins.length) * 100).toFixed(0),
              )
            : 0;
          break;
        case "draws by":
          games = getStatusGamesByStatus(
            username,
            statusGamesData.draws,
            status,
          );
          detail.count = games.length
            ? Number(
                ((games.length / statusGamesData.draws.length) * 100).toFixed(
                  0,
                ),
              )
            : 0;
          break;
        case "losses by":
          games = getStatusGamesByStatus(
            username,
            statusGamesData.losses,
            status,
          );
          detail.count = games.length
            ? Number(
                ((games.length / statusGamesData.losses.length) * 100).toFixed(
                  0,
                ),
              )
            : 0;
          break;
        default:
          break;
      }
    }
  }
  return tab;
}

export async function getStatusGames(
  username: string,
  gamesData: GameType[],
): Promise<StatusGamesType> {
  const statusGames: StatusGamesType = { wins: [], draws: [], losses: [] };
  for (const key of Object.keys(statusGames)) {
    statusGames[key] = getStatusGamesByStatus(username, gamesData, key);
  }
  return statusGames;
}

// Get Opponents List From Games
function getOpponentsFromGames(
  username: string,
  gamesData: GameType[],
): PlayerType[] {
  const opponentsList: PlayerType[] = [];
  for (let i = 0; i < gamesData.length; i++) {
    let game = gamesData[i];
    for (let j = 1; j < COLORS_TAB_DATA.length; j++) {
      let color = COLORS_TAB_DATA[j].label;
      let coloredGame = game[color];
      if (coloredGame.username != username) {
        let opponent: PlayerType = {
          username: "",
          rating: 0,
          result: "",
        };
        opponent = {
          username: coloredGame.username,
          rating: coloredGame.rating,
          result: coloredGame.result,
        };
        opponentsList.push(opponent);
      }
    }
  }
  return opponentsList;
}

// Get Avg Rating From Opponents List
function getAvgOppRatingFromList(opponentsList: PlayerType[]): number | null {
  if (opponentsList && opponentsList.length > 0) {
    const sumOppsRatings = opponentsList.reduce(
      (accumulator, opponent) => accumulator + opponent.rating,
      0,
    );
    return Number((sumOppsRatings / opponentsList.length).toFixed(0));
  }
  return null;
}

// Get Max Opponent From List
function getMaxOppRatingFromList(
  opponentsList: PlayerType[],
): PlayerType | null {
  if (opponentsList && opponentsList.length > 0) {
    const maxOpponent: PlayerType = opponentsList.reduce(
      (maxOpp, opponent) =>
        opponent.rating > maxOpp.rating ? opponent : maxOpp,
      opponentsList[0],
    );
    return maxOpponent;
  }
  return null;
}

// Get Avg Opponents Rating From Games
export function getAvgOppRatingFromGames(
  username: string,
  gamesData: GameType[],
): number | null {
  const oppsRatingsList = getOpponentsFromGames(username, gamesData);
  const avgOppRating = getAvgOppRatingFromList(oppsRatingsList);
  return avgOppRating;
}

// Get Max Opponent From Games
export function getMaxOppRatingFromGames(
  username: string,
  gamesData: GameType[],
): PlayerType | null {
  const oppsRatingsList = getOpponentsFromGames(username, gamesData);
  const maxOppRating = getMaxOppRatingFromList(oppsRatingsList);
  return maxOppRating;
}
