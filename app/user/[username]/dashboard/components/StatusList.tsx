import { updateDetailCountStatusTab } from "@/app/utils/formatData";
import React from "react";

function StatusList({
  username,
  statusGamesData,
  tab,
  idx,
}: {
  username: string;
  statusGamesData: StatusGamesType;
  tab: TabType;
  idx: number;
}) {
  const tabUpdated = updateDetailCountStatusTab(username, statusGamesData, tab);
  return (
    <ul key={idx} className="flex w-1/3 flex-col items-center p-2 capitalize">
      <li className="flex w-full flex-row items-center justify-center">
        <span>{tabUpdated.icon}</span>
        <span className="text-xs font-extralight capitalize tracking-tighter text-white/50 md:text-sm">
          {tabUpdated.label}
        </span>
      </li>
      <li className="flex w-full flex-col items-center md:w-1/2">
        {tabUpdated.details &&
          tabUpdated.details.map((detail, index) => (
            <div className="flex w-full flex-row items-start" key={index}>
              <span className="text-xs font-semibold md:text-sm">
                {detail.count}%
              </span>
              <span className="mx-2 text-xs font-extralight capitalize tracking-tighter text-white/50 md:text-sm">
                {detail.designation}
              </span>
            </div>
          ))}
      </li>
    </ul>
  );
}

export default StatusList;
