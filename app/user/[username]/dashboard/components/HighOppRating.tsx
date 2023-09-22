import { TrophyIcon } from "@/app/utils/components/Icons";
import { getMaxOppRatingFromGames } from "@/app/utils/formatData";
import React from "react";

function HighOppRating({
  username,
  gamesData,
}: GamesDataType): React.JSX.Element {
  const maxOppRating = getMaxOppRatingFromGames(username, gamesData);
  return (
    <>
      <span
        className={`my-2 flex flex-row items-center justify-center text-center  text-3xl font-extrabold md:text-4xl lg:text-5xl`}
      >
        <TrophyIcon className="h-12 w-12" color="text-white/50" />
        {maxOppRating?.rating}
      </span>
      <span className="text-center text-xs font-extralight capitalize tracking-tighter text-white/50 hover:text-primary md:text-sm">
        <a href={`https://www.chess.com/member/${maxOppRating?.username}`}>
          {maxOppRating?.username}
        </a>
      </span>
    </>
  );
}

export default HighOppRating;
