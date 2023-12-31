import { formatStatsRating } from "./formatData";

const URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
  : "http://localhost:3000/api";

const jsonHeaders = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  return headers;
};

// Fetch User Data
export async function getUserData(username: string): Promise<UserType> {
  const res = await fetch(`${URL}/user/${username}`, {
    cache: "no-cache",
    headers: jsonHeaders(),
  });
  return res.json();
}

// Handle User Not Found
export function isUserNotFound(userData: UserType | null) {
  return userData && "code" in userData && userData["code"] == "404";
}

// Fetch Stats Data
export const fetchStatsData = async (username: string, variant: string) => {
  try {
    const statsResponse = await fetch(
      `${URL}/user/${username.toLowerCase()}/stats`,
      {
        cache: "force-cache",
        headers: jsonHeaders(),
      },
    );
    const statsData = await statsResponse.json();

    return await formatStatsRating(statsData, variant);
  } catch (error) {
    // Handle Error
    if (error instanceof Error) console.error("Error fetching data:", error);
    return null;
  }
};

// Fetch Games Data
export const fetchGamesData = async (
  username: string,
  variant: string,
  color: string,
): Promise<GameType[]> => {
  try {
    const variantParamQuery =
      variant !== "all games" ? `variant=${variant}&` : "";
    const colorParamQuery = color !== "all games" ? `color=${color}&` : "";
    const queryParameters =
      Boolean(variantParamQuery) || Boolean(colorParamQuery)
        ? `?${variantParamQuery}${colorParamQuery}`
        : "";

    const gamesResponse = await fetch(
      `${URL}/user/${username.toLowerCase()}/games${queryParameters}`,
      {
        cache: "no-cache",
        headers: jsonHeaders(),
      },
    );

    if (gamesResponse.status === 500) return [];

    const gamesData: GameType[] = await gamesResponse.json();

    return gamesData;
  } catch (error) {
    if (error instanceof Error) console.error("Error fetching data:", error);
    return [];
  }
};
