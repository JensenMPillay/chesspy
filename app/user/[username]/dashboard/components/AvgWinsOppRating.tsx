import { WinIcon } from "@/app/utils/components/Icons";
import { getAvgOppRatingFromGames } from "@/app/utils/formatData";
import React from "react";

function AvgWinsOppRating({
  username,
  statusGamesData,
}: StatusGamesDataType): React.JSX.Element {
  const winsAvgOppRating = getAvgOppRatingFromGames(
    username,
    statusGamesData.wins,
  );
  return (
    <span
      className={`my-2 flex flex-row items-center justify-center text-center text-2xl font-extrabold text-green-600/75 md:text-3xl lg:text-4xl`}
    >
      <WinIcon className="h-4 w-4" color="text-green-600/75" />
      {winsAvgOppRating}
    </span>
  );
}

export default AvgWinsOppRating;
