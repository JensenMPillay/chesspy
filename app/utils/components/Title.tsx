import React, { PropsWithChildren } from "react";

function Title({ children }: PropsWithChildren): React.JSX.Element {
  return (
    <h2 className="m-2 text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
      {children}
    </h2>
  );
}

export default Title;
