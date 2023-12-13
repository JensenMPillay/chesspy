import React from "react";
import StatusList from "./StatusList";

function StatusBoard({
  username,
  statusGamesData,
  tabsData,
}: StatusBoardPropsType): React.JSX.Element {
  return (
    <article className="flex w-full flex-col items-center justify-center rounded bg-neutral-500/10 shadow">
      <ul className="flex w-full flex-col items-center justify-between md:flex-row">
        {tabsData.map((tab, idx) => (
          <StatusList
            key={tab.index}
            username={username}
            statusGamesData={statusGamesData}
            tab={tab}
            idx={tab.index}
          />
        ))}
      </ul>
    </article>
  );
}

export default StatusBoard;
