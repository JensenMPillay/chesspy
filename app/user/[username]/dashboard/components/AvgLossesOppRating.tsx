import { LoseIcon } from "@/app/utils/components/Icons";
import { getAvgOppRatingFromGames } from "@/app/utils/formatData";
import React from "react";

function AvgLossesOppRating({
  username,
  statusGamesData,
}: StatusGamesDataType): React.JSX.Element {
  const lossesAvgOppRating = getAvgOppRatingFromGames(
    username,
    statusGamesData.losses,
  );
  return (
    <span
      className={`my-2 flex flex-row items-center justify-center text-center text-2xl font-extrabold text-red-600/75 md:text-3xl lg:text-4xl`}
    >
      <LoseIcon className="h-4 w-4" color="text-red-600/75" />
      {lossesAvgOppRating}
    </span>
  );
}

export default AvgLossesOppRating;
