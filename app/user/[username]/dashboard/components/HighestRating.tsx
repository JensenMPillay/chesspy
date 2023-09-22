import { HighestRatingIcon } from "@/app/utils/components/Icons";
import React from "react";

function HighestRating({
  ratingData,
}: {
  ratingData: VariantStatsType;
}): React.JSX.Element {
  return (
    <>
      <span
        className={`my-2 flex flex-row items-center justify-center text-center text-4xl font-extrabold md:text-5xl lg:text-6xl`}
      >
        <HighestRatingIcon className="h-6 w-6" color="text-white/50" />
        {ratingData.best.rating}
      </span>
      <span className="text-center text-xs font-extralight capitalize tracking-tighter text-white/50 md:text-sm">
        {ratingData.best.date}
      </span>
    </>
  );
}

export default HighestRating;
