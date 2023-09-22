import { formatStatsRating } from "./formatData";

// Fetch User Data
export async function getUserData(username: string): Promise<UserType> {
  const res = await fetch(`http://127.0.0.1:5000/api/user/${username}`, {
    cache: "no-cache",
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
      `http://127.0.0.1:5000/api/user/${username.toLowerCase()}/stats`,
      {
        cache: "force-cache",
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
  // status?: string,
) => {
  try {
    const variantParamQuery =
      variant !== "all games" ? `variant=${variant}&` : "";
    const colorParamQuery = color !== "all games" ? `color=${color}&` : "";
    // const statusParamQuery = status ? `status=${status}` : "";
    const queryParameters = `${variantParamQuery}${colorParamQuery}`;

    const gamesResponse = await fetch(
      `http://127.0.0.1:5000/api/user/${username.toLowerCase()}/games?${queryParameters}`,
      {
        cache: "no-cache",
      },
    );
    return await gamesResponse.json();
  } catch (error) {
    // Handle Error
    if (error instanceof Error) console.error("Error fetching data:", error);
    return null;
  }
};
