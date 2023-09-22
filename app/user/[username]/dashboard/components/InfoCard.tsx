import React, { PropsWithChildren } from "react";

function InfoCard({
  title,
  width,
  children,
}: PropsWithChildren<InfoCardPropsType>): React.JSX.Element {
  return (
    <article
      className={`my-2 flex flex-col items-center justify-between ${width}`}
    >
      <>
        <span className="text-center text-xs font-extralight capitalize tracking-tighter text-white/50 md:text-sm">
          {title}
        </span>
        {children}
      </>
    </article>
  );
}

export default InfoCard;
