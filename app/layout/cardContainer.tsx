import React, { PropsWithChildren } from "react";

function CardContainer({
  className,
  children,
}: PropsWithChildren<ContainerPropsType>): React.JSX.Element {
  return (
    <section
      className={`my-2 flex w-full flex-col items-center justify-center md:my-4 md:flex-row lg:my-6 xl:my-8 ${className}`}
    >
      {children}
    </section>
  );
}

export default CardContainer;
