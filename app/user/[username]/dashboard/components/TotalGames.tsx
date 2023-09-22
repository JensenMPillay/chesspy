import { ChessIcon } from "@/app/utils/components/Icons";
import React from "react";

function TotalGames({ gamesData }: GamesDataType): React.JSX.Element {
  return (
    <span
      className={`my-2 flex flex-row items-center justify-center text-center text-4xl font-extrabold md:text-5xl lg:text-6xl`}
    >
      <ChessIcon className="h-6 w-6" color="text-white/50" />
      {gamesData.length}
    </span>
  );
}

export default TotalGames;
