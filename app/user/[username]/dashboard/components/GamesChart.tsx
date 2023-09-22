import React from "react";
import {
  DrawIcon,
  LoseIcon,
  WinIcon,
} from "../../../../utils/components/Icons";

function GamesChart({
  gamesData,
  statusGamesData,
}: GamesChartPropsType): React.JSX.Element {
  const { wins, draws, losses } = statusGamesData;
  return (
    <article className="flex w-3/4 flex-row items-center justify-center">
      <div
        className={`flex flex-col items-start justify-center text-green-600/75`}
        style={{
          width: `${((wins.length / gamesData.length) * 100).toFixed(0)}%`,
        }}
      >
        <span
          className={`flex w-full flex-row items-center justify-start text-center text-xl font-extrabold md:text-2xl`}
        >
          <WinIcon className=" h-3 w-3" />
          {((wins.length / gamesData.length) * 100).toFixed(0)}%
        </span>
        <span className="my-1 h-2 w-full bg-green-500/75 p-2"></span>
        <span className="text-center text-xs font-extralight capitalize tracking-tighter text-green-600/75 md:text-sm">
          {wins.length}&nbsp;W
        </span>
      </div>
      <div
        className={`flex flex-col items-center justify-center text-white/50`}
        style={{
          width: `${((draws.length / gamesData.length) * 100).toFixed(0)}%`,
        }}
      >
        <span
          className={`flex w-full flex-row items-center justify-center text-center text-xl font-extrabold md:text-2xl`}
        >
          <DrawIcon className="!m-1 h-4 w-4" />
          {((draws.length / gamesData.length) * 100).toFixed(0)}%
        </span>
        <span className="my-1 h-2 w-full bg-white/50 p-2"></span>
        <span className="text-center text-xs font-extralight capitalize tracking-tighter text-white/50 md:text-sm">
          {draws.length}&nbsp;D
        </span>
      </div>
      <div
        className={`flex flex-col items-end justify-center text-red-600/75`}
        style={{
          width: `${((losses.length / gamesData.length) * 100).toFixed(0)}%`,
        }}
      >
        <span
          className={`flex w-full flex-row items-center justify-end text-center text-xl font-extrabold md:text-2xl`}
        >
          <LoseIcon className="h-3 w-3" />
          {((losses.length / gamesData.length) * 100).toFixed(0)}%
        </span>
        <span className="my-1 h-2 w-full bg-red-500/75 p-2"></span>
        <span className="text-center text-xs font-extralight capitalize tracking-tighter text-red-600/75 md:text-sm">
          {losses.length}&nbsp;L
        </span>
      </div>
    </article>
  );
}

export default GamesChart;
