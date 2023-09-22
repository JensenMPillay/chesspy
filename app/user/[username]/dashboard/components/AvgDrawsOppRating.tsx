import { DrawIcon } from "@/app/utils/components/Icons";
import { getAvgOppRatingFromGames } from "@/app/utils/formatData";
import React from "react";

function AvgDrawsOppRating({
  username,
  statusGamesData,
}: StatusGamesDataType): React.JSX.Element {
  const drawsAvgOppRating = getAvgOppRatingFromGames(
    username,
    statusGamesData.draws,
  );
  return (
    <span
      className={`my-2 flex flex-row items-center justify-center text-center text-2xl font-extrabold text-white/50 md:text-3xl lg:text-4xl`}
    >
      <DrawIcon className="h-5 w-5" color="text-white/50" />
      {drawsAvgOppRating}
    </span>
  );
}

export default AvgDrawsOppRating;
