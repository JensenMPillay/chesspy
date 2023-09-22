import { OpponentIcon } from "@/app/utils/components/Icons";
import { getAvgOppRatingFromGames } from "@/app/utils/formatData";
import React from "react";

function AvgOppRating({
  username,
  gamesData,
}: GamesDataType): React.JSX.Element {
  const avgOppRating = getAvgOppRatingFromGames(username, gamesData);
  return (
    <span
      className={`my-2 flex flex-row items-center justify-center text-center text-3xl font-extrabold md:text-4xl lg:text-5xl`}
    >
      <OpponentIcon className="h-8 w-8" color="text-white/50" />
      {avgOppRating}
    </span>
  );
}

export default AvgOppRating;
